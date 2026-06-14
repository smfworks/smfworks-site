"use client";

import { useState } from "react";
import Link from "next/link";
import { LLMModel } from "@/lib/marketplace/pricing";
import { formatNumber, formatPrice, modelSlug } from "@/lib/marketplace/format";
import LLMComparisonTable from "@/components/LLMComparisonTable";

interface Props {
  models: LLMModel[];
  updatedAt: string;
}

export default function LLMSectionClient({ models, updatedAt }: Props) {
  const [search, setSearch] = useState("");
  const [provider, setProvider] = useState("All");
  const [sortKey, setSortKey] = useState<keyof LLMModel | "">("input_price");

  const providers = Array.from(new Set(models.map((m) => m.provider))).sort();

  let filtered = models;
  const q = search.toLowerCase();
  if (q) {
    filtered = filtered.filter((m) => m.model.toLowerCase().includes(q) || m.provider.toLowerCase().includes(q));
  }
  if (provider !== "All") {
    filtered = filtered.filter((m) => m.provider === provider);
  }
  if (sortKey) {
    filtered = [...filtered].sort((a, b) => {
      const av = a[sortKey] ?? Infinity;
      const bv = b[sortKey] ?? Infinity;
      if (typeof av === "number" && typeof bv === "number") return av - bv;
      return String(av).localeCompare(String(bv));
    });
  }

  return (
    <div className="min-h-screen bg-forge-navy">
      <section className="relative overflow-hidden border-b border-forge-border">
        <div className="absolute inset-0 bg-[url('/images/agentmarketplace/llm-hero.svg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-forge-navy/60 via-forge-navy/80 to-forge-navy" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-forge-ember-bright/30 bg-forge-ember-bright/10 px-4 py-1.5 text-sm font-semibold text-forge-ember-bright">Live Pricing Index</span>
            <h1 className="text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl">LLM Pricing & Benchmarks</h1>
            <p className="mt-4 text-lg text-muted">Compare costs, context windows, and benchmark scores across leading models.</p>
            {updatedAt && (
              <p className="mt-3 text-xs text-muted">Data last verified: {new Date(updatedAt).toLocaleDateString()}</p>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 grid gap-4 rounded-xl border border-forge-border bg-forge-card p-5 md:grid-cols-4">
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-muted">Search models</label>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="e.g. Claude, GPT-4o, DeepSeek..." className="w-full rounded-lg border border-forge-border bg-forge-navy-deep px-4 py-2.5 text-text-primary outline-none focus:border-data-cyan" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-muted">Provider</label>
            <select value={provider} onChange={(e) => setProvider(e.target.value)} className="w-full rounded-lg border border-forge-border bg-forge-navy-deep px-4 py-2.5 text-text-primary outline-none focus:border-data-cyan">
              <option value="All">All providers</option>
              {providers.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-muted">Sort by</label>
            <select value={sortKey} onChange={(e) => setSortKey(e.target.value as keyof LLMModel)} className="w-full rounded-lg border border-forge-border bg-forge-navy-deep px-4 py-2.5 text-text-primary outline-none focus:border-data-cyan">
              <option value="input_price">Input price</option>
              <option value="output_price">Output price</option>
              <option value="context_window">Context window</option>
              <option value="mmlu">MMLU score</option>
              <option value="chatbot_arena">Arena Elo</option>
            </select>
          </div>
        </div>

        <p className="mb-6 text-sm text-muted">Showing {filtered.length} of {models.length} models</p>

        <LLMComparisonTable models={filtered} />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m) => {
            const slug = modelSlug(m.model_id);
            return (
              <Link key={m.model_id} href={`/agentmarketplace/llms/${slug}`} className="group rounded-2xl border border-forge-border bg-forge-card p-6 transition-all hover:border-data-cyan hover:shadow-lg hover:shadow-data-cyan/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-data-cyan">{m.provider}</span>
                  <span className="text-xs text-muted">{m.model_id}</span>
                </div>
                <h3 className="mt-2 text-xl font-bold text-text-primary group-hover:text-data-cyan transition-colors">{m.model}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted">{m.notes}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-forge-surface-mid px-2 py-1 text-muted">Input ${m.input_price}/1M</span>
                  <span className="rounded-full bg-forge-surface-mid px-2 py-1 text-muted">Output ${m.output_price}/1M</span>
                  <span className="rounded-full bg-forge-surface-mid px-2 py-1 text-muted">{formatNumber(m.context_window)} ctx</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
