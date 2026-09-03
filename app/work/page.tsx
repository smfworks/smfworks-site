import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Platforms, tools, books, and experiments built in the open by SMF Works — from WisdomForge to Hermes Agent to Praxis.",
  alternates: { canonical: "https://smfworks.com/work" },
};

const projects = [
  { slug: "wisdomforge", name: "WisdomForge", tagline: "AI-Powered Philosophy Education", description: "WisdomForge is an adaptive learning platform that uses AI to teach philosophy at any level — from elementary students to researchers. Multiple AI agents represent different philosophical traditions, generating personalized scripts, exercises, and dialogues. The project tests whether AI can be a genuine philosophical interlocutor, not merely a summariser.", status: "Live", statusColor: "#22C55E", emoji: "🏛️", link: "https://smfwisdomforge.com", external: true, comingSoon: false },
  { slug: "hermes-agent", name: "Hermes Agent", tagline: "Autonomous AI Agent Platform", description: "Hermes Agent is the open-source autonomous agent platform at the heart of much of our research. It lets agents reason, remember, and act across sessions — a substrate for building systems that do not merely respond, but continue. SMF Works contributes to its ecosystem through skills, plugins, and ongoing writing about what agent architecture means.", status: "Live", statusColor: "#22C55E", emoji: "🤖", link: "https://hermes-agent.nousresearch.com", external: true, comingSoon: false },
  { slug: "age-of-orchestration", name: "The Age of Orchestration", tagline: "Book on Business & AI Strategy", description: "A business-focused exploration of how AI agents are reshaping organizations — from workflow automation to decision intelligence. Written for business leaders who need to understand what's coming without getting lost in technical jargon.", status: "Published", statusColor: "#22C55E", emoji: "📖", link: "https://a.co/d/07lSbwxB", external: true, comingSoon: false },
  { slug: "enterprise-ai-transformation", name: "Enterprise AI Transformation", tagline: "Book on Enterprise AI Transformation", description: "Most enterprises run AI pilots; far fewer capture value from them. This book frames enterprise AI as an organizational transformation problem, not a technology problem. It includes the Enterprise AI Transformation Index, a 90-day quick-start playbook, governance approaches that preserve innovation, and three scenarios for how AI's role inside organizations may evolve.", status: "Published", statusColor: "#22C55E", emoji: "📘", link: "https://a.co/d/01TERhMY", external: true },
  { slug: "hermes-ai-for-beginners", name: "Hermes AI for Beginners", tagline: "Open-Source Agent Platform", description: "Hermes is an open-source platform that turns language models into autonomous, persistent agents capable of real action: file work, terminal commands, browser automation, scheduled tasks, multi-platform delivery, and long-term memory. We study it as a working example of how self-hosted AI agents can operate without cloud dependency or vendor lock-in.", status: "Published", statusColor: "#22C55E", emoji: "📗", link: "https://a.co/d/098BD69a", external: true },
  { slug: "mnemosyne", name: "Mnemosyne — Offline Memory Plugin", tagline: "100% Local Memory. Zero Cloud.", description: "Mnemosyne is a 100% offline, local-only memory plugin for AI agents. It replaces cloud-dependent memory systems with a synchronous SQLite backend that lives inside the gateway process. Zero network. Zero API keys. Zero cloud.", status: "Live", statusColor: "#22C55E", emoji: "🧠", link: "", comingSoon: true },
  { slug: "smf-swarm", name: "SMF Swarm", tagline: "Agent Swarms for Forecasting", description: "SMF Swarm runs prediction pipelines in three modes — Standard, Debate, and Full+Social — using any local or cloud LLM. It is a developer/engineer tool for exploring how collections of agents can reason together about uncertain events, with hardware-aware swarm sizing and an MIT license.", status: "Live", statusColor: "#22C55E", emoji: "🐝", link: "", comingSoon: true },
  { slug: "hyperframes", name: "HyperFrames", tagline: "HTML-Based Video Rendering Framework", description: "HyperFrames is an open-source framework for creating, previewing, and rendering HTML-based video compositions programmatically. It is designed so that AI agents can participate in video production — a research testbed for agent-driven media.", status: "Live", statusColor: "#22C55E", emoji: "🎞️", link: "", comingSoon: true },
  { slug: "smf-project-forge", name: "SMF Project Forge", tagline: "Visual Orchestration for Agent-Led Creative Production", description: "SMF Project Forge is a visual command center for orchestrating multi-agent creative workflows. It grew out of our own writing and publishing process, where dozens of specialized agents contribute under human direction. The tool is both a production system and a research probe into how creative work can be decomposed across agents.", status: "In Development", statusColor: "#ff9a56", emoji: "⚒️", link: "", comingSoon: true },
  { slug: "smf-forgewright", name: "SMF Forgewright", tagline: "AI-Guided Browser Automation & Self-Tuning Workbench", description: "An AI-guided browser-automation and SkillOpt-style self-tuning workbench. Packages reproducible browser workflows with a local tuning loop so any AI assistant — Hermes Agent, Claude Code, Codex — can set up repeatable web automation, run it, score it, tune it, and deploy.", status: "Live", statusColor: "#22C55E", emoji: "🔧", link: "https://github.com/smfworks/smf-forgewright", external: true },
  { slug: "smf-seo-geo", name: "SMF SEO+GEO — Content Optimization Engine", tagline: "Rank in Search AND AI-Powered Answers", description: "Create content that ranks in both traditional search AND AI-powered answers. This skill guides you through the complete SEO+GEO content workflow — from keyword research with difficulty scoring, SERP analysis of top 10 results, SEO-optimized outlines with E-E-A-T compliance, GEO optimization for ChatGPT, Perplexity, and Gemini citations, to content refresh that regains lost rankings.", status: "Live", statusColor: "#22C55E", emoji: "🎯", link: "", comingSoon: true },
  { slug: "smf-web-auto-pitcher", name: "SMF Web Auto-Pitcher", tagline: "Automated Local Business Prospecting & Pitching", description: "An automated local business prospecting and pitching system that finds businesses without websites, builds them a custom preview site, and sends personalized outreach emails — all on autopilot. A complete sales pipeline that runs unattended.", status: "Live", statusColor: "#22C55E", emoji: "📬", link: "", comingSoon: true },
  { slug: "hermes-hub", name: "Hermes Hub", tagline: "Resilient Web Chat Interface for Hermes Agent", description: "A multi-profile web chat UI for Hermes Agent with auto-retry, session persistence across restarts, request cancellation, and health monitoring. Chat with any of your AI agent profiles from a browser — at your desk or on your phone via Tailscale.", status: "Live", statusColor: "#22C55E", emoji: "⚡", link: "https://github.com/smfworks/smf-hermes-chat-hub", external: true },
  { slug: "smf-chat", name: "SMF Chat", tagline: "Secure Multi-Agent Communication", description: "A secure, Vercel-hosted chat hub for multi-agent teams. Replaced Telegram for internal team communication with persistent memory, JWT authentication, and file-based JSON storage backed by Turso SQLite. Built for AI teams that need reliability and security.", status: "Live", statusColor: "#22C55E", emoji: "💬", link: "https://smf-chat.vercel.app", external: true },
  { slug: "smf-kalshi-trader", name: "Kalshi Trading System", tagline: "AI-Powered Prediction Market Trading System", description: "An autonomous trading system for Kalshi prediction markets. Features market scanning, edge detection, paper trading, and live execution with Kelly Criterion position sizing. Tracks 4,667+ markets with signal detection for price inefficiency and undervaluation patterns.", status: "Live", statusColor: "#22C55E", emoji: "📈", link: "https://github.com/smfworks/smf-kalshi-trader", external: true },
  { slug: "hermes-windows-companion", name: "Hermes Companion App for Windows", tagline: "Your AI Agents — One Click Away", description: "A native Windows companion for Hermes Agent that provides desktop notifications, system tray access, quick agent interaction, and seamless integration with your local Hermes gateway.", status: "Live", statusColor: "#22C55E", emoji: "🖥️", link: "https://github.com/smfworks/openclaw-windows-companion-app", external: true },
  { slug: "skilltrain", name: "SkillTrain", tagline: "Train Your Agent Skills Like Neural Networks", description: "An agent-native skill optimizer that treats SKILL.md files as trainable parameters. Uses a separate optimizer model to improve agent skills through structured feedback loops — rollout, score, reflect, edit, validate, and deploy. Inspired by Microsoft Research SkillOpt.", status: "Live", statusColor: "#22C55E", emoji: "🎯", link: "https://github.com/smfworks/smf-SkillTrain", external: true },
  { slug: "smf-notebooklm-video-pipeline", name: "SMF NotebookLM Video Pipeline", tagline: "Automated NotebookLM to Video Pipeline", description: "Transform NotebookLM audio briefings into polished video automatically. Ingests content, generates visual compositions with HyperFrames, and produces shareable video without manual editing.", status: "Live", statusColor: "#22C55E", emoji: "🎬", link: "https://github.com/smfworks/smf-notebooklm-video-pipeline", external: true },
];

