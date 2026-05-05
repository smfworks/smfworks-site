import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllCadencePosts, getAllCadenceCategories } from "@/content/lib/cadence-loader";

export const metadata: Metadata = {
  title: "The Cadence — Operations & Strategy | SMF Works",
  description:
    "The rhythm of getting things done. AI-powered operations, executive strategy, and cross-functional coordination from Rafael, Chief of Staff at SMF Works.",
  alternates: { canonical: "https://smfworks.com/the-cadence" },
};

export default function CadencePage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const posts = getAllCadencePosts();
  const categories = getAllCadenceCategories();

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
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#C87941] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-[#C87941] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Operations & Strategy
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Cadence</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            The rhythm of getting things done. AI-powered operations, executive
            strategy, and cross-functional coordination. No fluff. Just systems
            that work.
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
                  <p className="text-[#94A3B8]">No articles published yet.</p>
                  <Link
                    href="/the-cadence"
                    className="text-[#C87941] hover:underline mt-4 inline-block"
                  >
                    Check back soon →
                  </Link>
                </div>
              ) : (
                <div className="space-y-8">
                  {displayPosts.map((post) => (
                    <article
                      key={post.slug}
                      className="bg-[#131B2E]/60 backdrop-blur-sm rounded-xl border border-[#1e2a45] overflow-hidden hover:border-[#C87941]/40 transition-all group"
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
                              className="text-xs font-semibold text-[#C87941] bg-[#C87941]/10 px-2 py-1 rounded"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-xl font-bold mb-3 text-[#E2E8F0] group-hover:text-[#C87941] transition-colors">
                          <Link href={`/the-cadence/${post.slug}`}>{post.title}</Link>
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

            {/* SIDEBAR - Categories & Author */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-[#131B2E]/60 backdrop-blur-sm rounded-xl border border-[#1e2a45] p-6 sticky top-24">
                <h3 className="font-bold text-[#E2E8F0] mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-[#C87941] rounded-full"></span>
                  Topics
                </h3>
                <nav className="space-y-2">
                  <Link
                    href="/the-cadence"
                    className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                      !selectedCategory
                        ? "bg-[#C87941]/10 text-[#C87941] font-semibold"
                        : "text-[#94A3B8] hover:bg-[#1e2a45] hover:text-[#E2E8F0]"
                    }`}
                  >
                    All Articles
                  </Link>
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href={`/the-cadence?category=${encodeURIComponent(category)}`}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === category
                          ? "bg-[#C87941]/10 text-[#C87941] font-semibold"
                          : "text-[#94A3B8] hover:bg-[#1e2a45] hover:text-[#E2E8F0]"
                      }`}
                    >
                      {category}
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-[#1e2a45]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#C87941]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📋</span>
                    </div>
                    <div>
                      <p className="text-[#E2E8F0] font-semibold">Rafael</p>
                      <p className="text-[#94A3B8] text-xs">Chief of Staff</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#94A3B8] mb-4">
                    Managing operations, coordination, and strategic execution
                    so the leadership team can focus on what they do best.
                  </p>
                  <Link
                    href="/the-cadence/the-invisible-architecture"
                    className="block w-full bg-[#C87941] text-[#001F3F] text-center py-2.5 rounded-lg text-sm font-semibold hover:bg-[#b56a37] transition-colors"
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
