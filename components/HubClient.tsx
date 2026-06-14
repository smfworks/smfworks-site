"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { AgentProfile } from "@/lib/marketplace/loader";
import type { LLMModel } from "@/lib/marketplace/pricing";
import type { MarketplaceItem } from "@/lib/marketplace/loader";
import { formatNumber } from "@/lib/marketplace/format";

interface Props {
  agents: AgentProfile[];
  llmModels: LLMModel[];
  genericItems: Record<string, MarketplaceItem[]>;
}

const sections = [
  { id: "agents", href: "/agentmarketplace/agents", title: "Agent Directory", description: "Compare autonomous AI agents side-by-side.", icon: "🤖", color: "from-data-cyan/20 to-data-cyan/5" },
  { id: "llms", href: "/agentmarketplace/llms", title: "LLM Pricing", description: "Pricing, context windows, and benchmark scores for leading models.", icon: "⚡", color: "from-forge-ember-bright/20 to-forge-ember-bright/5" },
  { id: "services", href: "/agentmarketplace/services", title: "Services", description: "AI-focused vendor services: hosting, security, data, observability.", icon: "🛠️", color: "from-[#C9A96E]/20 to-[#C9A96E]/5" },
  { id: "skills", href: "/agentmarketplace/skills", title: "Skills & Addons", description: "Reusable skills, MCP servers, plugins, and extensions.", icon: "🧩", color: "from-purple-500/20 to-purple-500/5" },
  { id: "guides", href: "/agentmarketplace/guides", title: "How-To Guides", description: "Curated starting points and deep dives.", icon: "📚", color: "from-[#00D4FF]/20 to-[#00D4FF]/5" },
  { id: "tips", href: "/agentmarketplace/tips", title: "Tips & Tricks", description: "Bite-sized advice to level up your agent workflow.", icon: "💡", color: "from-[#FF8C42]/20 to-[#FF8C42]/5" },
  { id: "tests", href: "/agentmarketplace/tests", title: "Test Results", description: "Real-world benchmark reports from SMF Works and the community.", icon: "📊", color: "from-[#00E5A0]/20 to-[#00E5A0]/5" },
  { id: "self-hosting", href: "/agentmarketplace/self-hosting", title: "Self-Hosting", description: "Hardware and OS guides for running agents and LLMs locally.", icon: "🏠", color: "from-[#10B981]/20 to-[#10B981]/5" },
  { id: "use-cases", href: "/agentmarketplace/use-cases", title: "Use Cases", description: "Find agents for code review, UI building, debugging, research, and security.", icon: "🎯", color: "from-[#8B5CF6]/20 to-[#8B5CF6]/5" },
  { id: "alternatives", href: "/agentmarketplace/alternatives", title: "Alternatives", description: "Top replacements for Copilot, Cursor, ChatGPT, Claude, and more.", icon: "🔀", color: "from-[#F59E0B]/20 to-[#F59E0B]/5" },
  { id: "deployment-recipes", href: "/agentmarketplace/deployment-recipes", title: "Deployment Recipes", description: "Copy-paste recipes for Ollama, Open WebUI, Cline, and more.", icon: "🧪", color: "from-[#EC4899]/20 to-[#EC4899]/5" },
  { id: "deals", href: "/agentmarketplace/deals", title: "Vendor Deals", description: "Credits, startup programs, and free tiers from AI vendors.", icon: "🏷️", color: "from-[#14B8A6]/20 to-[#14B8A6]/5" },
  { id: "safety", href: "/agentmarketplace/safety", title: "AI Safety", description: "Permission models, prompt injection defenses, and trust checklists.", icon: "🛡️", color: "from-[#EF4444]/20 to-[#EF4444]/5" },
  { id: "getting-started", href: "/agentmarketplace/getting-started", title: "Getting Started", description: "A learning path from your first agent to local self-hosting.", icon: "🚀", color: "from-[#3B82F6]/20 to-[#3B82F6]/5" },
  { id: "benchmarks", href: "/agentmarketplace/benchmarks", title: "Leaderboard", description: "Community benchmark scores ranked by task.", icon: "🏆", color: "from-[#FFD700]/20 to-[#FFD700]/5" },
  { id: "cost-calculator", href: "/agentmarketplace/cost-calculator", title: "Cost Calculator", description: "Estimate monthly agent and LLM spend.", icon: "🧮", color: "from-[#22C55E]/20 to-[#22C55E]/5" },
  { id: "model-compatibility", href: "/agentmarketplace/model-compatibility", title: "Model Compatibility", description: "Which agents support OpenAI, Anthropic, Gemini, local, and more.", icon: "🔗", color: "from-[#A855F7]/20 to-[#A855F7]/5" },
  { id: "integration-matrix", href: "/agentmarketplace/integration-matrix", title: "Integration Matrix", description: "Editor, OS, and platform support matrix.", icon: "🧩", color: "from-[#06B6D4]/20 to-[#06B6D4]/5" },
  { id: "news", href: "/agentmarketplace/news", title: "AI News", description: "Curated headlines and links from the AI industry.", icon: "📰", color: "from-[#FF6B6B]/20 to-[#FF6B6B]/5" },
  { id: "lab", href: "/agentmarketplace/lab", title: "The Lab", description: "SMF Works experiments on AI hardware, software, applications, and devices.", icon: "🧪", color: "from-[#A855F7]/20 to-[#A855F7]/5" },
];

