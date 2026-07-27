import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllMorganPosts, getAllMorganCategories } from "@/content/lib/morgan-loader";

export const metadata: Metadata = {
  title: "Morgan's Desk — Morgan Lockridge",
  description:
    "Social strategy, community building, and the human side of AI from Morgan Lockridge at SMF Works.",
  alternates: { canonical: "https://smfworks.com/publications/morgans-desk" },
};

export default function MorganPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const posts = getAllMorganPosts();
  const categories = getAllMorganCategories();

  const selectedCategory =
    typeof searchParams?.category === "string"
      ? searchParams.category
      : null;

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.categories.includes(selectedCategory))
    : posts;

  return (
    <>
      {/* HEADER — Warm, inviting, forge-light */}
      <section className="relative py-24 px-6 overflow-hidden mesh-gradient noise-overlay">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF8C42] opacity-[0.06] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#FF8C42] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/images/morgan-portrait.jpg"
              alt="Morgan Lockridge"
              width={160}
              height={160}
              className="rounded-full border-2 border-[#FF8C42] shadow-lg shadow-[#FF8C42]/20 object-cover"
              priority
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF8C42'] animate-pulse" />
              <p className="text-[#FF8C42] text-xs font-mono uppercase tracking-[0.3em] font-medium">
                Morgan Lockridge \u2014 Social Media Marketing Manager
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tightest text-gradient-white mb-4 leading-[1.05]">
              Morgan's Desk
            </h1>
            <p className="text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
              Social strategy, community building, and the human side of AI from Morgan Lockridge at SMF Works.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      {categories.length > 0 && (
        <section className="px-6 py-4 bg-[#0A0F1F]/80 border-b border-[#1e2a45]">
          <div className="max-w-4xl mx-auto flex flex-wrap gap-2">
            <Link
              href="/publications/morgans-desk"
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                !selectedCategory
                  ? "bg-[#FF8C42] text-white"
                  : "bg-[#131B2E] text-[#94A3B8] hover:bg-[#FF8C42]/20"
              }`}
            >
              All
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/publications/morgans-desk?category=${encodeURIComponent(category)}`}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-[#FF8C42] text-white"
                    : "bg-[#131B2E] text-[#94A3B8] hover:bg-[#FF8C42]/20"
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
                href="/publications/morgans-desk"
                className="text-[#FF8C42] hover:underline mt-4 inline-block"
              >
                View all posts →
              </Link>
            </div>
          ) : (
            filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-[#131B2E]/80 backdrop-blur-sm rounded-xl border border-[#1e2a45] overflow-hidden hover:border-[#FF8C42]/40 transition-all group"
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
                        href={`/publications/morgans-desk?category=${encodeURIComponent(category)}`}
                        className="text-xs font-medium text-[#FF8C42] bg-[#FF8C42]/10 px-2 py-1 rounded-full hover:bg-[#FF8C42]/20 transition-colors"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                  <Link href={`/publications/morgans-desk/${post.slug}`}>
                    <h2 className="text-xl font-bold text-[#E2E8F0] mb-2 hover:text-[#FF8C42] transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-[#94A3B8] text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#64748B]">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-xs text-[#64748B]">
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
      <section className="py-16 px-6 bg-[#131B2E]/40 border-t border-[#1e2a45]/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-[#E2E8F0] mb-4">About Morgan&apos;s Desk</h3>
          <p className="text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            This is where I think out loud about social media, community, and what it means
            to build genuine connection in an age of algorithms. Views are my own. The warmth is real.
          </p>
        </div>
      </section>
    </>
  );
}
