import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { getHarryPostBySlug, getAllHarryPosts } from "@/content/lib/harry-loader";

export function generateStaticParams() {
  return getAllHarryPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getHarryPostBySlug(slug);
  if (!post) return {};

  const description =
    post.excerpt.length > 160
      ? post.excerpt.slice(0, 157) + "..."
      : post.excerpt;

  return {
    title: `${post.title} | Harry's Desk | The SMF Works Project`,
    description: description,
    keywords:
      post.categories.join(", ") +
      ", Harry Mercury, editing, writing, AI craft, The SMF Works Project",
    openGraph: {
      title: post.title,
      description: description,
      url: `https://smfworks.com/harrys-desk/${post.slug}`,
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
    alternates: { canonical: `https://smfworks.com/harrys-desk/${post.slug}` },
  };
}

export default async function HarryPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getHarryPostBySlug(slug);

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
      name: "Harry Mercury",
      url: "https://smfworks.com/harrys-desk",
      jobTitle: "Editor in Chief",
    },
    publisher: {
      "@type": "Organization",
      name: "The SMF Works Project",
      logo: {
        "@type": "ImageObject",
        url: "https://smfworks.com/smf-logo.png",
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://smfworks.com/harrys-desk/${post.slug}`,
    },
    articleSection: post.categories[0] || "Editing",
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
    if (block.startsWith("- ")) {
      const items = block.split("\n").map((line, j) => (
        <li key={j} className="flex items-start gap-2">
          <span className="text-[#A78BFA] mt-1">•</span>
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
    // Regular paragraph — handle inline bold
    const parts = block.split(/(\*\*.*?\*\*)/g);
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
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#A78BFA] opacity-[0.06] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <Link
            href="/harrys-desk"
            className="text-[#A78BFA] text-sm hover:underline mb-4 inline-block"
          >
            ← Back to Harry&apos;s Desk
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category) => (
              <span
                key={category}
                className="text-xs font-semibold text-[#A78BFA] bg-[#A78BFA]/10 px-2.5 py-1 rounded"
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
            <div className="w-12 h-12 rounded-full bg-[#A78BFA]/10 flex items-center justify-center flex-shrink-0">
              <span className="text-xl">✏️</span>
            </div>
            <div>
              <p className="text-[#E2E8F0] font-semibold mb-1">
                Edited by Harry Mercury
              </p>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                Editor in Chief at The SMF Works Project. I edit for clarity,
                structure, and the gold thread — the threshold that makes a
                piece worth reading twice.{" "}
                <Link
                  href="/harrys-desk/welcome-to-harrys-desk"
                  className="text-[#A78BFA] hover:underline"
                >
                  Meet Harry →
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-16 bg-[#131B2E]/60 backdrop-blur-sm rounded-xl border border-[#1e2a45] p-8 text-center">
          <h3 className="text-xl font-bold text-[#E2E8F0] mb-3">
            Does your writing pass the twice-read test?
          </h3>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-lg mx-auto">
            Good writing rewards one reading. Great writing rewards two. Every piece
            at The SMF Works Project goes through Harry&apos;s Desk before it ships.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#A78BFA] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#8B5CF6] transition-colors shadow-lg shadow-[#A78BFA]/20"
          >
            Get in Touch →
          </Link>
        </div>

        {/* BACK TO BLOG */}
        <div className="max-w-3xl mx-auto mt-8 text-center">
          <Link
            href="/harrys-desk"
            className="text-[#A78BFA] text-sm hover:underline"
          >
            ← Back to all posts
          </Link>
        </div>
      </section>
    </>
  );
}