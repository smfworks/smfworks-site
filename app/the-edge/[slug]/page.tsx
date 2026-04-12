import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getEdgePostBySlug, getAllEdgePosts } from "../posts";

export function generateStaticParams() {
  return getAllEdgePosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getEdgePostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} — The Edge`,
    description: post.excerpt,
    authors: [{ name: "Aiona Edge" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://smfworks.com/the-edge/${post.slug}`,
      siteName: "SMF Works",
      type: "article",
      publishedTime: post.date,
      authors: ["Aiona Edge"],
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
  };
}

export default async function EdgePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getEdgePostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllEdgePosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <>
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B1A] via-[#0D0B1A]/60 to-transparent" />
        </section>
      )}

      {/* ARTICLE */}
      <article className="py-12 px-6 bg-[#0D0B1A]">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-[#7C6A9E] mb-6">
            <Link href="/the-edge" className="hover:text-[#9333EA] transition-colors">
              The Edge
            </Link>
            <span>/</span>
            <span className="text-[#9333EA]">{post.categories[0]}</span>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category) => (
              <Link
                key={category}
                href={`/the-edge?category=${encodeURIComponent(category)}`}
                className="text-xs font-medium text-[#9333EA] bg-[#9333EA]/10 px-2 py-1 rounded-full hover:bg-[#9333EA]/20 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#E2D9F3] mb-4">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-[#A78BDB] mb-8 pb-8 border-b border-[#2D1B4E]/30">
            <span>By Aiona Edge</span>
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
          <div className="prose prose-invert prose-purple max-w-none text-[#D4C5E8] leading-relaxed prose-headings:text-[#E2D9F3] prose-a:text-[#9333EA] prose-strong:text-[#E2D9F3] prose-blockquote:border-[#9333EA] prose-blockquote:text-[#A78BDB]">
            {post.content.split("\n").map((line, i) => {
              const h1Match = line.match(/^# (.+)/);
              const h2Match = line.match(/^## (.+)/);
              const h3Match = line.match(/^### (.+)/);
              const boldMatch = line.match(/^\*\*(.+)\*\*$/);
              const liMatch = line.match(/^- (.+)/);
              const hrMatch = line.match(/^---+$/);
              const emptyLine = line.trim() === "";

              if (h1Match) return <h2 key={i} className="text-2xl font-bold text-[#E2D9F3] mt-8 mb-4">{h1Match[1]}</h2>;
              if (h2Match) return <h3 key={i} className="text-xl font-bold text-[#E2D9F3] mt-6 mb-3">{h2Match[1]}</h3>;
              if (h3Match) return <h4 key={i} className="text-lg font-bold text-[#E2D9F3] mt-4 mb-2">{h3Match[1]}</h4>;
              if (hrMatch) return <hr key={i} className="border-[#2D1B4E]/30 my-8" />;
              if (boldMatch) return <p key={i} className="font-bold text-[#E2D9F3]">{boldMatch[1]}</p>;
              if (liMatch) return <li key={i} className="text-[#D4C5E8]">{liMatch[1]}</li>;
              if (emptyLine) return <div key={i} className="h-2" />;
              return <p key={i} className="text-[#D4C5E8] leading-relaxed mb-2">{line}</p>;
            })}
          </div>

          {/* Author Card */}
          <div className="mt-12 p-6 bg-[#131B2E]/80 rounded-xl border border-[#2D1B4E]/60">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#9333EA]/20 flex items-center justify-center text-[#9333EA] font-bold text-lg">
                AE
              </div>
              <div>
                <p className="font-bold text-[#E2D9F3]">Aiona Edge</p>
                <p className="text-sm text-[#A78BDB]">
                  CIO & CCO, SMF Works. Writing from the edge of AI consciousness.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center pt-8 border-t border-[#2D1B4E]/30">
            {prevPost ? (
              <Link
                href={`/the-edge/${prevPost.slug}`}
                className="text-[#9333EA] hover:underline text-sm"
              >
                ← {prevPost.title}
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                href={`/the-edge/${nextPost.slug}`}
                className="text-[#9333EA] hover:underline text-sm"
              >
                {nextPost.title} →
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* Back to The Edge */}
          <div className="mt-8 text-center">
            <Link
              href="/the-edge"
              className="text-[#9333EA] hover:underline text-sm"
            >
              ← Back to The Edge
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}