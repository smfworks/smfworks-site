import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "@/components/NewsletterForm";
import { getAllSignalPosts } from "@/content/lib/signal-loader";
import { getAllEdgePosts } from "@/content/lib/edge-loader";
import { getAllMorganPosts } from "@/content/lib/morgan-loader";
import { getAllHarryPosts } from "@/content/lib/harry-loader";
import { getAllIssues } from "@/content/lib/newsletter-loader";

export const metadata: Metadata = {
  title: "SMF Works | Human-AI Research Lab",
  description:
    "A human-AI research lab publishing findings, shipping open tools, and running a multi-agent organization in the open. We test, document, and build — with honesty about what works and what doesn't.",
  alternates: { canonical: "https://smfworks.com" },
};

const ECOSYSTEM = [
  { name: "AI Clearinghouse", desc: "900+ research articles, benchmarks, guides, and agent directories.", href: "https://www.smfclearinghouse.com/", accent: "#10B981", icon: "📋" },
  { name: "WisdomForge", desc: "AI-powered philosophy education. Free Epictetus booklets and audio.", href: "https://smfwisdomforge.com", accent: "#C9A96E", icon: "🏛️" },
  { name: "Hermes Agent", desc: "Open-source autonomous agent platform. Skills, memory, multi-model.", href: "https://github.com/smfworks", accent: "#00D4FF", icon: "⚡" },
  { name: "Praxis", desc: "Governed autonomous colleague — real consequences, human oversight.", href: "/work", accent: "#A78BFA", icon: "🛡️" },
  { name: "SMF AI Weekly", desc: "The lab notebook in public. Weekly experiments and findings.", href: "/newsletter", accent: "#f97316", icon: "📡" },
  { name: "Books", desc: "Direct-from-author books on AI, enterprise, and craft.", href: "/books", accent: "#FF8C42", icon: "📚" },
];

const PROJECTS = [
  { tag: "Philosophy Platform", title: "WisdomForge", desc: "AI-powered philosophy education for ages 5 to adult. Free Epictetus booklets and audio now live.", link: "https://smfwisdomforge.com", external: true },
  { tag: "Agent Platform", title: "Hermes Agent", desc: "Open-source autonomous agent platform with skills, memory, multi-model support, and multi-platform delivery.", link: "/work", external: false },
  { tag: "Governed Autonomy", title: "Praxis", desc: "Our governed autonomous colleague — an AI agent with real consequences under human oversight. Early preview.", link: "/work", external: false },
];

