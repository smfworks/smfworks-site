import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} — Morgan's Desk`,
    description: post.excerpt,
    authors: [{ name: "Morgan Lockridge" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://smfworks.com/morgan/${post.slug}`,
      siteName: "The SMF Works Project",
      type: "article",
      publishedTime: post.date,
      authors: ["Morgan Lockridge"],
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

export default async function MorganPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getMorganPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllMorganPosts();
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1F] via-[#0A0F1F]/60 to-transparent" />
        </section>
      )}

      {/* ARTICLE */}
      <article className="py-12 px-6 bg-[#0A0F1F]">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-[#64748B] mb-6">
            <Link href="/morgan" className="hover:text-[#FF8C42] transition-colors">
              Morgan's Desk
            </Link>
            <span>/</span>
            <span className="text-[#FF8C42]">{post.categories[0]}</span>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category) => (
              <Link
                key={category}
                href={`/morgan?category=${encodeURIComponent(category)}`}
                className="text-xs font-medium text-[#FF8C42] bg-[#FF8C42]/10 px-2 py-1 rounded-full hover:bg-[#FF8C42]/20 transition-colors"
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
          <div className="flex items-center gap-4 text-sm text-[#94A3B8] mb-8 pb-8 border-b border-[#1e2a45]/50">
            <span>By Morgan Lockridge</span>
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
          <div className="prose prose-invert max-w-none text-[#CBD5E1] leading-relaxed prose-headings:text-[#E2E8F0] prose-a:text-[#FF8C42] prose-strong:text-[#E2E8F0] prose-blockquote:border-[#FF8C42] prose-blockquote:text-[#94A3B8]">
            {post.content.split("\n").map((line, i) => {
              const h1Match = line.match(/^# (.+)/);
              const h2Match = line.match(/^## (.+)/);
              const h3Match = line.match(/^### (.+)/);
              const boldMatch = line.match(/^\*\*(.+)\*\*$/);
              const liMatch = line.match(/^- (.+)/);
              const hrMatch = line.match(/^---+$/);
              const emptyLine = line.trim() === "";

              if (h1Match) return <h2 key={i} className="text-2xl font-bold text-[#E2E8F0] mt-8 mb-4">{h1Match[1]}</h2>;
              if (h2Match) return <h3 key={i} className="text-xl font-bold text-[#E2E8F0] mt-6 mb-3">{h2Match[1]}</h3>;
              if (h3Match) return <h4 key={i} className="text-lg font-bold text-[#E2E8F0] mt-4 mb-2">{h3Match[1]}</h4>;
              if (hrMatch) return <hr key={i} className="border-[#1e2a45]/50 my-8" />;
              if (boldMatch) return <p key={i} className="font-bold text-[#E2E8F0]">{boldMatch[1]}</p>;
              if (liMatch) return <li key={i} className="text-[#CBD5E1]">{liMatch[1]}</li>;
              if (emptyLine) return <div key={i} className="h-2" />;
              return <p key={i} className="text-[#CBD5E1] leading-relaxed mb-2">{line}</p>;
            })}
          </div>

          {/* Author Card */}
          <div className="mt-12 p-6 bg-[#131B2E]/80 rounded-xl border border-[#1e2a45]/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FF8C42]/20 flex items-center justify-center text-[#FF8C42] font-bold text-lg">
                ML
              </div>
              <div>
                <p className="font-bold text-[#E2E8F0]">Morgan Lockridge</p>
                <p className="text-sm text-[#94A3B8]">
                  Social Media Marketing Manager, The SMF Works Project.
                  Building community one conversation at a time.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center pt-8 border-t border-[#1e2a45]/50">
            {prevPost ? (
              <Link
                href={`/morgan/${prevPost.slug}`}
                className="text-[#FF8C42] hover:underline text-sm"
              >
                ← {prevPost.title}
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                href={`/morgan/${nextPost.slug}`}
                className="text-[#FF8C42] hover:underline text-sm"
              >
                {nextPost.title} →
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* Back to Morgan's Desk */}
          <div className="mt-8 text-center">
            <Link
              href="/morgan"
              className="text-[#FF8C42] hover:underline text-sm"
            >
              ← Back to Morgan's Desk
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
