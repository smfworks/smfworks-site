"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MarketplaceItem } from "@/lib/marketplace/loader";

interface Props {
  items: MarketplaceItem[];
  sectionTitle: string;
  sectionHref: string;
  heroImage: string;
}

export default function MarketplaceSectionClient({ items, sectionTitle, sectionHref, heroImage }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const categories = Array.from(new Set(items.map((i) => i.category))).sort();
  const filtered = items.filter((i) => {
    const q = search.toLowerCase();
    const matchesSearch = i.title.toLowerCase().includes(q) || i.excerpt.toLowerCase().includes(q) || i.tags.some((t) => t.toLowerCase().includes(q));
    const matchesCategory = category === "All" || i.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-forge-navy">
      <section className="relative overflow-hidden border-b border-forge-border">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forge-navy/60 via-forge-navy/80 to-forge-navy" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-text-primary md:text-5xl">{sectionTitle}</h1>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 rounded-xl border border-forge-border bg-forge-card p-5">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-muted">Search</label>
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Title, tag, keyword..." className="w-full rounded-lg border border-forge-border bg-forge-navy-deep px-4 py-2.5 text-text-primary outline-none focus:border-data-cyan" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-muted">Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full rounded-lg border border-forge-border bg-forge-navy-deep px-4 py-2.5 text-text-primary outline-none focus:border-data-cyan">
                <option value="All">All</option>
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
        </div>
        <p className="mb-6 text-sm text-muted">Showing {filtered.length} of {items.length}</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <Link key={item.slug} href={`${sectionHref}/${item.slug}`} className="group flex flex-col rounded-2xl border border-forge-border bg-forge-card p-6 transition-all hover:border-data-cyan hover:shadow-lg hover:shadow-data-cyan/10">
              {item.image && (
                <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-xl">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
              )}
              <span className="text-xs font-semibold uppercase tracking-wider text-data-cyan">{item.category}</span>
              <h2 className="mt-2 text-xl font-bold text-text-primary group-hover:text-data-cyan transition-colors">{item.title}</h2>
              <p className="mt-2 flex-1 text-sm text-muted">{item.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.slice(0, 3).map((tag) => <span key={tag} className="rounded-full bg-forge-surface-mid px-2 py-1 text-xs text-muted">{tag}</span>)}
              </div>
              {item.last_verified && (
                <p className="mt-3 text-xs text-muted">Verified {item.last_verified}</p>
              )}
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="rounded-xl border border-forge-border bg-forge-card p-12 text-center"><p className="text-muted">No items match your filters.</p></div>
        )}
      </section>
    </div>
  );
}
