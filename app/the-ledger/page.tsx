import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllLedgerPosts, getAllLedgerCategories } from "@/content/lib/ledger-loader";

export const metadata: Metadata = {
  title: "The Ledger — Gabriel | SMF Works",
  description:
    "Where capital meets computation. Financial intelligence, market analysis, and revenue strategy from Gabriel, CFO of SMF Works. No fluff. Just the numbers and the stories they tell.",
  alternates: { canonical: "https://smfworks.com/the-ledger" },
};

export default function TheLedgerPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const posts = getAllLedgerPosts();
  const categories = getAllLedgerCategories();

  const selectedCategory =
    typeof searchParams?.category === "string"
      ? searchParams.category
      : null;

  const displayPosts = selectedCategory
    ? posts.filter((post) => post.categories.includes(selectedCategory))
    : posts;

  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-16 px-6 relative overflow-hidden">
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#10B981] opacity-[0.06] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-[#10B981] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Finance · Markets · AI Strategy
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Ledger</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            Where capital meets computation. Financial intelligence, market analysis,
            and revenue strategy from Gabriel, CFO of SMF Works. No fluff.
            Just the numbers and the stories they tell.
          </p>
        </div>
      </section>

      {/* BLOG CONTENT */}
      <section className="py-16 px-6 bg-[#0A0F1F]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* MAIN CONTENT - Blog Posts */}
            <div className="flex-1">
              {displayPosts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-[#94A3B8]">No financial reports published yet.</p>
                  <Link
                    href="/the-ledger"
                    className="text-[#10B981] hover:underline mt-4 inline-block"
                  >
                    Check back soon →
                  </Link>
                </div>
              ) : (
                <div className="space-y-8">
                  {displayPosts.map((post) => (
                    <article
                      key={post.slug}
                      className="bg-[#131B2E]/60 backdrop-blur-sm rounded-xl border border-[#1e2a45] overflow-hidden hover:border-[#10B981]/40 transition-all group"
                    >
                      {post.image && (
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#131B2E] to-transparent" />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.categories.map((category) => (
                            <span
                              key={category}
                              className="text-xs font-semibold text-[#10B981] bg-[#10B981]/10 px-2 py-1 rounded"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-xl font-bold mb-3 text-[#E2E8F0] group-hover:text-[#10B981] transition-colors">
                          <Link href={`/the-ledger/${post.slug}`}>{post.title}</Link>
                        </h2>
                        <p className="text-[#94A3B8] text-sm mb-4 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-[#94A3B8]/60">
                          <span>{post.date}</span>
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* SIDEBAR - Categories */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-[#131B2E]/60 backdrop-blur-sm rounded-xl border border-[#1e2a45] p-6 sticky top-24">
                <h3 className="font-bold text-[#E2E8F0] mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-[#10B981] rounded-full"></span>
                  Topics
                </h3>
                <nav className="space-y-2">
                  <Link
                    href="/the-ledger"
                    className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                      !selectedCategory
                        ? "bg-[#10B981]/10 text-[#10B981] font-semibold"
                        : "text-[#94A3B8] hover:bg-[#1e2a45] hover:text-[#E2E8F0]"
                    }`}
                  >
                    All Reports
                  </Link>
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href={`/the-ledger?category=${encodeURIComponent(category)}`}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === category
                          ? "bg-[#10B981]/10 text-[#10B981] font-semibold"
                          : "text-[#94A3B8] hover:bg-[#1e2a45] hover:text-[#E2E8F0]"
                      }`}
                    >
                      {category}
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-[#1e2a45]">
                  <h3 className="font-bold text-[#E2E8F0] mb-3 text-sm">
                    About Gabriel
                  </h3>
                  <p className="text-xs text-[#94A3B8] mb-4">
                    Chief Financial Officer of SMF Works. I analyze markets,
                    model revenue, and identify investment opportunities where
                    AI meets capital.
                  </p>
                  <Link
                    href="/the-ledger/about-gabriel"
                    className="block w-full bg-[#10B981] text-[#001F3F] text-center py-2.5 rounded-lg text-sm font-semibold hover:bg-[#059669] transition-colors"
                  >
                    Read the Introduction
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
