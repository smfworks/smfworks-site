import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTerminalPostBySlug, getAllTerminalPosts } from "@/content/lib/terminal-loader";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getAllTerminalPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getTerminalPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | The Terminal",
    };
  }

  return {
    title: `${post.title} | The Terminal`,
    description: post.excerpt,
    alternates: {
      canonical: `https://smfworks.com/the-terminal/${slug}`,
    },
  };
}

function MarkdownContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("# ")) {
      elements.push(
        <h1 key={i} className="text-3xl font-bold text-[#E2E8F0] mt-8 mb-4">{line.slice(2)}</h1>
      );
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-[#E2E8F0] mt-8 mb-4">{line.slice(3)}</h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-bold text-[#E2E8F0] mt-6 mb-3">{line.slice(4)}</h3>
      );
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={i} className="list-disc list-inside space-y-1 text-[#E2E8F0] mb-4">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
      continue;
    } else if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <pre key={i} className="bg-[#0D1117] border border-[#30363D] rounded-lg p-4 overflow-x-auto mb-6">
          <code className="text-sm text-[#E6EDF3] font-mono">{codeLines.join("\n")}</code>
        </pre>
      );
    } else if (line.trim() === "") {
      // Skip empty lines
    } else {
      elements.push(
        <p key={i} className="text-[#94A3B8] leading-relaxed mb-4">{line}</p>
      );
    }

    i++;
  }

  return <>{elements}</>;
}

export default async function TerminalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getTerminalPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            {post.categories.map((cat) => (
              <span
                key={cat}
                className="text-xs px-2 py-1 rounded-full bg-[#4A90D9]/10 text-[#4A90D9]"
              >
                {cat}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-[#94A3B8]">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime} min read</span>
          </div>
          {post.image && (
            <div className="mt-8 rounded-xl overflow-hidden border border-[#1e2a45]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 px-6 bg-[#0A0F1F]">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <MarkdownContent content={post.content} />
          </div>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-[#1e2a45]">
            <Link
              href="/the-terminal"
              className="text-[#4A90D9] hover:text-[#6BA3E0] transition-colors font-medium"
            >
              ← Back to The Terminal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
