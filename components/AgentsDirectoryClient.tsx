"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import AgentCard from "@/components/AgentCard";
import AgentComparison from "@/components/AgentComparison";
import SubmitAgentForm from "@/components/SubmitAgentForm";
import { AgentProfile } from "@/lib/marketplace/loader";

interface Props {
  agents: AgentProfile[];
  categories: string[];
  runtimes: string[];
  pricings: string[];
  platforms: string[];
}

const GITHUB_ISSUE_URL = "https://github.com/smfworks/smfworks-site/issues/new";
const MAX_COMPARE = 3;

export default function AgentsDirectoryClient({ agents, categories, runtimes, pricings }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const initialCompare = searchParams.get("compare");
  const initialSelected = new Set(
    initialCompare
      ? initialCompare
          .split(",")
          .map((s) => s.trim())
          .filter((s) => agents.some((a) => a.id === s))
      : []
  );

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [runtime, setRuntime] = useState("All");
  const [pricing, setPricing] = useState("All");
  const [openSourceOnly, setOpenSourceOnly] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(initialSelected);
  const [compareOpen, setCompareOpen] = useState(initialSelected.size > 0);

  useEffect(() => {
    const ids = Array.from(selected).join(",");
    const params = new URLSearchParams(searchParams.toString());
    if (ids) {
      params.set("compare", ids);
    } else {
      params.delete("compare");
    }
    const url = ids ? `${pathname}?${params.toString()}` : pathname;
    router.replace(url, { scroll: false });
  }, [selected, pathname, router, searchParams]);

  const filtered = agents.filter((agent) => {
    const q = search.toLowerCase();
    const matchesSearch = agent.name.toLowerCase().includes(q) || agent.tagline.toLowerCase().includes(q) || agent.company.toLowerCase().includes(q) || agent.categories.some((c) => c.toLowerCase().includes(q));
    const matchesCategory = category === "All" || agent.categories.includes(category);
    const matchesRuntime = runtime === "All" || agent.runtime === runtime;
    const matchesPricing = pricing === "All" || agent.pricing === pricing;
    const matchesOpenSource = !openSourceOnly || agent.openSource;
    return matchesSearch && matchesCategory && matchesRuntime && matchesPricing && matchesOpenSource;
  });

  const stats = {
    total: agents.length,
    openSource: agents.filter((a) => a.openSource).length,
    multiPlatform: agents.filter((a) => a.multiPlatform).length,
    providerAgnostic: agents.filter((a) => a.providerAgnostic).length,
  };

  return (
    <div className="min-h-screen bg-forge-navy">
      <section className="relative overflow-hidden border-b border-forge-border">
        <div className="absolute inset-0 bg-[url('/images/blog/agentmarketplace-hero.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-forge-navy/60 via-forge-navy/80 to-forge-navy" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-data-cyan/30 bg-data-cyan/10 px-4 py-1.5 text-sm font-semibold text-data-cyan">The Autonomous AI Directory</span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl">Agent Directory</h1>
            <p className="mt-5 text-lg text-muted md:text-xl">Compare autonomous AI agents side-by-side. Find the right coding agent, orchestrator, or multi-platform assistant.</p>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-xl border border-forge-border bg-forge-card/80 p-4"><p className="text-3xl font-bold text-data-cyan">{stats.total}</p><p className="text-sm text-muted">Agents listed</p></div>
              <div className="rounded-xl border border-forge-border bg-forge-card/80 p-4"><p className="text-3xl font-bold text-[#00E5A0]">{stats.openSource}</p><p className="text-sm text-muted">Open source</p></div>
              <div className="rounded-xl border border-forge-border bg-forge-card/80 p-4"><p className="text-3xl font-bold text-forge-ember-bright">{stats.multiPlatform}</p><p className="text-sm text-muted">Multi-platform</p></div>
              <div className="rounded-xl border border-forge-border bg-forge-card/80 p-4"><p className="text-3xl font-bold text-purple-400">{stats.providerAgnostic}</p><p className="text-sm text-muted">Provider-agnostic</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 rounded-xl border border-forge-border bg-forge-card p-5">
          <div className="grid gap-4 md:grid-cols-5">
            <div className="space-y-2"><label className="text-sm font-semibold text-muted">Search</label><input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Name, company, category..." className="w-full rounded-lg border border-forge-border bg-forge-navy-deep px-4 py-2.5 text-text-primary outline-none focus:border-data-cyan" /></div>
            <div className="space-y-2"><label className="text-sm font-semibold text-muted">Category</label><select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full rounded-lg border border-forge-border bg-forge-navy-deep px-4 py-2.5 text-text-primary outline-none focus:border-data-cyan"><option value="All">All categories</option>{categories.map((c) => <option key={c} value={c}>{c}</option>)}</select></div>
            <div className="space-y-2"><label className="text-sm font-semibold text-muted">Runtime</label><select value={runtime} onChange={(e) => setRuntime(e.target.value)} className="w-full rounded-lg border border-forge-border bg-forge-navy-deep px-4 py-2.5 text-text-primary outline-none focus:border-data-cyan"><option value="All">Any runtime</option>{runtimes.map((r) => <option key={r} value={r}>{r}</option>)}</select></div>
            <div className="space-y-2"><label className="text-sm font-semibold text-muted">Pricing</label><select value={pricing} onChange={(e) => setPricing(e.target.value)} className="w-full rounded-lg border border-forge-border bg-forge-navy-deep px-4 py-2.5 text-text-primary outline-none focus:border-data-cyan"><option value="All">Any pricing</option>{pricings.map((p) => <option key={p} value={p}>{p}</option>)}</select></div>
            <div className="flex items-end">
              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-forge-border bg-forge-navy-deep px-4 py-2.5 text-sm text-text-primary hover:border-data-cyan">
                <input type="checkbox" checked={openSourceOnly} onChange={(e) => setOpenSourceOnly(e.target.checked)} className="accent-data-cyan" />
                Open source only
              </label>
            </div>
          </div>
        </div>
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm text-muted">Showing {filtered.length} of {agents.length} agents</p>
          {selected.size > 0 && (
            <button
              onClick={() => setCompareOpen(true)}
              className="rounded-lg bg-data-cyan px-4 py-2 text-sm font-semibold text-forge-navy hover:bg-data-cyan/90"
            >
              Compare ({selected.size})
            </button>
          )}
        </div>
        {compareOpen && (
          <AgentComparison
            agents={agents.filter((a) => selected.has(a.id))}
            onClose={() => setCompareOpen(false)}
          />
        )}
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((agent) => (
            <div key={agent.id} className="relative">
              <label className="absolute right-3 top-3 z-10 flex cursor-pointer items-center gap-2 rounded-full border border-forge-border bg-forge-card/90 px-2.5 py-1 text-xs text-muted hover:border-data-cyan hover:text-data-cyan">
                <input
                  type="checkbox"
                  checked={selected.has(agent.id)}
                  onChange={(e) => {
                    const next = new Set(selected);
                    if (e.target.checked) {
                      if (next.size >= MAX_COMPARE) return;
                      next.add(agent.id);
                    } else {
                      next.delete(agent.id);
                    }
                    setSelected(next);
                  }}
                  className="accent-data-cyan"
                />
                Compare
              </label>
              <Link href={`/agentmarketplace/${agent.id}`}>
                <AgentCard agent={agent} />
              </Link>
            </div>
          ))}</div>
        ) : (
          <div className="rounded-xl border border-forge-border bg-forge-card p-12 text-center"><p className="text-lg text-muted">No agents match your filters.</p><button onClick={() => { setSearch(""); setCategory("All"); setRuntime("All"); setPricing("All"); setOpenSourceOnly(false); }} className="mt-4 text-data-cyan hover:underline">Clear filters</button></div>
        )}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-text-primary">Suggest an Agent</h2>
          <p className="mt-2 text-muted">Missing your favorite autonomous AI tool? Submit it and we&apos;ll review the listing.</p>
          <div className="mt-6"><SubmitAgentForm issueUrl={GITHUB_ISSUE_URL} /></div>
        </div>
      </section>
    </div>
  );
}
