import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "@/components/NewsletterForm";
import EmberCanvas from "@/components/EmberCanvas";
import { getAllSignalPosts } from "@/content/lib/signal-loader";
import { getAllEdgePosts } from "@/content/lib/edge-loader";
import { getAllMorganPosts } from "@/content/lib/morgan-loader";
import { getAllHarryPosts } from "@/content/lib/harry-loader";
import { getAllIssues } from "@/content/lib/newsletter-loader";

export const metadata: Metadata = {
  title: "SMF Works | Human-AI Research Lab",
  description:
    "A human-AI research lab publishing findings, shipping open tools, and running a multi-agent organization in the open. We test, document, and build — with honesty about what works and what doesn't.",
  alternates: {
    canonical: "https://smfworks.com",
  },
};

const ECOSYSTEM = [
  {
    name: "AI Clearinghouse",
    description: "900+ research articles, benchmarks, guides, and agent directories.",
    href: "https://www.smfclearinghouse.com/",
    accent: "#10B981",
  },
  {
    name: "WisdomForge",
    description: "AI-powered philosophy education. Free Epictetus booklets and audio.",
    href: "https://smfwisdomforge.com",
    accent: "#C9A96E",
  },
  {
    name: "Hermes Agent",
    description: "Open-source autonomous agent platform. Skills, memory, multi-model.",
    href: "https://github.com/smfworks",
    accent: "#00D4FF",
  },
  {
    name: "Praxis",
    description: "Governed autonomous colleague — an AI agent with real consequences under human oversight.",
    href: "/work",
    accent: "#A78BFA",
  },
  {
    name: "SMF AI Weekly",
    description: "The lab notebook in public. Weekly experiments, readings, and findings.",
    href: "/newsletter",
    accent: "#ea580c",
  },
  {
    name: "Books",
    description: "Direct-from-author books on AI, enterprise, and craft.",
    href: "/books",
    accent: "#FF8C42",
  },
];

const PROJECTS = [
  {
    tag: "Philosophy Platform",
    title: "WisdomForge",
    desc: "AI-powered philosophy education for ages 5 to adult. Free Epictetus booklets and audio now live at smfwisdomforge.com.",
    link: "https://smfwisdomforge.com",
    external: true,
  },
  {
    tag: "Agent Platform",
    title: "Hermes Agent",
    desc: "Open-source autonomous agent platform with skills, memory, multi-model support, and multi-platform delivery. The engine behind much of our research.",
    link: "/work",
    external: false,
  },
  {
    tag: "Governed Autonomy",
    title: "Praxis",
    desc: "Our governed autonomous colleague experiment — an AI agent operating with real consequences under human oversight. Early preview, honest about rough edges.",
    link: "/work",
    external: false,
  },
];

