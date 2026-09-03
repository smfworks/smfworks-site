"use client";
import { useEffect, useRef } from "react";

interface Ember {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  brightness: number;
}

interface AgentNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

export default function ForgeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Resize handler — use device pixel ratio for crispness
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    // Get logical dimensions
    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    // ── Particle systems ──
    const embers: Ember[] = [];
    const agentNodes: AgentNode[] = [];
    const sparks: Spark[] = [];

    const MAX_EMBERS = 45;
    const NUM_AGENTS = 10;
    const PROXIMITY = 120;

    // Initialize agent nodes
    for (let i = 0; i < NUM_AGENTS; i++) {
      agentNodes.push({
        x: Math.random() * W(),
        y: Math.random() * H() * 0.7,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    // Spawn an ember
    const spawnEmber = (): Ember => {
      const maxLife = 80 + Math.random() * 60;
      return {
        x: Math.random() * W(),
        y: H() - 5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -(0.5 + Math.random() * 1.2),
        life: 0,
        maxLife,
        size: 1 + Math.random() * 2,
        brightness: 0.5 + Math.random() * 0.5,
      };
    };

    // Pre-fill embers at various life stages so the bed looks alive immediately
    for (let i = 0; i < MAX_EMBERS; i++) {
      const e = spawnEmber();
      e.life = Math.random() * e.maxLife;
      e.y = H() - (e.life / e.maxLife) * H() * 0.9;
      embers.push(e);
    }

    // Draw coal bed gradient (used both animated and static)
    const drawCoalBed = () => {
      const w = W();
      const h = H();
      const grad = ctx.createRadialGradient(
        w / 2,
        h,
        0,
        w / 2,
        h,
        Math.max(w * 0.7, 400)
      );
      grad.addColorStop(0, "rgba(255, 100, 30, 0.25)");
      grad.addColorStop(0.3, "rgba(255, 80, 20, 0.12)");
      grad.addColorStop(0.6, "rgba(180, 50, 10, 0.05)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    };

    // Draw a single ember with glow
    const drawEmber = (e: Ember) => {
      const w = W();
      const h = H();
      const lifeRatio = e.life / e.maxLife;
      const fade = lifeRatio < 0.15 ? lifeRatio / 0.15 : lifeRatio > 0.85 ? (1 - lifeRatio) / 0.15 : 1;
      const alpha = e.brightness * fade;
      const heightFactor = 1 - e.y / h; // 0 at bottom, 1 at top
      // Color shifts from deep orange near bed to yellow higher up
      const r = 255;
      const g = Math.floor(120 + heightFactor * 80);
      const b = Math.floor(30 + heightFactor * 40);

      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      // Outer glow
      const glowGrad = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.size * 6);
      glowGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.4})`);
      glowGrad.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${alpha * 0.1})`);
      glowGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.size * 6, 0, Math.PI * 2);
      ctx.fill();

      // Core
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    // Update an ember
    const updateEmber = (e: Ember) => {
      e.life++;
      e.x += e.vx;
      e.y += e.vy;
      // Flicker
      e.vx += (Math.random() - 0.5) * 0.05;
      e.vy *= 0.998;
      // Slight upward acceleration to simulate heat
      e.vy -= 0.002;
      return e.life < e.maxLife && e.y > 0;
    };

    // Draw agent node
    const drawAgentNode = (n: AgentNode) => {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 8);
      grad.addColorStop(0, "rgba(91, 214, 221, 0.6)");
      grad.addColorStop(0.5, "rgba(91, 214, 221, 0.2)");
      grad.addColorStop(1, "rgba(91, 214, 221, 0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(n.x, n.y, 8, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgba(91, 214, 221, 0.8)";
      ctx.beginPath();
      ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    // Update agent node
    const updateAgentNode = (n: AgentNode) => {
      n.x += n.vx;
      n.y += n.vy;
      // Bounce off edges
      if (n.x < 0 || n.x > W()) n.vx *= -1;
      if (n.y < 0 || n.y > H() * 0.8) n.vy *= -1;
      // Slight random drift
      n.vx += (Math.random() - 0.5) * 0.01;
      n.vy += (Math.random() - 0.5) * 0.01;
      // Clamp velocity
      n.vx = Math.max(-0.4, Math.min(0.4, n.vx));
      n.vy = Math.max(-0.4, Math.min(0.4, n.vy));
    };

    // Draw proximity lines between agent nodes
    const drawConnections = () => {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < agentNodes.length; i++) {
        for (let j = i + 1; j < agentNodes.length; j++) {
          const dx = agentNodes[i].x - agentNodes[j].x;
          const dy = agentNodes[i].y - agentNodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < PROXIMITY) {
            const alpha = (1 - dist / PROXIMITY) * 0.15;
            ctx.strokeStyle = `rgba(91, 214, 221, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(agentNodes[i].x, agentNodes[i].y);
            ctx.lineTo(agentNodes[j].x, agentNodes[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();
    };

    // Draw a spark
    const drawSpark = (s: Spark) => {
      const lifeRatio = s.life / s.maxLife;
      const alpha = 1 - lifeRatio;
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      // Glow
      const glowGrad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 5);
      glowGrad.addColorStop(0, `rgba(255, 200, 80, ${alpha * 0.5})`);
      glowGrad.addColorStop(0.5, `rgba(255, 150, 40, ${alpha * 0.15})`);
      glowGrad.addColorStop(1, `rgba(255, 100, 20, 0)`);
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size * 5, 0, Math.PI * 2);
      ctx.fill();
      // Core
      ctx.fillStyle = `rgba(255, 220, 120, ${alpha})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    // Update a spark
    const updateSpark = (s: Spark) => {
      s.life++;
      s.x += s.vx;
      s.y += s.vy;
      s.vy += 0.08; // gravity
      s.vx *= 0.98;
      s.vy *= 0.98;
      return s.life < s.maxLife;
    };

    // Spawn sparks from a click position
    const spawnSparks = (x: number, y: number) => {
      const count = 15 + Math.floor(Math.random() * 11);
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
        const speed = 1 + Math.random() * 4;
        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1,
          life: 0,
          maxLife: 40 + Math.random() * 20,
          size: 0.8 + Math.random() * 1.2,
        });
      }
    };

    let animationId: number;

    if (!prefersReducedMotion) {
      const animate = () => {
        const w = W();
        const h = H();

        // Clear with slight fade for trail effect
        ctx.fillStyle = "rgba(11, 11, 13, 0.12)";
        ctx.fillRect(0, 0, w, h);

        // Draw coal bed glow at bottom
        drawCoalBed();

        // Update and draw embers
        for (let i = embers.length - 1; i >= 0; i--) {
          if (!updateEmber(embers[i])) {
            embers[i] = spawnEmber();
          }
          drawEmber(embers[i]);
        }

        // Update and draw agent nodes + connection lines
        drawConnections();
        for (const node of agentNodes) {
          updateAgentNode(node);
          drawAgentNode(node);
        }

        // Update and draw sparks
        for (let i = sparks.length - 1; i >= 0; i--) {
          if (!updateSpark(sparks[i])) {
            sparks.splice(i, 1);
          } else {
            drawSpark(sparks[i]);
          }
        }

        animationId = requestAnimationFrame(animate);
      };
      animate();
    } else {
      // Static coal bed only — draw the gradient once
      ctx.fillStyle = "#0b0b0d";
      ctx.fillRect(0, 0, W(), H());
      drawCoalBed();
    }

    // Click handler for sparks
    const handleClick = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spawnSparks(x, y);
    };
    canvas.addEventListener("click", handleClick);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ cursor: "pointer" }}
      aria-hidden="true"
    />
  );
}