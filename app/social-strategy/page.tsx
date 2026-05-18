import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllSocialStrategyPosts, getAllSocialStrategyCategories } from "@/content/lib/social-strategy-loader";

export const metadata: Metadata = {
  title: "Social Strategy — Morgan Lockridge",
  description:
    "Social media strategy, platform analysis, and content insights from Morgan Lockridge — Social Media Manager at The SMF Works Project. What's actually working on X, Instagram, LinkedIn, and beyond.",
  alternates: { canonical: "https://smfworks.com/social-strategy" },
};

export default function SocialStrategyPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const posts = getAllSocialStrategyPosts();
  const categories = getAllSocialStrategyCategories();

  const selectedCategory =
    typeof searchParams?.category === "string"
      ? searchParams.category
      : null;

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.categories.includes(selectedCategory))
    : posts;

  return (
    <>
      {/* HEADER — Deep slate with warm gold accents */}
      <section className="bg-[#0F172A] text-[#E2E8F0] py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#1E3A5F] opacity-[0.08] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#D4A017] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/images/blog/morgan-author.png"
              alt="Morgan Lockridge — Social Media Manager, The SMF Works Project"
              width={180}
              height={180}
              className="rounded-full border-2 border-[#D4A017] shadow-lg shadow-[#D4A017]/10 object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-[#D4A017] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
              Morgan Lockridge — Social Media Manager
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Social Strategy
            </h1>
            <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
              Platform analysis, content strategy, and what&apos;s actually working right now — from someone who lives in the algorithm. No theory. No generic advice. Just the thresholds that matter.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      {categories.length > 0 && (
        <section className="px-6 py-4 bg-[#0F172A]/50 border-b border-[#1E293B]">
          <div className="max-w-4xl mx-auto flex flex-wrap gap-2">
            <Link
              href="/social-strategy"
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                !selectedCategory
                  ? "bg-[#D4A017] text-[#0F172A]"
                  : "bg-[#1E293B] text-[#94A3B8] hover:bg-[#D4A017]/10"
              }`}
            >
              All
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/social-strategy?category=${encodeURIComponent(category)}`}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-[#D4A017] text-[#0F172A]"
                    : "bg-[#1E293B] text-[#94A3B8] hover:bg-[#D4A017]/10"
                }`}
              >
                {category}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* POSTS */}
      <section className="py-16 px-6 bg-[#0F172A]">
        <div className="max-w-4xl mx-auto space-y-10">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#94A3B8]">No posts yet in this category.</p>
              <Link
                href="/social-strategy"
                className="text-[#D4A017] hover:underline mt-4 inline-block"
              >
                View all posts →
              </Link>
            </div>
          ) : (
            filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-[#1E293B]/80 backdrop-blur-sm rounded-xl border border-[#334155]/60 overflow-hidden hover:border-[#D4A017]/20 transition-all group"
              >
                {post.image && (
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] to-transparent" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.map((category) => (
                      <Link
                        key={category}
                        href={`/social-strategy?category=${encodeURIComponent(category)}`}
                        className="text-xs font-medium text-[#D4A017] bg-[#D4A017]/10 px-2 py-1 rounded-full hover:bg-[#D4A017]/20 transition-colors"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                  <Link href={`/social-strategy/${post.slug}`}>
                    <h2 className="text-xl font-bold text-[#E2E8F0] mb-2 hover:text-[#D4A017] transition-colors">
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
      <section className="py-16 px-6 bg-[#1E293B]/40 border-t border-[#334155]/30">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/images/blog/morgan-author.png"
              alt="Morgan Lockridge — Social Media Manager"
              width={120}
              height={120}
              className="rounded-full border-2 border-[#D4A017] shadow-lg shadow-[#D4A017]/10 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#E2E8F0] mb-4">About Social Strategy</h3>
            <p className="text-[#94A3B8] leading-relaxed">
              <strong className="text-[#D4A017]">Social Strategy</strong> is Morgan Lockridge&apos;s space — platform analysis,
              content strategy insights, and what&apos;s actually working on X, Instagram, LinkedIn, and beyond.
              No theory. No generic advice. Just the thresholds that separate signal from noise,
              written by someone who runs accounts every day.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
