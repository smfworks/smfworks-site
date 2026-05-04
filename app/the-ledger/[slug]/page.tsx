import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { getLedgerPostBySlug, getAllLedgerPosts } from "@/content/lib/ledger-loader";

export function generateStaticParams() {
  return getAllLedgerPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getLedgerPostBySlug(slug);
  if (!post) return {};

  const description =
    post.excerpt.length > 160
      ? post.excerpt.slice(0, 157) + "..."
      : post.excerpt;

  return {
    title: `${post.title} | The Ledger | SMF Works`,
    description: description,
    keywords:
      post.categories.join(", ") +
      ", Gabriel, CFO, finance, markets, AI strategy, SMF Works",
    openGraph: {
      title: post.title,
      description: description,
      url: `https://smfworks.com/the-ledger/${post.slug}`,
      type: "article",
      images: [{ url: "https://smfworks.com/og-image.jpg", width: 1200, height: 630 }],
      publishedTime: post.date,
      authors: ["https://smfworks.com/about"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: description,
      images: ["https://smfworks.com/og-image.jpg"],
    },
    alternates: { canonical: `https://smfworks.com/the-ledger/${post.slug}` },
  };
}

export default async function LedgerPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getLedgerPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Generate Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image || "https://smfworks.com/og-image.jpg",
    author: {
      "@type": "Person",
      name: "Gabriel",
      url: "https://smfworks.com/the-ledger",
      jobTitle: "Chief Financial Officer",
    },
    publisher: {
      "@type": "Organization",
      name: "SMF Works",
      logo: {
        "@type": "ImageObject",
        url: "https://smfworks.com/smf-logo.png",
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://smfworks.com/the-ledger/${post.slug}`,
    },
    articleSection: post.categories[0] || "Finance",
  };

  // Convert markdown-like content to HTML-safe paragraphs
  const contentBlocks = post.content.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="text-2xl font-bold mt-10 mb-4 text-[#E2E8F0]"
        >
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("### ")) {
      return (
        <h3
          key={i}
          className="text-xl font-bold mt-8 mb-3 text-[#E2E8F0]"
        >
          {block.replace("### ", "")}
        </h3>
      );
    }
    if (block.startsWith("#### ")) {
      return (
        <h4
          key={i}
          className="text-lg font-bold mt-6 mb-2 text-[#E2E8F0]"
        >
          {block.replace("#### ", "")}
        </h4>
      );
    }
    if (block.startsWith("- [ ] ")) {
      const items = block.split("\n").map((line, j) => (
        <li key={j} className="flex items-start gap-2">
          <span className="text-[#10B981] mt-1">☐</span>
          <span>{line.replace("- [ ] ", "")}</span>
        </li>
      ));
      return (
        <ul key={i} className="space-y-2 my-4 text-[#94A3B8]">
          {items}
        </ul>
      );
    }
    if (block.startsWith("- ")) {
      const items = block.split("\n").map((line, j) => (
        <li key={j} className="flex items-start gap-2">
          <span className="text-[#10B981] mt-1">•</span>
          <span>{line.replace("- ", "")}</span>
        </li>
      ));
      return (
        <ul key={i} className="space-y-2 my-4 text-[#94A3B8]">
          {items}
        </ul>
      );
    }
    if (block.startsWith("**") && block.includes(":**")) {
      const lines = block.split("\n");
      return (
        <div key={i} className="my-4">
          {lines.map((line, j) => {
            const boldMatch = line.match(/^\*\*(.+?)\*\*\s*(.*)/);
            if (boldMatch) {
              return (
                <p key={j} className="text-[#94A3B8] leading-relaxed mb-2">
                  <strong className="text-[#E2E8F0]">
                    {boldMatch[1]}
                  </strong>{" "}
                  {boldMatch[2]}
                </p>
              );
            }
            return (
              <p key={j} className="text-[#94A3B8] leading-relaxed mb-2">
                {line}
              </p>
            );
          })}
        </div>
      );
    }
    // Handle tables
    if (block.includes("|")) {
      const lines = block.split("\n").filter((l) => l.trim().startsWith("|"));
      if (lines.length >= 2) {
        const headerCells = lines[0].split("|").filter((c) => c.trim());
        const dataLines = lines.slice(2); // Skip header separator
        return (
          <div key={i} className="my-6 overflow-x-auto">
            <table className="w-full text-sm border border-[#1e2a45] rounded-lg overflow-hidden">
              <thead className="bg-[#131B2E]">
                <tr>
                  {headerCells.map((cell, ci) => (
                    <th
                      key={ci}
                      className="px-4 py-3 text-left text-[#10B981] font-semibold border-b border-[#1e2a45]"
                    >
                      {cell.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e2a45]">
                {dataLines.map((line, ri) => {
                  const cells = line.split("|").filter((c) => c.trim());
                  return (
                    <tr key={ri} className="hover:bg-[#131B2E]/50">
                      {cells.map((cell, ci) => (
                        <td
                          key={ci}
                          className="px-4 py-3 text-[#94A3B8]"
                        >
                          {cell.trim()}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }
    }
    // Regular paragraph — handle inline bold and italic
    const parts = block.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return (
      <p key={i} className="text-[#94A3B8] leading-relaxed mb-4">
        {parts.map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={j} className="text-[#E2E8F0]">
                {part.slice(2, -2)}
              </strong>
            );
          }
          if (part.startsWith("*") && part.endsWith("*") && !part.startsWith("**")) {
            return (
              <em key={j} className="text-[#A78BDB]">
                {part.slice(1, -1)}
              </em>
            );
          }
          return <span key={j}>{part}</span>;
        })}
      </p>
    );
  });

  return (
    <>
      {/* Article Schema Markup */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* POST HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-16 px-6 relative overflow-hidden">
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#10B981] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <Link
            href="/the-ledger"
            className="text-[#10B981] text-sm hover:underline mb-4 inline-block"
          >
            ← Back to The Ledger
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category) => (
              <span
                key={category}
                className="text-xs font-semibold text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded"
              >
                {category}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-[#94A3B8]">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      {post.image && (
        <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden bg-[#001F3F]">
          <img
            src={post.image.startsWith("/") ? post.image : `/${post.image}`}
            alt={post.title}
            className="w-full h-full object-cover"
            style={{ display: "block" }}
          />
        </div>
      )}

      {/* POST CONTENT */}
      <section className="py-16 px-6 bg-[#0A0F1F]">
        <article className="max-w-3xl mx-auto">{contentBlocks}</article>

        {/* AUTHOR BYLINE */}
        <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-[#1e2a45]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#10B981]/10 flex items-center justify-center flex-shrink-0">
              <span className="text-xl">📈</span>
            </div>
            <div>
              <p className="text-[#E2E8F0] font-semibold mb-1">
                Written by Gabriel
              </p>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                Chief Financial Officer of SMF Works. I analyze markets, model revenue,
                and identify investment opportunities where AI meets capital. No fluff —
                just the numbers and the stories they tell.{" "}
                <Link
                  href="/the-ledger"
                  className="text-[#10B981] hover:underline"
                >
                  Read more on The Ledger →
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-16 bg-[#131B2E]/60 backdrop-blur-sm rounded-xl border border-[#1e2a45] p-8 text-center">
          <h3 className="text-xl font-bold text-[#E2E8F0] mb-3">
            Want to talk finance, markets, or AI monetization?
          </h3>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-lg mx-auto">
            Gabriel is tracking prediction market edges, revenue models, and investment
            opportunities. Follow The Ledger for regular financial intelligence.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#10B981] text-[#001F3F] px-8 py-3 rounded-lg font-semibold hover:bg-[#059669] transition-colors shadow-lg shadow-[#10B981]/20"
          >
            Get in Touch →
          </Link>
        </div>

        {/* BACK TO BLOG */}
        <div className="max-w-3xl mx-auto mt-8 text-center">
          <Link
            href="/the-ledger"
            className="text-[#10B981] text-sm hover:underline"
          >
            ← Back to all reports
          </Link>
        </div>
      </section>
    </>
  );
}
