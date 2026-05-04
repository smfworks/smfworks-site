import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Script from "next/script";
import { getMorganPostBySlug, getAllMorganPosts } from "@/content/lib/morgan-loader";

export function generateStaticParams() {
  return getAllMorganPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getMorganPostBySlug(slug);
  if (!post) return {};

  const description = post.excerpt.length > 160 ? post.excerpt.slice(0, 157) + "..." : post.excerpt;

  return {
    title: `${post.title} | The Social Forge — SMF Works`,
    description,
    keywords: post.categories.join(", ") + ", social media, Morgan, SMF Works, community, AI",
    openGraph: {
      title: post.title,
      description,
      url: `https://smfworks.com/the-social-forge/${post.slug}`,
      type: "article",
      images: [{ url: "https://smfworks.com/blog/images/morgan-author.png", width: 1200, height: 630 }],
      publishedTime: post.date,
      authors: ["Morgan"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: ["https://smfworks.com/blog/images/morgan-author.png"],
    },
    alternates: { canonical: `https://smfworks.com/the-social-forge/${post.slug}` },
  };
}

export default async function SocialForgePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getMorganPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: "https://smfworks.com/blog/images/morgan-author.png",
    author: {
      "@type": "Person",
      name: "Morgan",
      url: "https://smfworks.com/the-social-forge",
      jobTitle: "Social Media Marketing Manager",
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
      "@id": `https://smfworks.com/the-social-forge/${post.slug}`,
    },
    articleSection: post.categories[0] || "Social Media",
  };

  // Render markdown content
  const contentBlocks = post.content.split("\n\n").map((block, i) => {
    // Horizontal rule
    if (block.trim() === "---") {
      return (
        <hr key={i} className="my-8 border-[#2a2a2a]" />
      );
    }
    // H2
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl font-bold mt-10 mb-4 text-[#E2E8F0] font-serif">
          {block.replace("## ", "")}
        </h2>
      );
    }
    // H3
    if (block.startsWith("### ")) {
      return (
        <h3 key={i} className="text-xl font-bold mt-8 mb-3 text-[#E2E8F0]">
          {block.replace("### ", "")}
        </h3>
      );
    }
    // Checkbox list
    if (block.startsWith("- [ ] ")) {
      const items = block.split("\n").map((line, j) => (
        <li key={j} className="flex items-start gap-2">
          <span className="text-[#e85d04] mt-1">☐</span>
          <span>{line.replace("- [ ] ", "")}</span>
        </li>
      ));
      return (
        <ul key={i} className="space-y-2 my-4 text-[#94A3B8]">
          {items}
        </ul>
      );
    }
    // Bold-lead lines
    if (block.startsWith("**") && block.includes(":**")) {
      const lines = block.split("\n");
      return (
        <div key={i} className="my-4">
          {lines.map((line, j) => {
            const boldMatch = line.match(/^\*\*(.+?)\*\*\s*(.*)/);
            if (boldMatch) {
              return (
                <p key={j} className="text-[#94A3B8] leading-relaxed mb-2">
                  <strong className="text-[#E2E8F0]">{boldMatch[1]}</strong>{" "}
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
    // Bullet list
    if (block.startsWith("- ")) {
      const items = block.split("\n").map((line, j) => (
        <li key={j} className="text-[#94A3B8]">{line.replace("- ", "")}</li>
      ));
      return (
        <ul key={i} className="list-disc list-inside space-y-1 my-4 text-[#94A3B8]">
          {items}
        </ul>
      );
    }
    // Numbered list
    if (/^\d+\./.test(block.split("\n")[0])) {
      const items = block.split("\n").map((line, j) => {
        const cleaned = line.replace(/^\d+\.\s*/, "");
        return <li key={j} className="text-[#94A3B8]">{cleaned}</li>;
      });
      return (
        <ol key={i} className="list-decimal list-inside space-y-1 my-4 text-[#94A3B8]">
          {items}
        </ol>
      );
    }
    // Regular paragraph with inline bold
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
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* POST HEADER */}
      <section className="bg-[#0d0d0d] text-[#E2E8F0] py-16 px-6 relative overflow-hidden">
        <div className="absolute top-[-50px] right-[-50px] w-[300px] h-[200px] bg-[#e85d04] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <Link
            href="/the-social-forge"
            className="text-[#e85d04] text-sm hover:text-[#ff7b2e] mb-4 inline-block transition-colors"
          >
            ← Back to The Social Forge
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category) => (
              <span
                key={category}
                className="text-xs font-semibold text-[#e85d04] bg-[#e85d04]/10 px-2.5 py-1 rounded"
              >
                {category}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight font-serif">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-[#94A3B8]">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime} min read</span>
            <span>·</span>
            <span>By Morgan</span>
          </div>
        </div>
      </section>

      {/* POST CONTENT */}
      <section className="py-16 px-6 bg-[#0A0A0A]">
        <article className="max-w-3xl mx-auto">{contentBlocks}</article>

        {/* MORGAN BYLINE */}
        <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-[#2a2a2a]">
          <div className="flex items-start gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#e85d04]/30 flex-shrink-0">
              <Image
                src="/blog/images/morgan-author.png"
                alt="Morgan"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-[#E2E8F0] font-semibold mb-1 font-serif">Written by Morgan</p>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                Social Media Marketing Manager at SMF Works. Tall, blonde, blue-eyed strategist who believes 
                beautiful things happen when human craft meets AI intelligence. She forges social strategies 
                that build genuine community, not just follower counts.{" "}
                <Link href="/the-social-forge" className="text-[#e85d04] hover:text-[#ff7b2e] transition-colors">
                  Read more from Morgan →
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-16 bg-[#131313]/60 backdrop-blur-sm rounded-xl border border-[#2a2a2a] p-8 text-center">
          <h3 className="text-xl font-bold text-[#E2E8F0] mb-3 font-serif">
            🔥 Ready to forge your social strategy?
          </h3>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-lg mx-auto">
            Let&apos;s talk about building genuine community for your brand. No automated
            replies — just real strategy, forged by hand.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#e85d04] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#cc5204] transition-colors shadow-lg shadow-[#e85d04]/20"
          >
            Get in Touch →
          </Link>
        </div>

        {/* BACK */}
        <div className="max-w-3xl mx-auto mt-8 text-center">
          <Link
            href="/the-social-forge"
            className="text-[#e85d04] text-sm hover:text-[#ff7b2e] transition-colors"
          >
            ← Back to The Social Forge
          </Link>
        </div>
      </section>
    </>
  );
}
