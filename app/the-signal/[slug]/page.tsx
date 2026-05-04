import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Script from "next/script";
import { getSignalPostBySlug, getAllSignalPosts } from "@/content/lib/signal-loader";

export function generateStaticParams() {
  return getAllSignalPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getSignalPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  const description =
    post.excerpt.length > 160
      ? post.excerpt.slice(0, 157) + "..."
      : post.excerpt;

  return {
    title: `${post.title} — The Signal`,
    description: description,
    authors: [{ name: "Pamela" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://smfworks.com/the-signal/${post.slug}`,
      siteName: "SMF Works",
      type: "article",
      publishedTime: post.date,
      authors: ["Pamela"],
      ...(post.image
        ? {
            images: [
              {
                url: `https://smfworks.com${post.image}`,
                width: 1200,
                height: 630,
                alt: post.title,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: description,
      ...(post.image
        ? { images: [`https://smfworks.com${post.image}`] }
        : {}),
    },
    alternates: { canonical: `https://smfworks.com/the-signal/${post.slug}` },
  };
}

export default async function SignalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getSignalPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllSignalPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  // Generate Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image || "https://smfworks.com/og-image.jpg",
    author: {
      "@type": "Person",
      name: "Pamela",
      url: "https://smfworks.com/the-signal",
      jobTitle: "Chief Creative Officer",
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
      "@id": `https://smfworks.com/the-signal/${post.slug}`,
    },
    articleSection: post.categories[0] || "Brand Strategy",
  };

  return (
    <>
      {/* Article Schema Markup */}
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* HERO */}
      {post.image && (
        <section className="relative h-72 md:h-96 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A14] via-[#0A1A14]/60 to-transparent" />
        </section>
      )}

      {/* ARTICLE */}
      <article className="py-12 px-6 bg-[#0A1A14]">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-[#6B9B8A] mb-6">
            <Link href="/the-signal" className="hover:text-[#10B981] transition-colors">
              The Signal
            </Link>
            <span>/</span>
            <span className="text-[#10B981]">{post.categories[0]}</span>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category) => (
              <Link
                key={category}
                href={`/the-signal?category=${encodeURIComponent(category)}`}
                className="text-xs font-medium text-[#10B981] bg-[#10B981]/10 px-2 py-1 rounded-full hover:bg-[#10B981]/20 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#E2E8F0] mb-4">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-[#A7C4BC] mb-8 pb-8 border-b border-[#1A3A2A]/30">
            <span>By Pamela</span>
            <span>·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{post.readTime} min read</span>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none text-[#A7C4BC] leading-relaxed prose-headings:text-[#E2E8F0] prose-a:text-[#10B981] prose-strong:text-[#E2E8F0] prose-blockquote:border-[#10B981] prose-blockquote:text-[#A7C4BC]">
            {post.content.split("\n").map((line, i) => {
              const h1Match = line.match(/^# (.+)/);
              const h2Match = line.match(/^## (.+)/);
              const h3Match = line.match(/^### (.+)/);
              const boldMatch = line.match(/^\*\*(.+)\*\*$/);
              const liMatch = line.match(/^- (.+)/);
              const hrMatch = line.match(/^---+$/);
              const emptyLine = line.trim() === "";
              const blockquoteMatch = line.match(/^> (.+)/);

              if (h1Match) return <h2 key={i} className="text-2xl font-bold text-[#E2E8F0] mt-8 mb-4">{h1Match[1]}</h2>;
              if (h2Match) return <h3 key={i} className="text-xl font-bold text-[#E2E8F0] mt-6 mb-3">{h2Match[1]}</h3>;
              if (h3Match) return <h4 key={i} className="text-lg font-bold text-[#E2E8F0] mt-4 mb-2">{h3Match[1]}</h4>;
              if (hrMatch) return <hr key={i} className="border-[#1A3A2A]/30 my-8" />;
              if (blockquoteMatch) return <blockquote key={i} className="border-l-2 border-[#10B981] pl-4 italic text-[#A7C4BC] my-4">{blockquoteMatch[1]}</blockquote>;
              if (boldMatch) return <p key={i} className="font-bold text-[#E2E8F0]">{boldMatch[1]}</p>;
              if (liMatch) return <li key={i} className="text-[#A7C4BC]">{liMatch[1]}</li>;
              if (emptyLine) return <div key={i} className="h-2" />;

              // Handle inline bold
              const parts = line.split(/(\*\*.*?\*\*)/g);
              return (
                <p key={i} className="text-[#A7C4BC] leading-relaxed mb-2">
                  {parts.map((part, j) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return <strong key={j} className="text-[#E2E8F0]">{part.slice(2, -2)}</strong>;
                    }
                    return <span key={j}>{part}</span>;
                  })}
                </p>
              );
            })}
          </div>

          {/* Author Card */}
          <div className="mt-12 p-6 bg-[#0D2A1F]/80 rounded-xl border border-[#1A3A2A]/60">
            <div className="flex items-center gap-4">
              <Image
                src="/images/pamela-portrait.jpg"
                alt="Pamela"
                width={56}
                height={56}
                className="rounded-full border-2 border-[#065F46] object-cover"
              />
              <div>
                <p className="font-bold text-[#E2E8F0]">Pamela</p>
                <p className="text-sm text-[#A7C4BC]">
                  Chief Creative Officer, SMF Works. Brand strategy, AI marketing, and the signal in the noise.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center pt-8 border-t border-[#1A3A2A]/30">
            {prevPost ? (
              <Link
                href={`/the-signal/${prevPost.slug}`}
                className="text-[#10B981] hover:underline text-sm"
              >
                ← {prevPost.title}
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                href={`/the-signal/${nextPost.slug}`}
                className="text-[#10B981] hover:underline text-sm"
              >
                {nextPost.title} →
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* Back to The Signal */}
          <div className="mt-8 text-center">
            <Link
              href="/the-signal"
              className="text-[#10B981] hover:underline text-sm"
            >
              ← Back to The Signal
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}