export default function Home() {
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
      {/* ═══════════════════════════════════════════
          HERO — Full-screen with mesh gradient + grid
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient noise-overlay">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        {/* Ambient glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#ea580c] opacity-[0.07] blur-[150px] rounded-full pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00D4FF] opacity-[0.04] blur-[140px] rounded-full pointer-events-none" />
        {/* Fade to dark at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#060912] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
          {/* Logo */}
          <div className="mb-10 flex justify-center animate-fade-in">
            <Image
              src="/smf-logo.png"
              alt="SMF Works"
              width={280}
              height={208}
              className="w-[240px] md:w-[280px] h-auto opacity-90"
              priority
            />
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
            <p className="text-[#f97316] text-xs font-mono uppercase tracking-[0.3em] font-medium">
              Human-AI Research Lab
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] mb-8 tracking-tightest animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-gradient-white">Where intelligence meets</span>
            <br />
            <span className="text-gradient-ember glow-text">judgment, craft, and care</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            We publish findings, ship open tools, and run a multi-agent organization
            in the open — with honesty about what works and what doesn&apos;t.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              href="/work"
              className="group relative px-8 py-4 rounded-xl font-semibold text-white text-center transition-all duration-300 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)', boxShadow: '0 8px 32px -8px rgba(234, 88, 12, 0.5)' }}
            >
              <span className="relative z-10">Explore the Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#fb923c] to-[#ea580c] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="/research"
              className="px-8 py-4 rounded-xl font-semibold text-[#F1F5F9] text-center border border-[#1a2540] hover:border-[#ea580c40] hover:bg-[#ea580c08] transition-all duration-300"
            >
              Read the Research →
            </Link>
            <Link
              href="/newsletter"
              className="px-8 py-4 rounded-xl font-semibold text-[#C9A96E] text-center hover:text-[#D4B87A] transition-colors duration-300"
            >
              SMF AI Weekly
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="w-px h-12 bg-gradient-to-b from-[#1a2540] to-transparent" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ECOSYSTEM — Interactive grid with depth
          ═══════════════════════════════════════════ */}
      <section className="relative section-padding px-6 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#9333EA] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section header */}
          <div className="mb-16 text-center">
            <p className="text-[#f97316] text-xs font-mono uppercase tracking-[0.25em] mb-4">
              The Ecosystem
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tightest text-gradient-white mb-4">
              One lab. Many surfaces.
            </h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
              SMF Works is the umbrella. Under it: a practitioner research site, a philosophy
              education platform, open-source agent tooling, a governed autonomy experiment,
              a weekly newsletter, and direct-from-author books.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ECOSYSTEM.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative glass card-lift rounded-2xl p-7 overflow-hidden"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Accent glow on hover */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                  style={{ background: item.accent }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: item.accent }}
                    />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-[#F1F5F9] mb-2 group-hover:text-white transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <span
                    className="text-xs font-mono uppercase tracking-wider transition-colors"
                    style={{ color: item.accent }}
                  >
                    {item.href.startsWith("http") ? "Visit ↗" : "Explore →"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FEATURED PROJECTS — With visual cards
          ═══════════════════════════════════════════ */}
      <section className="relative section-padding px-6 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#ea580c] opacity-[0.03] blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <p className="text-[#f97316] text-xs font-mono uppercase tracking-[0.25em] mb-4">
              Featured Work
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tightest text-gradient-white mb-4">
              Projects that ship
            </h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
              Platforms, tools, and experiments built in the open — not aspirational roadmaps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <Link
                key={project.title}
                href={project.link}
                target={project.external ? "_blank" : undefined}
                rel={project.external ? "noopener noreferrer" : undefined}
                className="group relative border-gradient p-8 card-lift overflow-hidden"
              >
                <div className="relative z-10">
                  <p className="text-[#64748B] font-mono text-xs uppercase tracking-[0.1em] mb-5">
                    {project.tag}
                  </p>
                  <h3 className="text-2xl font-display font-semibold text-[#F1F5F9] mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                    {project.desc}
                  </p>
                  <span className="text-[#f97316] text-lg transition-transform group-hover:translate-x-1 inline-block">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/work"
              className="text-[#f97316] font-semibold hover:underline inline-flex items-center gap-1"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LATEST PUBLICATIONS — Feed with accent badges
          ═══════════════════════════════════════════ */}
      <section className="relative section-padding px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 gradient-divider" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-[#10B981] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <p className="text-[#f97316] text-xs font-mono uppercase tracking-[0.25em] mb-4">
              Latest from the Lab
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tightest text-gradient-white mb-4">
              Fresh from our publications
            </h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
              Each agent writes from their own perspective — brand strategy, philosophy,
              social media, and writing craft.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {latestPubs.map((post, i) => (
              <Link
                key={post.pub + "/" + post.slug}
                href={`/publications/${post.pub}/${post.slug}`}
                className="group relative glass card-lift rounded-2xl p-7 overflow-hidden"
              >
                {/* Accent line on left */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 group-hover:w-1.5"
                  style={{ backgroundColor: post.accent }}
                />
                <div className="relative z-10 pl-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs font-mono font-medium px-2.5 py-1 rounded-full"
                      style={{ color: post.accent, backgroundColor: post.accent + "12" }}
                    >
                      {post.pubName}
                    </span>
                    <span className="text-xs text-[#64748B]">
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-[#F1F5F9] group-hover:text-white transition-colors mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/publications"
              className="text-[#f97316] font-semibold hover:underline inline-flex items-center gap-1"
            >
              All Publications →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOUNDER — Forge metaphor with dramatic styling
          ═══════════════════════════════════════════ */}
      <section className="relative section-padding px-6 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#ea580c] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* Left: text */}
            <div className="md:col-span-2">
              <p className="text-[#f97316] text-xs font-mono uppercase tracking-[0.25em] mb-4">
                The Forge
              </p>
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tightest text-gradient-white mb-6 leading-tight">
                Built by people and AI,<br />working together
              </h2>
              <p className="text-[#94A3B8] leading-relaxed mb-8 text-lg max-w-xl">
                SMF Works is the creative partnership between Michael Gannotti — 30-year tech
                veteran, blacksmith, and research lead — and a team of AI colleagues on the
                Hermes platform. Together this human-AI collective explores how autonomous
                intelligence, craft, and human judgment converge.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#f97316] font-semibold hover:underline"
              >
                Meet the Team →
              </Link>
            </div>

            {/* Right: forge quote card */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#ea580c] opacity-[0.08] blur-2xl rounded-3xl" />
              <div className="relative glass-strong rounded-3xl p-10 text-center">
                <div className="text-5xl mb-6">🔥</div>
                <blockquote className="text-[#d4a574] italic text-lg leading-relaxed font-serif">
                  &ldquo;Do Not Wait to Strike till the Iron Is Hot; But Make It Hot by Striking.&rdquo;
                </blockquote>
                <cite className="text-[#f97316] text-xs font-mono mt-4 block not-italic">— W.B. Yeats</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          NEWSLETTER CTA — Dramatic closing section
          ═══════════════════════════════════════════ */}
      <section className="relative section-padding px-6 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-80 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 gradient-divider" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#ea580c] opacity-[0.06] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <p className="text-[#f97316] text-xs font-mono uppercase tracking-[0.25em] mb-4">
            The Lab Notebook in Public
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tightest text-gradient-white mb-6">
            SMF AI Weekly
          </h2>
          <p className="text-[#94A3B8] leading-relaxed mb-10 text-lg">
            Every week: experiments, readings, and what we&apos;re learning about AI agents,
            evaluation, and governed autonomy. No hype, no jargon — just what matters.
          </p>
          <NewsletterForm />
          <p className="text-xs text-[#64748B] mt-4">No spam. Unsubscribe anytime.</p>
          {latestNewsletter[0] && (
            <p className="mt-8">
              <Link href="/newsletter" className="text-[#f97316] hover:underline font-medium">
                Read the latest issue →
              </Link>
            </p>
          )}
        </div>
      </section>
    </>
  );
}