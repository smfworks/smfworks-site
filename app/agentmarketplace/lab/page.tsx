import { Metadata } from "next";
import { getAllItems } from "@/lib/marketplace/loader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Lab — Agent Marketplace | SMF Works",
  description: "SMF Works testing and experiments on AI hardware, software, applications, and devices.",
};

export default function LabIndexPage() {
  const posts = getAllItems("lab");

  return (
    <div className="min-h-screen bg-forge-navy">
      <section className="relative overflow-hidden border-b border-forge-border">
        <div className="absolute inset-0 bg-[url('/images/blog/agentmarketplace-hero.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-forge-navy/60 via-forge-navy/80 to-forge-navy" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-data-cyan/30 bg-data-cyan/10 px-4 py-1.5 text-sm font-semibold text-data-cyan">SMF Works Experiments</span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-text-primary md:text-6xl">The Lab</h1>
            <p className="mt-5 text-lg text-muted md:text-xl">Real testing on real hardware, software, applications, and devices around AI. No sponsorships, no PR—just notes from the bench.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/agentmarketplace/lab/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-forge-border bg-forge-card p-6 transition-all hover:border-data-cyan hover:shadow-lg hover:shadow-data-cyan/10"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-forge-surface-mid text-lg">🧪</span>
                <span className="rounded-full border border-forge-border px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted">{post.category}</span>
              </div>
              <h2 className="text-xl font-bold text-text-primary group-hover:text-data-cyan transition-colors">{post.title}</h2>
              <p className="mt-3 flex-grow text-sm text-muted">{post.excerpt}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="rounded-full bg-forge-surface-mid px-2 py-1 text-xs text-muted">{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
