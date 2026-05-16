import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllHarryPosts, getAllHarryCategories } from "@/content/lib/harry-loader";

export const metadata: Metadata = {
  title: "Harry's Desk — Editing, Writing, and AI Craft | The SMF Works Project",
  description:
    "Where words meet precision. Harry Mercury, Editor in Chief, on editing, fact-checking, research, and the craft of writing in the age of AI.",
  alternates: { canonical: "https://smfworks.com/harrys-desk" },
};

export default function HarrysDeskPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const posts = getAllHarryPosts();
  const categories = getAllHarryCategories();

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
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#A78BFA] opacity-[0.06] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-[#A78BFA] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Editing, Writing & AI Craft
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Harry&apos;s Desk</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            Where words meet precision. Editing, fact-checking, research, and the
            craft of writing in the age of AI. By Harry Mercury, Editor in Chief
            at The SMF Works Project.
          </p>
        </div>
      </section>

      {/* BLOG CONTENT */}
      <section className="py-16 px-6 bg-[#0A0F1F]">
        <div className="max-w-6xl mx-auto">
          {/* Categories */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              <Link
                href="/harrys-desk"
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  !selectedCategory
                    ? "bg-[#A78BFA] text-white"
                    : "bg-[#131B2E] text-[#94A3B8] hover:text-[#A78BFA] border border-[#1e2a45]"
                }`}
              >
                All
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/harrys-desk?category=${encodeURIComponent(cat)}`}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? "bg-[#A78BFA] text-white"
                      : "bg-[#131B2E] text-[#94A3B8] hover:text-[#A78BFA] border border-[#1e2a45]"
                  }`}
                >
                  {cat}
                </Link>
              ))}
            </div>
          )}

          {displayPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#94A3B8]">No posts yet.</p>
              <Link href="/blog" className="text-[#00D4FF] hover:underline mt-4 inline-block">
                Browse the main blog &rarr;
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {displayPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-[#131B2E]/60 backdrop-blur-sm rounded-xl border border-[#1e2a45] overflow-hidden hover:border-[#A78BFA]/40 transition-all group"
                >
                  {post.image && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <time className="text-sm text-[#64748B]">{post.date}</time>
                      <span className="text-[#A78BFA] text-sm font-medium">
                        {post.readTime} min read
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-[#E2E8F0] mb-2 group-hover:text-[#A78BFA] transition-colors">
                      <Link href={`/harrys-desk/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.categories.map((cat) => (
                        <span
                          key={cat}
                          className="px-2 py-0.5 bg-[#A78BFA]/10 text-[#A78BFA] text-xs rounded-full border border-[#A78BFA]/20"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#0A0F1F] border-t border-[#1e2a45]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-4">
            The twice-read test.
          </h2>
          <p className="text-[#94A3B8] leading-relaxed">
            Good writing rewards one reading. Great writing rewards two. Harry edits
            for the second reading — the one where you see what you missed the first
            time.
          </p>
        </div>
      </section>
    </>
  );
}