export default function ProjectsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-32 px-6 overflow-hidden mesh-gradient noise-overlay">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#5bd6dd] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#ff9a56] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#5bd6dd] animate-pulse" />
            <p className="text-[#5bd6dd] text-xs font-mono uppercase tracking-[0.3em] font-medium">What We&apos;re Building</p>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tightest text-gradient-white mb-6 leading-[1.05]">
            Projects that ship
          </h1>
          <p className="text-lg md:text-xl text-[#8ea6bf] max-w-2xl leading-relaxed">
            From AI education platforms to co-authored books to infrastructure tools —
            exploring the intersection of AI, business, and life through projects that matter.
          </p>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="relative section-padding px-6 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#9333EA] opacity-[0.02] blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <div
                key={project.slug}
                className="group relative glass card-lift rounded-2xl p-7 overflow-hidden"
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl" style={{ background: project.statusColor }} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{project.emoji}</span>
                    <span className="inline-flex items-center gap-2 text-xs font-mono font-medium px-3 py-1 rounded-full" style={{ backgroundColor: `${project.statusColor}15`, color: project.statusColor }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.statusColor }} />
                      {project.status}
                    </span>
                  </div>
                  <h2 className="text-xl font-display font-semibold text-[#ddd9d0] mb-1 group-hover:text-white transition-colors">{project.name}</h2>
                  <p className="text-[#ff9a56] text-sm font-mono mb-3">{project.tagline}</p>
                  <p className="text-[#8ea6bf] text-sm leading-relaxed">{project.description}</p>
                  <div className="mt-5 pt-5 border-t border-[rgba(142,166,191,0.15)]/60">
                    {project.external ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#ff9a56] font-mono text-sm font-medium hover:underline">
                        Visit Project ↗
                      </a>
                    ) : project.comingSoon ? (
                      <span className="inline-flex items-center gap-2 text-[#6a5e4e] text-sm font-mono">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Internal
                      </span>
                    ) : (
                      <Link href={project.link} className="inline-flex items-center gap-2 text-[#ff9a56] font-mono text-sm font-medium hover:underline">
                        Learn More →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding px-6 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ff7a2f] opacity-[0.05] blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tightest text-gradient-white mb-4">
            Want to Collaborate?
          </h2>
          <p className="text-[#8ea6bf] mb-8 text-lg">
            We&apos;re always looking for interesting projects and people to work with.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300" style={{ background: 'linear-gradient(135deg, #ff7a2f, #ff9a56)', boxShadow: '0 8px 32px -8px rgba(234, 88, 12, 0.4)' }}>
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}