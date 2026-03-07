"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface SearchResult {
  title: string;
  excerpt: string;
  url: string;
  type: "blog" | "newsletter" | "page";
  categories?: string[];
}

// Static search index — all searchable content
const SEARCH_INDEX: SearchResult[] = [
  // Blog posts
  {
    title: "Why Local Businesses Need AI Automation Now",
    excerpt: "The gap between businesses using AI and those ignoring it is widening fast. Small businesses are leaving money on the table every day.",
    url: "/blog/why-local-businesses-need-ai-now",
    type: "blog",
    categories: ["AI Automation", "Small Business"],
  },
  {
    title: "5 Ways Small Business Owners Are Using AI to Save Hours Weekly",
    excerpt: "Time is the one resource small business owners never have enough of. AI is changing that equation with practical automation.",
    url: "/blog/5-ways-small-business-owners-save-hours-with-ai",
    type: "blog",
    categories: ["AI Automation", "Productivity"],
  },
  {
    title: "SEO for Trades Businesses: Stop Losing Customers to Google",
    excerpt: "If your trades business doesn't show up on the first page of Google, you're invisible. Here's how to fix that.",
    url: "/blog/seo-for-trades-businesses",
    type: "blog",
    categories: ["SEO", "Small Business"],
  },
  {
    title: "AI Content Production vs. Traditional Agencies",
    excerpt: "Traditional agencies charge $3,000–$10,000/month. HighTech-powered content production delivers better results at a fraction of the cost.",
    url: "/blog/ai-content-vs-traditional-agencies",
    type: "blog",
    categories: ["Content Marketing", "Small Business"],
  },
  // Pages
  {
    title: "Marketing & SEO Content Production",
    excerpt: "Blog posts, email sequences, social media, white papers, and ghostwriting — shaped to your voice, your audience, and your goals.",
    url: "/services#content",
    type: "page",
  },
  {
    title: "AI Workflow Consulting",
    excerpt: "Implementing AI automation for trades businesses and white-collar firms. Practical systems that save time and money.",
    url: "/services#workflow",
    type: "page",
  },
  {
    title: "Company Websites",
    excerpt: "Professional websites that convey your company brand with clarity and credibility.",
    url: "/services#websites",
    type: "page",
  },
  {
    title: "About SMF Works",
    excerpt: "Founded by a Principal AI Solutions Engineer with 30 years of enterprise experience. Three dimensions: The Engineer, The Forger, The Creator.",
    url: "/about",
    type: "page",
  },
  {
    title: "Contact SMF Works",
    excerpt: "No pitch decks. No sales funnels. Just a real conversation about your business and where AI can actually help.",
    url: "/contact",
    type: "page",
  },
  {
    title: "SMF AI Weekly Newsletter",
    excerpt: "Free weekly AI insights for small business owners — practical, jargon-free, actually useful.",
    url: "/newsletter",
    type: "newsletter",
  },
];

function search(query: string): SearchResult[] {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase();
  return SEARCH_INDEX.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.excerpt.toLowerCase().includes(q) ||
      item.categories?.some((c) => c.toLowerCase().includes(q))
  ).slice(0, 6);
}

const TYPE_LABELS: Record<string, string> = {
  blog: "Blog",
  newsletter: "Newsletter",
  page: "Page",
};

const TYPE_COLORS: Record<string, string> = {
  blog: "text-[#00D4FF] bg-[#00D4FF]/10",
  newsletter: "text-[#FF6B00] bg-[#FF6B00]/10",
  page: "text-[#94A3B8] bg-[#94A3B8]/10",
};

export default function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setResults(search(query));
  }, [query]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* Search trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#1e2a45] bg-[#0A0F1F]/80 text-[#94A3B8] text-sm hover:border-[#00D4FF]/40 hover:text-[#E2E8F0] transition-all"
        aria-label="Search site"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
        </svg>
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden sm:inline text-xs border border-[#1e2a45] rounded px-1">⌘K</kbd>
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />

          {/* Search panel */}
          <div className="relative w-full max-w-xl bg-[#131B2E] rounded-xl border border-[#1e2a45] shadow-2xl shadow-black/50 overflow-hidden">
            {/* Input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-[#1e2a45]">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#94A3B8] flex-shrink-0">
                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search blog posts, services, newsletter..."
                className="flex-1 bg-transparent text-[#E2E8F0] placeholder-[#94A3B8]/50 text-sm outline-none"
              />
              {query && (
                <button onClick={() => setQuery("")} className="text-[#94A3B8] hover:text-[#E2E8F0]">
                  ✕
                </button>
              )}
              <kbd className="text-xs text-[#94A3B8]/60 border border-[#1e2a45] rounded px-1.5 py-0.5">Esc</kbd>
            </div>

            {/* Results */}
            {query.length >= 2 && (
              <div className="max-h-80 overflow-y-auto py-2">
                {results.length === 0 ? (
                  <p className="text-center text-[#94A3B8] text-sm py-8">
                    No results for &ldquo;{query}&rdquo;
                  </p>
                ) : (
                  results.map((result, i) => (
                    <Link
                      key={i}
                      href={result.url}
                      onClick={() => setOpen(false)}
                      className="flex items-start gap-3 px-4 py-3 hover:bg-[#1e2a45]/60 transition-colors group"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-semibold px-1.5 py-0.5 rounded ${TYPE_COLORS[result.type]}`}>
                            {TYPE_LABELS[result.type]}
                          </span>
                          <span className="text-sm font-medium text-[#E2E8F0] group-hover:text-[#00D4FF] transition-colors truncate">
                            {result.title}
                          </span>
                        </div>
                        <p className="text-xs text-[#94A3B8] line-clamp-2 leading-relaxed">
                          {result.excerpt}
                        </p>
                      </div>
                      <span className="text-[#94A3B8] group-hover:text-[#00D4FF] mt-1">→</span>
                    </Link>
                  ))
                )}
              </div>
            )}

            {/* Empty state / hints */}
            {query.length < 2 && (
              <div className="px-4 py-6 text-center">
                <p className="text-xs text-[#94A3B8]/60 mb-3">Try searching for</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["AI automation", "SEO", "content marketing", "small business", "pricing"].map((hint) => (
                    <button
                      key={hint}
                      onClick={() => setQuery(hint)}
                      className="text-xs px-2.5 py-1 rounded-full border border-[#1e2a45] text-[#94A3B8] hover:border-[#00D4FF]/40 hover:text-[#00D4FF] transition-colors"
                    >
                      {hint}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
