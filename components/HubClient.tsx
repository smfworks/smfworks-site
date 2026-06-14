"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { AgentProfile } from "@/lib/marketplace/loader";
import type { LLMModel } from "@/lib/marketplace/pricing";
import { formatNumber } from "@/lib/marketplace/format";

interface Props {
  agents: AgentProfile[];
  llmModels: LLMModel[];
}

const sections = [
  { id: "agents", href: "/agentmarketplace/agents", title: "Agent Directory", description: "Compare autonomous AI agents side-by-side.", icon: "🤖", color: "from-data-cyan/20 to-data-cyan/5" },
  { id: "llms", href: "/agentmarketplace/llms", title: "LLM Pricing", description: "Pricing, context windows, and benchmark scores for leading models.", icon: "⚡", color: "from-forge-ember-bright/20 to-forge-ember-bright/5" },
  { id: "services", href: "/agentmarketplace/services", title: "Services", description: "Consulting, hosting, security audits, and hybrid services.", icon: "🛠️", color: "from-[#C9A96E]/20 to-[#C9A96E]/5" },
  { id: "tests", href: "/agentmarketplace/tests", title: "Test Results", description: "Real-world benchmark reports from SMF Works and the community.", icon: "📊", color: "from-[#00E5A0]/20 to-[#00E5A0]/5" },
  { id: "skills", href: "/agentmarketplace/skills", title: "Skills & Addons", description: "Reusable skills, MCP servers, plugins, and extensions.", icon: "🧩", color: "from-purple-500/20 to-purple-500/5" },
  { id: "guides", href: "/agentmarketplace/guides", title: "How-To Guides", description: "Curated starting points and deep dives.", icon: "📚", color: "from-[#00D4FF]/20 to-[#00D4FF]/5" },
  { id: "tips", href: "/agentmarketplace/tips", title: "Tips & Tricks", description: "Bite-sized advice to level up your agent workflow.", icon: "💡", color: "from-[#FF8C42]/20 to-[#FF8C42]/5" },
];

export default function HubClient({ agents, llmModels }: Props) {
  const [query, setQuery] = useState("");

  const topAgents = useMemo(() => {
    const q = query.toLowerCase();
    return agents
      .filter((a) => a.name.toLowerCase().includes(q) || a.company.toLowerCase().includes(q) || a.categories.some((c) => c.toLowerCase().includes(q)))
      .slice(0, 3);
  }, [agents, query]);

  const topModels = useMemo(() => {
    const q = query.toLowerCase();
    return llmModels
      .filter((m) => m.model.toLowerCase().includes(q) || m.provider.toLowerCase().includes(q))
      .slice(0, 3);
  }, [llmModels, query]);

  const filteredSections = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return sections;
    return sections.filter((s) => s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q));
  }, [query]);

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

            <div className="mt-8 mx-auto max-w-xl">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search agents, LLMs, sections..."
                className="w-full rounded-xl border border-forge-border bg-forge-card/80 px-5 py-3 text-text-primary placeholder:text-muted outline-none focus:border-data-cyan"
              />
            </div>

            {query && (topAgents.length > 0 || topModels.length > 0) && (
              <div className="mt-8 rounded-xl border border-forge-border bg-forge-card/90 p-5 text-left">
                {topAgents.length > 0 && (
                  <div className="mb-4">
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
                  <div>
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
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSections.map((s) => (
            <Link key={s.href} href={s.href} className={`group relative overflow-hidden rounded-2xl border border-forge-border bg-gradient-to-br ${s.color} p-6 transition-all hover:border-data-cyan hover:shadow-lg hover:shadow-data-cyan/10`}>
              <div className="mb-4 text-4xl">{s.icon}</div>
              <h2 className="text-xl font-bold text-text-primary group-hover:text-data-cyan transition-colors">{s.title}</h2>
              <p className="mt-2 text-sm text-muted">{s.description}</p>
              <div className="mt-4 text-sm font-semibold text-data-cyan">Explore →</div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-forge-border bg-forge-card p-8 text-center">
          <p className="text-lg text-text-primary">🚀 Want to make this the definitive AI hub? Sponsor a section, submit data, or advertise your agent.</p>
          <Link href="/contact" className="mt-4 inline-block rounded-lg bg-forge-ember-bright px-6 py-3 font-semibold text-forge-navy hover:bg-[#FF8C42] transition-colors">
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