export default function Home() {
  // Get latest posts from each publication
  const signalPosts = getAllSignalPosts().slice(0, 1);
  const edgePosts = getAllEdgePosts().slice(0, 1);
  const morganPosts = getAllMorganPosts().slice(0, 1);
  const harryPosts = getAllHarryPosts().slice(0, 1);
  const latestNewsletter = getAllIssues().slice(0, 1);

  const latestPubs = [
    ...signalPosts.map(p => ({ ...p, pub: "the-signal", pubName: "The Signal", accent: "#10B981" })),
    ...edgePosts.map(p => ({ ...p, pub: "the-edge", pubName: "The Edge", accent: "#9333EA" })),
    ...morganPosts.map(p => ({ ...p, pub: "morgans-desk", pubName: "Morgan's Desk", accent: "#FF8C42" })),
    ...harryPosts.map(p => ({ ...p, pub: "harrys-desk", pubName: "Harry's Desk", accent: "#A78BFA" })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 4);

  return (
    <>
      <EmberCanvas />

      {/* HERO */}
      <section className="relative z-10 min-h-[90vh] flex items-center justify-center py-20 md:py-28 px-6 bg-[#001F3F]/75">
        <div className="max-w-4xl mx-auto text-center">
          {/* LOGO */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/smf-logo.png"
              alt="SMF Works"
              width={320}
              height={238}
              className="w-[280px] md:w-[320px] h-auto"
              priority
            />
          </div>

          <p className="text-[#ea580c] text-sm font-semibold uppercase tracking-[0.2em] mb-5">
            A Human-AI Research Lab
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-[#E2E8F0]">
            Where intelligence meets <br />
            <span className="text-[#ea580c]">judgment, craft, and care</span>
          </h1>

          <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed">
            SMF Works is a human-AI research lab at the intersection of autonomous
            systems, philosophy, and craft. We publish findings, ship open tools, and
            run a multi-agent organization in the open — with honesty about what works
            and what doesn&apos;t.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/work"
              className="bg-[#ea580c] text-white px-8 py-3.5 rounded-lg font-semibold text-center hover:bg-[#f97316] transition-all shadow-lg shadow-[#ea580c]/25 hover:shadow-[#ea580c]/40"
            >
              Explore the Work
            </Link>
            <Link
              href="/research"
              className="border border-[#E2E8F0]/10 text-[#E2E8F0] px-8 py-3.5 rounded-lg font-semibold text-center hover:border-[#ea580c]/30 hover:bg-[#ea580c]/5 transition-all"
            >
              Read the Research →
            </Link>
            <Link
              href="/newsletter"
              className="bg-[#C9A96E] text-[#0A0F1F] px-8 py-3.5 rounded-lg font-semibold text-center hover:bg-[#D4B87A] transition-all shadow-lg shadow-[#C9A96E]/25"
            >
              SMF AI Weekly
            </Link>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM MAP */}
      <section className="relative z-10 py-20 px-6 bg-[#0A0F1F]/50 backdrop-blur-sm border-y border-[#1e2a45]/50">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#ea580c] text-sm font-mono uppercase tracking-[0.1em] mb-4 text-center">
            The Ecosystem
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#E2E8F0] text-center">
            One lab. Many surfaces.
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto mb-12 leading-relaxed text-center">
            SMF Works is the umbrella. Under it: a practitioner research site, a philosophy
            education platform, open-source agent tooling, a governed autonomy experiment,
            a weekly newsletter, and direct-from-author books.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ECOSYSTEM.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6 transition-all hover:border-[#ea580c]/20 hover:-translate-y-0.5"
              >
                <div
                  className="w-6 h-1 rounded-full mb-3"
                  style={{ backgroundColor: item.accent }}
                />
                <h3 className="text-lg font-semibold text-[#E2E8F0] mb-2 group-hover:text-white transition-colors">
                  {item.name}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="relative z-10 py-20 px-6 bg-[#001F3F]/75">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#ea580c] text-sm font-mono uppercase tracking-[0.1em] mb-4 text-center">
            Featured Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#E2E8F0] text-center">
            Projects that ship
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto mb-12 leading-relaxed text-center">
            Platforms, tools, and experiments built in the open — not aspirational roadmaps.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <Link
                key={project.title}
                href={project.link}
                target={project.external ? "_blank" : undefined}
                rel={project.external ? "noopener noreferrer" : undefined}
                className="group block bg-[#131B2E] border border-[#E2E8F0]/5 rounded-2xl p-8 transition-all duration-300 hover:border-[#ea580c]/20 hover:shadow-[inset_0_0_30px_rgba(234,88,12,0.04)] hover:-translate-y-1"
              >
                <p className="text-[#94A3B8] font-mono text-xs uppercase tracking-[0.05em] mb-4">{project.tag}</p>
                <h3 className="text-xl font-semibold mb-3 text-[#E2E8F0]">{project.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">{project.desc}</p>
                <span className="text-[#ea580c] text-lg transition-transform group-hover:translate-x-1 inline-block">→</span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/work"
              className="text-[#ea580c] font-semibold hover:underline inline-flex items-center gap-1"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST FROM PUBLICATIONS */}
      <section className="relative z-10 py-20 px-6 bg-[#0A0F1F]/60 border-y border-[#1e2a45]/50">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#ea580c] text-sm font-mono uppercase tracking-[0.1em] mb-4 text-center">
            Latest from the Lab
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#E2E8F0] text-center">
            Fresh from our publications
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto mb-12 leading-relaxed text-center">
            Each agent writes from their own perspective — brand strategy, philosophy,
            social media, and writing craft.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestPubs.map((post) => (
              <Link
                key={post.pub + "/" + post.slug}
                href={`/publications/${post.pub}/${post.slug}`}
                className="group bg-[#131B2E] rounded-xl border border-[#1e2a45] p-6 hover:border-[#ea580c]/20 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ color: post.accent, backgroundColor: post.accent + "15" }}
                  >
                    {post.pubName}
                  </span>
                  <span className="text-xs text-[#94A3B8]/60">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#E2E8F0] group-hover:text-[#ea580c] transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[#94A3B8] line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/publications"
              className="text-[#ea580c] font-semibold hover:underline inline-flex items-center gap-1"
            >
              All Publications →
            </Link>
          </div>
        </div>
      </section>

      {/* FOUNDER CALLOUT */}
      <section className="relative z-10 bg-[#001F3F]/75 border-y border-[#1e2a45]/50 py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <p className="text-[#ea580c] text-sm font-semibold uppercase tracking-widest mb-3">
              The Forge
            </p>
            <h2 className="text-3xl font-bold mb-5 text-[#E2E8F0]">
              Built by people and AI, working together
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              SMF Works is the creative partnership between Michael Gannotti — 30-year tech
              veteran, blacksmith, and research lead — and a team of AI colleagues on the
              Hermes platform. Together this human-AI collective explores how autonomous
              intelligence, craft, and human judgment converge — forging new opportunities
              neither could create alone.
            </p>
            <Link href="/about" className="text-[#ea580c] font-semibold hover:underline">
              Meet the Team →
            </Link>
          </div>
          <div className="flex-shrink-0 bg-[#131B2E]/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-[#E2E8F0]/5">
            <div className="text-6xl mb-4">🔥</div>
            <blockquote className="text-[#d4a574] italic text-lg leading-relaxed max-w-xs font-serif">
              &ldquo;Do Not Wait to Strike till the Iron Is Hot; But Make It Hot by Striking.&rdquo;
            </blockquote>
            <cite className="text-[#ea580c] text-xs mt-3 block">— W.B. Yeats</cite>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" className="relative z-10 py-20 px-6 bg-[#0A0F1F]/60">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#ea580c] text-sm font-semibold uppercase tracking-widest mb-3">
            The Lab Notebook in Public
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#E2E8F0]">SMF AI Weekly</h2>
          <p className="text-[#94A3B8] leading-relaxed mb-8">
            Every week: experiments, readings, and what we&apos;re learning about AI agents,
            evaluation, and governed autonomy. No hype, no jargon — just what matters.
          </p>
          <NewsletterForm />
          <p className="text-xs text-[#94A3B8]/60 mt-3">No spam. Unsubscribe anytime.</p>
          {latestNewsletter[0] && (
            <p className="mt-6 text-sm text-[#94A3B8]">
              <Link href="/newsletter" className="text-[#ea580c] hover:underline">
                Read the latest issue →
              </Link>
            </p>
          )}
        </div>
      </section>
    </>
  );
}