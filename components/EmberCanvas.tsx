"use client";

import { useEffect, useRef } from "react";

interface EmberParticle {
  x: number;
  y: number;
  size: number;
  speed: number;
  baseOpacity: number;
  wobble: number;
  wobbleSpeed: number;
}

export default function EmberCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    const particles: EmberParticle[] = [];

    function resize() {
      w = canvas!.width = window.innerWidth;
      h = canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function resetParticle(p: EmberParticle, initial = false) {
      p.x = Math.random() * w;
      p.y = initial ? h + Math.random() * 400 : h + Math.random() * 300;
      p.size = Math.random() * 3.5 + 1.2;
      p.speed = Math.random() * 1.2 + 0.4;
      p.baseOpacity = Math.random() * 0.7 + 0.3;
      p.wobble = Math.random() * Math.PI * 2;
      p.wobbleSpeed = Math.random() * 0.03 + 0.01;
    }

    for (let i = 0; i < 220; i++) {
      const p: EmberParticle = { x: 0, y: 0, size: 0, speed: 0, baseOpacity: 0, wobble: 0, wobbleSpeed: 0 };
      resetParticle(p, true);
      particles.push(p);
    }

    function getOpacity(p: EmberParticle) {
      // Fully visible in bottom 75%, fade in top 25%
      if (p.y > h * 0.25) return p.baseOpacity;
      return Math.max(0, p.baseOpacity * (p.y / (h * 0.25)));
    }

    let running = true;
    function animate() {
      if (!running || !ctx) return;
      ctx.clearRect(0, 0, w, h);

      // Warm bottom glow
      const g = ctx.createRadialGradient(w / 2, h + 50, 0, w / 2, h + 50, w * 0.7);
      g.addColorStop(0, "rgba(234,88,12,0.05)");
      g.addColorStop(0.5, "rgba(234,88,12,0.015)");
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      particles.forEach((p) => {
        p.y -= p.speed;
        p.wobble += p.wobbleSpeed;
        p.x += Math.sin(p.wobble) * 0.4;
        const op = getOpacity(p);
        if (op <= 0) {
          resetParticle(p);
          return;
        }
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(234,88,12,${op})`;
        ctx!.fill();
      });
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.85,
      }}
    />
  );
}
