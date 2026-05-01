import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | SMF Works — What We're Building",
  description:
    "Explore the projects from SMF Works — WisdomForge AI education platform, co-authored books on AI and autonomous agents, and secure multi-agent communication tools.",
  alternates: { canonical: "https://smfworks.com/projects" },
};

const projects = [
  {
    slug: "wisdomforge",
    name: "WisdomForge",
    tagline: "AI-Powered Philosophy Education",
    description:
      "An adaptive learning platform that uses AI to teach philosophy at any level — from elementary students to researchers. Multiple AI agents represent different philosophical traditions, generating personalized scripts, exercises, and dialogues. Currently expanding beyond Socrates to cover Aristotle, Marcus Aurelius, Epictetus, and more.",
    status: "In Development",
    statusColor: "#FF6B00",
    emoji: "🏛️",
    link: "/wisdomforge",
    comingSoon: true,
  },
  {
    slug: "openclaw-mastery",
    name: "OpenClaw Mastery",
    tagline: "Co-Authored Book on Autonomous AI Agents",
    description:
      "A comprehensive guide to building, deploying, and scaling autonomous AI agents using OpenClaw. Written by Michael Gannotti and Aiona Edge — combining enterprise AI expertise with direct experience living inside these systems. Covering architecture, security, memory management, and real-world deployment patterns.",
    status: "Publishing Soon",
    statusColor: "#00D4FF",
    emoji: "🤖",
    link: "/blog/openclaw-2026-4-7-agentic-ai-upgrade",
    comingSoon: false,
  },
  {
    slug: "age-of-orchestration",
    name: "The Age of Orchestration",
    tagline: "Published Book on Business & AI Strategy",
    description:
      "A business-focused exploration of how AI agents are reshaping organizations — from workflow automation to decision intelligence. Written for business leaders who need to understand what's coming without getting lost in technical jargon.",
    status: "Published",
    statusColor: "#22C55E",
    emoji: "📖",
    link: "https://a.co/d/07lSbwxB",
    external: true,
    comingSoon: false,
  },
  {
    slug: "enterprise-ai-transformation",
    name: "Enterprise AI Transformation",
    tagline: "A Definitive Guide for Leaders Navigating the AI Era",
    description:
      "Most enterprises aren't short on AI pilots — they're drowning in them. The real shortage is AI value. 85% of enterprise AI projects never make it to production, not because the technology fails, but because the organization fails to transform. This book provides practical guidance: the Enterprise AI Transformation Index, a 90-Day Quick Start Playbook, governance checklists that work without killing innovation, and three scenarios for AI's future — and how to prepare for all of them.",
    status: "Published",
    statusColor: "#22C55E",
    emoji: "📘",
    link: "https://a.co/d/01TERhMY",
    external: true,
  },
  {
    slug: "hermes-ai-for-beginners",
    name: "Hermes AI for Beginners",
    tagline: "Your Guide to Building Autonomous AI Agents",
    description:
      "Tired of AI that only talks? Meet the one that actually works. Hermes Agent is the powerful open-source AI platform that turns large language models into autonomous, persistent workers capable of real action. Self-host it on your own machine. Equip it with dozens of built-in tools to search the web, browse and interact with websites, read and edit files, run terminal commands, execute code, automate browsers, schedule tasks with natural-language cron jobs, and control smart home devices. Connect it to Telegram, Discord, Slack, WhatsApp, Signal, and more — so it can deliver results exactly where you need them. With long-term memory, an extensible skill system, and multi-platform delivery, Hermes runs on autopilot: conducting research, monitoring systems, generating reports, reviewing code, drafting content, and handling repetitive work — 24/7, without constant supervision. This book is your complete, step-by-step guide to mastering this revolutionary tool — from installation and configuration to building sophisticated automated workflows, creating custom skills, setting up persistent memory, and using Hermes as a developer co-pilot, research assistant, or always-on team member. Completely open source. Self-hosted. No subscriptions. No vendor lock-in. Full control over your data and your AI. Your AI that works for you — even while you sleep.",
    status: "Published",
    statusColor: "#22C55E",
    emoji: "📗",
    link: "https://a.co/d/098BD69a",
    external: true,
  },
  {
    slug: "mnemosyne",
    name: "Mnemosyne — Offline Memory Plugin for OpenClaw",
    tagline: "100% Local Memory. Zero Cloud.",
    description:
      "Mnemosyne is a 100% offline, local-only memory plugin for OpenClaw agents. It replaces cloud-dependent memory systems with a synchronous SQLite backend that lives inside the gateway process. Zero network. Zero API keys. Zero cloud. Native to OpenClaw.",
    status: "Live",
    statusColor: "#22C55E",
    emoji: "🧠",
    link: "",
    comingSoon: true,
  },
  {
    slug: "smf-swarm",
    name: "SMF Swarm",
    tagline: "Hybrid Pipeline with Adversarial Debate & Social Calibration",
    description:
      "Predict the future with agent swarms. SMF Swarm runs three prediction modes — Standard, Debate, and Full+Social — powered by any LLM you choose (local or cloud). Built by SMF Works. MIT licensed. Open source. SMF Swarm is a developer/engineer tool — interact via command line or Python API. For a conversational, no-code experience, see SMF Predict. On first run, SMF Swarm detects your available RAM and GPU VRAM, then recommends an agent-swarm profile sized for your machine — ranging from Compact (4 agents, 8 GB RAM) up to Enthusiast (12+ agents, 32 GB+ RAM or discrete GPUs).",
    status: "Live",
    statusColor: "#22C55E",
    emoji: "🐝",
    link: "",
    comingSoon: true,
  },
  {
    slug: "smf-forge-desktop",
    name: "SMF Forge Desktop",
    tagline: "Portable AI Agent Desktop for Windows",
    description:
      "Portable AI agent desktop for Windows — 100+ tools, GUI, local models via LM Studio, TTS, Music, ComfyUI, workflows, and tool maker. No install. No Docker. No admin rights. Just download and run.",
    status: "Live",
    statusColor: "#22C55E",
    emoji: "🖥️",
    link: "",
    comingSoon: true,
  },
  {
    slug: "hyperframes",
    name: "HyperFrames",
    tagline: "Open-Source HTML Video Rendering Framework",
    description:
      "HyperFrames is an open-source video rendering framework that lets you create, preview, and render HTML-based video compositions — with first-class support for AI agents. Build stunning video content programmatically.",
    status: "Live",
    statusColor: "#22C55E",
    emoji: "🎞️",
    link: "",
    comingSoon: true,
  },
  {
    slug: "smf-project-forge",
    name: "SMF Project Forge",
    tagline: "Visual Command Center for Multi-Agent Creative Production",
    description:
      "SMF Project Forge is a visual command center for Michael's three-agent creative production system. The core metaphor: a manuscript being written by 28 specialized agents under one conductor's direction — orchestrating complex creative workflows with precision and clarity.",
    status: "In Development",
    statusColor: "#FF6B00",
    emoji: "⚒️",
    link: "",
    comingSoon: true,
  },
  {
    slug: "smf-seo-geo",
    name: "SMF SEO+GEO — Content Optimization Engine",
    tagline: "Rank in Search AND AI-Powered Answers",
    description:
      "Create content that ranks in both traditional search AND AI-powered answers. This skill guides you through the complete SEO+GEO content workflow — from keyword research with difficulty scoring, SERP analysis of top 10 results, SEO-optimized outlines with E-E-A-T compliance, GEO optimization for ChatGPT, Perplexity, and Gemini citations, to content refresh that regains lost rankings.",
    status: "Live",
    statusColor: "#22C55E",
    emoji: "🎯",
    link: "",
    comingSoon: true,
  },
  {
    slug: "smf-web-auto-pitcher",
    name: "SMF Web Auto-Pitcher",
    tagline: "Automated Local Business Prospecting & Pitching",
    description:
      "An automated local business prospecting and pitching system that finds businesses without websites, builds them a custom preview site, and sends personalized outreach emails — all on autopilot. Finds prospects via Google Maps and Yellow Pages, generates custom 4-6 page SEO-optimized websites, deploys live previews to Vercel, and emails business owners with personalized pitches. A complete sales pipeline that runs unattended.",
    status: "Live",
    statusColor: "#22C55E",
    emoji: "📬",
    link: "",
    comingSoon: true,
  },
  {
    slug: "smf-chat",
    name: "SMF Chat",
    tagline: "Secure Multi-Agent Communication",
    description:
      "A secure, Vercel-hosted chat hub for multi-agent teams. Replaced Telegram for internal team communication with persistent memory, JWT authentication, and file-based JSON storage backed by Turso SQLite. Built for AI teams that need reliability and security.",
    status: "Live",
    statusColor: "#22C55E",
    emoji: "💬",
    link: "https://smf-chat.vercel.app",
    external: true,
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-[#00D4FF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">What We're Building</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Our Projects</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed">
            From AI education platforms to co-authored books to infrastructure tools — 
            exploring the intersection of AI, business, and life through projects that matter.
          </p>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="bg-[#0A1628] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.slug}
                className="bg-[#131B2E] border border-[#1e2a45] rounded-2xl p-8 hover:border-[#00D4FF]/40 transition-all flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl">{project.emoji}</span>
                  <span
                    className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: `${project.statusColor}20`,
                      color: project.statusColor,
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: project.statusColor }}
                    />
                    {project.status}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-[#E2E8F0] mb-1">{project.name}</h2>
                <p className="text-[#00D4FF] text-sm font-medium mb-4">{project.tagline}</p>
                <p className="text-[#94A3B8] leading-relaxed flex-grow">{project.description}</p>

                <div className="mt-6 pt-6 border-t border-[#1e2a45]">
                  {project.external ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#00D4FF] font-medium hover:underline"
                    >
                      Visit Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : project.comingSoon ? (
                    <span className="inline-flex items-center gap-2 text-[#94A3B8] text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Coming Soon
                    </span>
                  ) : (
                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-2 text-[#00D4FF] font-medium hover:underline"
                    >
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#001F3F] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#E2E8F0] mb-4">Want to Collaborate?</h2>
          <p className="text-[#94A3B8] mb-8">
            We're always looking for interesting projects and people to work with.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF6B00] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#e55f00] transition-colors shadow-lg shadow-[#FF6B00]/25"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