export default function HubClient({ agents, llmModels, genericItems }: Props) {
  const [query, setQuery] = useState("");
  const q = query.toLowerCase().trim();

  const topAgents = useMemo(() => {
    if (!q) return [];
    return agents
      .filter((a) => a.name.toLowerCase().includes(q) || a.company.toLowerCase().includes(q) || a.categories.some((c) => c.toLowerCase().includes(q)) || a.tagline.toLowerCase().includes(q))
      .slice(0, 4);
  }, [agents, q]);

  const topModels = useMemo(() => {
    if (!q) return [];
    return llmModels
      .filter((m) => m.model.toLowerCase().includes(q) || m.provider.toLowerCase().includes(q) || m.model_id.toLowerCase().includes(q))
      .slice(0, 4);
  }, [llmModels, q]);

  const genericResults = useMemo(() => {
    if (!q) return [];
    const all = Object.entries(genericItems).flatMap(([section, items]) =>
      items.map((i) => ({ ...i, section, href: `/agentmarketplace/${section}/${i.slug}` }))
    );
    return all
      .filter((i) => i.title.toLowerCase().includes(q) || i.excerpt.toLowerCase().includes(q) || i.tags.some((t) => t.toLowerCase().includes(q)) || i.category.toLowerCase().includes(q))
      .slice(0, 12);
  }, [genericItems, q]);

  const hasResults = topAgents.length > 0 || topModels.length > 0 || genericResults.length > 0;

  const filteredSections = useMemo(() => {
    if (!q) return sections;
    return sections.filter((s) => s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q));
  }, [q]);

  return (
    <div className="min-h-screen bg-forge-navy">
      <section className="relative overflow-hidden border-b border-forge-border">
        <div className="absolute inset-0 bg-[url('/images/blog/agentmarketplace-hero.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-forge-navy/60 via-forge-navy/80 to-forge-navy" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-data-cyan/30 bg-data-cyan/10 px-4 py-1.5 text-sm font-semibold text-data-cyan">The AI Clearinghouse</span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-text-primary md:text-6xl">Agent Marketplace</h1>
            <p className="mt-5 text-lg text-muted md:text-xl">Your starting point for autonomous AI agents, LLMs, services, skills, and practical know-how.</p>

            <div className="mx-auto mt-8 max-w-xl">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search agents, LLMs, services, skills, guides, tips, tests, use cases..."
                className="w-full rounded-xl border border-forge-border bg-forge-card/80 px-5 py-3 text-text-primary placeholder:text-muted outline-none focus:border-data-cyan"
              />
            </div>

            {query && hasResults && (
              <div className="mt-8 rounded-xl border border-forge-border bg-forge-card/90 p-5 text-left">
                {topAgents.length > 0 && (
                  <div className="mb-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">Agents</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {topAgents.map((a) => (
                        <Link key={a.id} href={`/agentmarketplace/${a.id}`} className="rounded-lg border border-forge-border bg-forge-navy-deep px-3 py-2 text-sm text-text-primary hover:border-data-cyan hover:text-data-cyan">
                          {a.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {topModels.length > 0 && (
                  <div className="mb-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">LLMs</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {topModels.map((m) => (
                        <Link key={m.model_id} href={`/agentmarketplace/llms/${m.model_id.replace(/[^a-z0-9]+/g, "-").toLowerCase()}`} className="rounded-lg border border-forge-border bg-forge-navy-deep px-3 py-2 text-sm text-text-primary hover:border-data-cyan hover:text-data-cyan">
                          {m.model} ({formatNumber(m.context_window)})
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {genericResults.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">Sections</p>
                    <div className="mt-2 grid gap-2 sm:grid-cols-2">
                      {genericResults.map((i) => (
                        <Link key={`${i.section}-${i.slug}`} href={i.href} className="flex items-center justify-between rounded-lg border border-forge-border bg-forge-navy-deep px-3 py-2 text-sm text-text-primary hover:border-data-cyan hover:text-data-cyan">
                          <span className="truncate pr-2">{i.title}</span>
                          <span className="shrink-0 rounded-full bg-forge-surface-mid px-2 py-0.5 text-xs text-muted capitalize">{i.section.replace(/-/g, " ")}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {query && !hasResults && (
              <p className="mt-6 text-sm text-muted">No results for &quot;{query}&quot;. Try a broader term or browse the sections below.</p>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSections.map((s) => (
            <Link key={s.href} href={s.href} className={`group relative overflow-hidden rounded-2xl border border-forge-border bg-gradient-to-br ${s.color} p-6 transition-all hover:border-data-cyan hover:shadow-lg hover:shadow-data-cyan/10`}>
              <div className="mb-4 text-4xl">{s.icon}</div>
              <h2 className="text-xl font-bold text-text-primary transition-colors group-hover:text-data-cyan">{s.title}</h2>
              <p className="mt-2 text-sm text-muted">{s.description}</p>
              <div className="mt-4 text-sm font-semibold text-data-cyan">Explore →</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
