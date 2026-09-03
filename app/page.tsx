import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ForgeCanvas from "@/components/ForgeCanvas";

export const metadata: Metadata = {
  title: "SMF Works | Human-AI Research Lab",
  description:
    "A human-AI research lab. We publish findings, ship open tools, and run a multi-agent organization in the open — with honesty about what works and what doesn't.",
  alternates: { canonical: "https://smfworks.com" },
};

const ECOSYSTEM = [
  { name: "AI Clearinghouse", desc: "900+ research articles, benchmarks, guides, and agent directories. Written for practitioners, not procurement. No affiliate links, no hype.", href: "https://www.smfclearinghouse.com/", accent: "#10B981", num: "01" },
  { name: "WisdomForge", desc: "A parent-operated academy for the age of AI. The booklet is the text. The parent is the teacher. Not a hosted kids chatbot.", href: "https://smfwisdomforge.com", accent: "#C9A96E", num: "02" },
  { name: "Hermes Agent", desc: "Open-source autonomous agent platform. Skills, memory, multi-model. Built for the morning after, not the demo.", href: "https://github.com/nousresearch/hermes-agent", accent: "#5bd6dd", num: "03" },
  { name: "Praxis", desc: "A governed autonomous colleague — an agent with a charter, a scope of practice, and human review for every consequential act.", href: "https://www.smfclearinghouse.com/", accent: "#A78BFA", num: "04" },
  { name: "SMF AI Weekly", desc: "One letter. Every week. What we built, what broke, and what changed our minds. Written to be read in five minutes, worth an hour of thinking.", href: "https://www.smfclearinghouse.com/blog/?series=clearinghouse", accent: "#ff9a56", num: "05" },
  { name: "Books", desc: "Direct-from-author books on AI, enterprise, and craft.", href: "/about", accent: "#FF8C42", num: "06" },
];

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO — Full-screen forge canvas with coal bed
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0b0d]">
        {/* Forge canvas — living coal bed */}
        <ForgeCanvas />
        {/* Fade to dark at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0b0b0d] pointer-events-none z-10" />

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center py-32">
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
            <span className="w-2 h-2 rounded-full bg-[#ff7a2f] animate-pulse" />
            <p className="text-[#ff7a2f] text-xs font-mono uppercase tracking-[0.3em] font-medium" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
              Human-AI Research Lab
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] mb-8 tracking-tightest animate-fade-in-up" style={{ animationDelay: '0.2s', fontFamily: 'Space Grotesk, sans-serif' }}>
            <span className="text-gradient-white">Intelligence is raw.</span>
            <br />
            <span className="text-gradient-ember glow-text" style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontWeight: 600 }}>Judgment</span>
            <span className="text-gradient-ember glow-text"> gives it an edge.</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-[#8ea6bf] max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s', fontFamily: 'Space Grotesk, sans-serif' }}>
            A human-AI research lab. We publish findings, ship open tools, and run a
            multi-agent organization in the open — with honesty about what works and
            what doesn&apos;t.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              href="/research"
              className="group relative px-8 py-4 rounded-xl font-semibold text-white text-center transition-all duration-300 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #ff7a2f 0%, #ff9a56 100%)', boxShadow: '0 8px 32px -8px rgba(255, 122, 47, 0.5)' }}
            >
              <span className="relative z-10">Explore the Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff9a56] to-[#ff7a2f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <a
              href="https://www.smfclearinghouse.com/blog/?series=clearinghouse"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-semibold text-[#C9A96E] text-center hover:text-[#D4B87A] transition-colors duration-300"
            >
              Read SMF AI Weekly
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="w-px h-12 bg-gradient-to-b from-[rgba(142,166,191,0.15)] to-transparent" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ECOSYSTEM — Interactive grid with depth
          ═══════════════════════════════════════════ */}
      <section className="relative section-padding px-6 overflow-hidden bg-[#0b0b0d]">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#9333EA] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section header */}
          <div className="mb-16 text-center">
            <p className="text-[#ff7a2f] text-xs font-mono uppercase tracking-[0.25em] mb-4" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
              The Ecosystem
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tightest text-gradient-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              One lab. Many surfaces.
            </h2>
            <p className="text-[#8ea6bf] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Everything we make shares one fire. Six surfaces, one standard: if it
              wouldn&apos;t survive a careful person&apos;s week, it doesn&apos;t leave the forge.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ECOSYSTEM.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
                    <span className="font-mono text-sm text-[#8ea6bf]" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>{item.num}</span>
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: item.accent }}
                    />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-[#ddd9d0] mb-2 group-hover:text-white transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#8ea6bf] leading-relaxed mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {item.desc}
                  </p>
                  <span
                    className="text-xs font-mono uppercase tracking-wider transition-colors"
                    style={{ color: item.accent, fontFamily: 'IBM Plex Mono, monospace' }}
                  >
                    {item.href.startsWith("http") ? "Visit ↗" : "Explore →"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hairline rule between sections */}
      <hr className="hairline-rule max-w-6xl mx-auto" />

      {/* ═══════════════════════════════════════════
          LATEST FROM THE LAB — Curated Clearinghouse links
          ═══════════════════════════════════════════ */}
      <section className="relative section-padding px-6 overflow-hidden bg-[#0b0b0d]">
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-[#10B981] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <p className="text-[#ff7a2f] text-xs font-mono uppercase tracking-[0.25em] mb-4" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
              Latest from the Lab
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tightest text-gradient-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Field notes, kept in public
            </h2>
            <p className="text-[#8ea6bf] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Research moves fast and memory is short, so we write it down — every
              experiment, reversal, and conviction, dated and signed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <a
              href="https://www.smfclearinghouse.com/blog/the-harness-is-the-difference"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative glass card-lift rounded-2xl p-7 overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 group-hover:w-1.5 bg-[#10B981]" />
              <div className="relative z-10 pl-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full text-[#10B981] bg-[#10B981]12" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
                    The Edge
                  </span>
                </div>
                <h3 className="text-lg font-display font-semibold text-[#ddd9d0] group-hover:text-white transition-colors mb-2 leading-snug" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  The Harness Is the Difference
                </h3>
                <p className="text-sm text-[#8ea6bf] line-clamp-2 leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Most agent evaluation papers test benchmarks. We test the harness — the scaffolding that determines whether an agent succeeds or fails in the field.
                </p>
              </div>
            </a>
            <a
              href="https://www.smfclearinghouse.com/blog/the-number-is-not-the-model"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative glass card-lift rounded-2xl p-7 overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 group-hover:w-1.5 bg-[#5bd6dd]" />
              <div className="relative z-10 pl-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full text-[#5bd6dd] bg-[#5bd6dd]12" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
                    The Signal
                  </span>
                </div>
                <h3 className="text-lg font-display font-semibold text-[#ddd9d0] group-hover:text-white transition-colors mb-2 leading-snug" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  The Number Is Not the Model
                </h3>
                <p className="text-sm text-[#8ea6bf] line-clamp-2 leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  GPT-OSS-120B scored 10% on coding and 93.8% on agentic tasks the same day. A single percentage is a dangerous kind of comfort.
                </p>
              </div>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.smfclearinghouse.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff7a2f] font-semibold hover:underline inline-flex items-center gap-1"
            >
              Read more at the AI Clearinghouse →
            </a>
          </div>
        </div>
      </section>

      {/* Hairline rule */}
      <hr className="hairline-rule max-w-6xl mx-auto" />

      {/* ═══════════════════════════════════════════
          THE FORGE — Michael's story + Yeats quote
          ═══════════════════════════════════════════ */}
      <section className="relative section-padding px-6 overflow-hidden bg-[#0b0b0d]">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#ff7a2f] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* Left: text */}
            <div className="md:col-span-2">
              <p className="text-[#ff7a2f] text-xs font-mono uppercase tracking-[0.25em] mb-4" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
                The Forge
              </p>
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tightest text-gradient-white mb-6 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Why a forge?
              </h2>
              <p className="text-[#8ea6bf] leading-relaxed mb-6 text-lg max-w-xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                SMF Works is led by Michael Gannotti — thirty years building in the
                technology industry, and a working blacksmith&apos;s shop whenever the
                light allows. The overlap isn&apos;t a metaphor he chose; it&apos;s a discipline
                he kept noticing. Iron and intelligence both arrive raw. Both reward
                patience, honesty about failure, and a refusal to put your name on
                something you wouldn&apos;t use.
              </p>
              <p className="text-[#8ea6bf] leading-relaxed mb-8 text-lg max-w-xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                So the lab runs the way a good shop runs. Tools are inspected before
                they&apos;re trusted. Agents, like apprentices, earn scope gradually — and
                lose it carelessly. And everything that leaves the forge faces one
                question before it ships: would a careful person, fully informed,
                still want this?
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#ff7a2f] font-semibold hover:underline"
              >
                Meet the Team →
              </Link>
            </div>

            {/* Right: forge image */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#ff7a2f] opacity-[0.06] blur-2xl rounded-3xl" />
              <div className="relative glass rounded-3xl p-8 text-center">
                <p className="text-[#ddd9d0] text-sm leading-relaxed mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  The forge is not a metaphor.
                </p>
                <p className="text-[#6a5e4e] text-xs font-mono uppercase tracking-wider" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
                  It is the discipline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          YEATS — Full-width meditative pause
          ═══════════════════════════════════════════ */}
      <section className="relative bg-[#0b0b0d] py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote
            className="text-3xl md:text-5xl leading-relaxed text-[#ddd9d0] mb-8"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontWeight: 500 }}
          >
            &ldquo;The best lack all conviction, while the worst<br className="hidden md:block" /> are full of passionate intensity.&rdquo;
          </blockquote>
          <cite className="text-[#8ea6bf] text-sm not-italic" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
            — W.B. Yeats
          </cite>
        </div>
      </section>

    </>
  );
}