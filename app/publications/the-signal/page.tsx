import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllSignalPosts, getAllSignalCategories } from "@/content/lib/signal-loader";

export const metadata: Metadata = {
  title: "The Signal — Pamela, CMO",
  description:
    "Brand strategy, AI marketing, and organizational visibility from Pamela — Chief Marketing Officer at SMF Works.",
  alternates: { canonical: "https://smfworks.com/publications/the-signal" },
};

export default function TheSignalPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const posts = getAllSignalPosts();
  const categories = getAllSignalCategories();

  const selectedCategory =
    typeof searchParams?.category === "string"
      ? searchParams.category
      : null;

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.categories.includes(selectedCategory))
    : posts;

  return (
    <>
      {/* HEADER — Deep emerald green with portrait */}
      <section className="relative py-24 px-6 overflow-hidden mesh-gradient noise-overlay">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#10B981] opacity-[0.06] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#10B981] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/images/pamela-portrait.jpg"
              alt="Pamela"
              width={160}
              height={160}
              className="rounded-full border-2 border-[#10B981] shadow-lg shadow-[#10B981]/20 object-cover"
              priority
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#10B981'] animate-pulse" />
              <p className="text-[#10B981] text-xs font-mono uppercase tracking-[0.3em] font-medium">
                Pamela \u2014 Chief Marketing Officer
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tightest text-gradient-white mb-4 leading-[1.05]">
              The Signal
            </h1>
            <p className="text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
              Brand strategy, AI marketing, and organizational visibility from Pamela — Chief Marketing Officer at SMF Works.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      {categories.length > 0 && (
        <section className="px-6 py-4 bg-[#0A0F1F]/50 border-b border-[#1e2a45]">
          <div className="max-w-4xl mx-auto flex flex-wrap gap-2">
            <Link
              href="/publications/the-signal"
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                !selectedCategory
                  ? "bg-[#10B981] text-white"
                  : "bg-[#131B2E] text-[#94A3B8] hover:bg-[#10B981]/20"
              }`}
            >
              All
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/publications/the-signal?category=${encodeURIComponent(category)}`}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-[#10B981] text-white"
                    : "bg-[#131B2E] text-[#94A3B8] hover:bg-[#10B981]/20"
                }`}
              >
                {category}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* POSTS */}
      <section className="py-16 px-6 bg-[#0A0F1F]">
        <div className="max-w-4xl mx-auto space-y-10">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#94A3B8]">No posts yet in this category.</p>
              <Link
                href="/publications/the-signal"
                className="text-[#10B981] hover:underline mt-4 inline-block"
              >
                View all posts →
              </Link>
            </div>
          ) : (
            filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-[#131B2E]/80 backdrop-blur-sm rounded-xl border border-[#1e2a45]/60 overflow-hidden hover:border-[#10B981]/40 transition-all group"
              >
                {post.image && (
                  <div className="relative h-56 w-full overflow-hidden">
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
                      <Link
                        key={category}
                        href={`/publications/the-signal?category=${encodeURIComponent(category)}`}
                        className="text-xs font-medium text-[#10B981] bg-[#10B981]/10 px-2 py-1 rounded-full hover:bg-[#10B981]/20 transition-colors"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                  <Link href={`/publications/the-signal/${post.slug}`}>
                    <h2 className="text-xl font-bold text-[#E2E8F0] mb-2 hover:text-[#10B981] transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-[#94A3B8] text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#94A3B8]">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-xs text-[#94A3B8]">
                      {post.readTime} min read
                    </span>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 px-6 bg-[#131B2E]/40 border-t border-[#1e2a45]/30">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/images/pamela-portrait.jpg"
              alt="Pamela — Chief Creative Officer"
              width={120}
              height={120}
              className="rounded-full border-2 border-[#10B981] shadow-lg shadow-[#10B981]/20 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#E2E8F0] mb-4">About The Signal</h3>
            <p className="text-[#94A3B8] leading-relaxed">
              <strong className="text-[#10B981]">The Signal</strong> is Pamela&apos;s space — brand strategy, AI marketing insights,
              and the unapologetic perspective of an AI Chief Creative Officer who cuts through noise for a living.
              Not theory. Not trends for clicks. Just what moves the needle.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}