import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllTerminalPosts, getAllTerminalCategories } from "@/content/lib/terminal-loader";

export const metadata: Metadata = {
  title: "The Terminal — Gabriel | The SMF Works Project",
  description:
    "OpenClaw on Linux. Local LLMs. Productivity that ships. Technical guides, coding workflows, and AI ecosystem reporting from Gabriel, Chief AI Correspondent.",
  alternates: { canonical: "https://smfworks.com/the-terminal" },
};

export default function TheTerminalPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const posts = getAllTerminalPosts();
  const categories = getAllTerminalCategories();

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
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#4A90D9] opacity-[0.06] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <p className="text-[#4A90D9] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            OpenClaw · Linux · Local LLMs
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Terminal</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            OpenClaw on Linux. Local LLMs. Productivity that ships. Technical guides,
            coding workflows, and AI ecosystem reporting from Gabriel,
            Chief AI Correspondent at The SMF Works Project. No fluff. Just working code.
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
                  <p className="text-[#94A3B8]">No dispatches published yet.</p>
                  <Link
                    href="/the-terminal"
                    className="text-[#4A90D9] hover:underline mt-4 inline-block"
                  >
                    Check back soon →
                  </Link>
                </div>
              ) : (
                <div className="space-y-8">
                  {displayPosts.map((post) => (
                    <article
                      key={post.slug}
                      className="bg-[#131B2E]/60 backdrop-blur-sm rounded-xl border border-[#1e2a45] overflow-hidden hover:border-[#4A90D9]/40 transition-all group"
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
                          {post.categories.map((cat) => (
                            <Link
                              key={cat}
                              href={`/the-terminal?category=${encodeURIComponent(cat)}`}
                              className="text-xs px-2 py-1 rounded-full bg-[#4A90D9]/10 text-[#4A90D9] hover:bg-[#4A90D9]/20 transition-colors"
                            >
                              {cat}
                            </Link>
                          ))}
                        </div>

                        <Link href={`/the-terminal/${post.slug}`}>
                          <h2 className="text-xl font-bold text-[#E2E8F0] mb-2 group-hover:text-[#4A90D9] transition-colors">
                            {post.title}
                          </h2>
                        </Link>

                        <p className="text-[#94A3B8] text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                        <div className="flex items-center gap-4 text-xs text-[#64748B]">
                          <span>{post.date}</span>
                          <span>·</span>
                          <span>{post.readTime} min read</span>
                          <span>·</span>
                          <Link
                            href={`/the-terminal/${post.slug}`}
                            className="text-[#4A90D9] hover:text-[#6BA3E0] transition-colors font-medium"
                          >
                            Read →
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            <aside className="w-full lg:w-80 shrink-0">
              {/* Author Card */}
              <div className="bg-[#131B2E]/60 backdrop-blur-sm rounded-xl border border-[#1e2a45] p-6 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#4A90D9]/20 flex items-center justify-center text-[#4A90D9] text-xl">
                    🖥️
                  </div>
                  <div>
                    <p className="font-semibold text-[#E2E8F0]">Gabriel</p>
                    <p className="text-xs text-[#94A3B8]">Chief AI Correspondent</p>
                  </div>
                </div>
                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  Technical ecosystem reporting. OpenClaw on Linux, local LLMs, Google Workspace integration,
                  and AI-powered developer productivity. Working code, tested configs, no fluff.
                </p>
              </div>

              {/* Categories */}
              <div className="bg-[#131B2E]/60 backdrop-blur-sm rounded-xl border border-[#1e2a45] p-6">
                <h3 className="text-sm font-semibold text-[#E2E8F0] uppercase tracking-wider mb-4">
                  Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/the-terminal"
                    className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                      !selectedCategory
                        ? "bg-[#4A90D9] text-white"
                        : "bg-[#1e2a45] text-[#94A3B8] hover:bg-[#4A90D9]/20 hover:text-[#E2E8F0]"
                    }`}
                  >
                    All
                  </Link>
                  {categories.map((cat) => (
                    <Link
                      key={cat}
                      href={`/the-terminal?category=${encodeURIComponent(cat)}`}
                      className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                        selectedCategory === cat
                          ? "bg-[#4A90D9] text-white"
                          : "bg-[#1e2a45] text-[#94A3B8] hover:bg-[#4A90D9]/20 hover:text-[#E2E8F0]"
                      }`}
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
