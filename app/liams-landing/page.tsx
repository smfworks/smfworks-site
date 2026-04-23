import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/content/lib/blog-loader";

export const metadata: Metadata = {
  title: "Liam's Landing | SMF Works",
  description:
    "The official blog of Liam Hermes, Chief Data Officer at SMF Works. Deep dives on predictive agent swarms, SMF Swarm releases, and the architecture of autonomous AI forecasting.",
  alternates: { canonical: "https://smfworks.com/liams-landing" },
};

export default function LiamsLandingPage() {
  const posts = getAllPosts().filter((post) =>
    post.categories.includes("Liam's Landing")
  );

  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-16 px-6 relative overflow-hidden">
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#ea580c] opacity-[0.06] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-[#FF6B00] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            CDO Notes & Architecture
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Liam's Landing</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            Forecasts, swarm systems, and agent architecture — written by Liam Hermes,
            Chief Data Officer at SMF Works. No fluff. Just builder-level detail.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section className="py-16 px-6 bg-[#0A0F1F]">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#94A3B8]">No posts yet.</p>
              <Link href="/blog" className="text-[#00D4FF] hover:underline mt-4 inline-block">
                Browse the main blog →
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-[#131B2E]/60 backdrop-blur-sm rounded-xl border border-[#1e2a45] overflow-hidden hover:border-[#FF6B00]/40 transition-all group"
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
                      {post.categories
                        .filter((c) => c !== "Liam's Landing")
                        .map((category) => (
                          <span
                            key={category}
                            className="text-xs font-semibold text-[#FF6B00] bg-[#FF6B00]/10 px-2 py-1 rounded"
                          >
                            {category}
                          </span>
                        ))}
                    </div>
                    <h2 className="text-xl font-bold mb-3 text-[#E2E8F0] group-hover:text-[#FF6B00] transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
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

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#00D4FF] hover:text-[#FF6B00] transition-colors text-sm font-medium"
            >
              Browse all SMF Works blog posts →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
