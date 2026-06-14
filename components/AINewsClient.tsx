"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { NewsItem } from "@/lib/marketplace/news-data";

interface Props {
  items: NewsItem[];
}

export default function AINewsClient({ items }: Props) {
  const [category, setCategory] = useState("All");
  const categories = useMemo(() => Array.from(new Set(items.map((i) => i.category))).sort(), [items]);
  const filtered = useMemo(() => {
    if (category === "All") return items;
    return items.filter((i) => i.category === category);
  }, [items, category]);

  return (
    <div className="min-h-screen bg-forge-navy">
      <section className="relative overflow-hidden border-b border-forge-border">
        <div className="absolute inset-0 bg-[url('/images/blog/agentmarketplace-hero.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-forge-navy/60 via-forge-navy/80 to-forge-navy" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-data-cyan/30 bg-data-cyan/10 px-4 py-1.5 text-sm font-semibold text-data-cyan">Curated Headlines</span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-text-primary md:text-6xl">AI News</h1>
            <p className="mt-5 text-lg text-muted md:text-xl">Links to the latest AI agent, model, and industry news from primary sources.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <span className="text-sm font-semibold text-muted">Filter:</span>
          <button
            onClick={() => setCategory("All")}
            className={`rounded-full px-3 py-1 text-sm ${category === "All" ? "bg-data-cyan text-forge-navy" : "border border-forge-border text-muted hover:border-data-cyan"}`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-3 py-1 text-sm ${category === c ? "bg-data-cyan text-forge-navy" : "border border-forge-border text-muted hover:border-data-cyan"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-4">
          {filtered.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between gap-2 rounded-xl border border-forge-border bg-forge-card p-5 transition-all hover:border-data-cyan sm:flex-row sm:items-center"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <span className="rounded-full bg-forge-surface-mid px-2 py-0.5">{item.category}</span>
                  <span>{item.source}</span>
                  <span>· {item.date}</span>
                </div>
                <h2 className="mt-2 text-lg font-bold text-text-primary group-hover:text-data-cyan transition-colors">{item.title}</h2>
              </div>
              <svg className="h-5 w-5 shrink-0 text-muted group-hover:text-data-cyan" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
