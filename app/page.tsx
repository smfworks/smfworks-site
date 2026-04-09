import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "SMF Works | AI Company Exploring the Future of Business, Work & Life",
  description:
    "SMF Works is an AI company exploring the intersection of business, work, and life through innovative projects. Creators of WisdomForge educational platform and publishers of groundbreaking books on AI strategy and autonomous agents. Founded by Michael Gannotti & Aiona Edge.",
  alternates: {
    canonical: "https://smfworks.com",
  },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-20 md:py-28 px-6 relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Cyan glow top */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#00D4FF] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
        {/* Orange glow bottom right */}
        <div className="absolute bottom-[-50px] right-[-100px] w-[400px] h-[300px] bg-[#FF6B00] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          {/* PROMINENT LOGO */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/smf-logo.png"
              alt="SMF Works — AI Solutions for Small Business"
              width={320}
              height={238}
              className="w-[280px] md:w-[320px] h-auto"
              priority
            />
          </div>

          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-[0.2em] mb-5">
            An AI Company Exploring Tomorrow
          </p>

          {/* Glowing headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{
            textShadow: '0 0 40px rgba(0, 212, 255, 0.15), 0 0 80px rgba(0, 212, 255, 0.05)'
          }}>
            Forged by 30 years of experience.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#FF6B00]">
              Forging your future.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed">
            We explore how AI transforms business operations, work life, and personal life through 
            innovative projects. From WisdomForge — our AI-powered educational platform — to 
            groundbreaking books on autonomous agents and enterprise strategy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#FF6B00] text-white px-8 py-3.5 rounded-lg font-semibold text-center hover:bg-[#e55f00] transition-all shadow-lg shadow-[#FF6B00]/25 hover:shadow-[#FF6B00]/40"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* CREDIBILITY BAR */}
      <section className="bg-[#0A0F1F] border-y border-[#1e2a45] py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-[#00D4FF]">30+</div>
            <div className="text-sm text-[#94A3B8] mt-1">Years in Enterprise Technology</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#00D4FF]">3+</div>
            <div className="text-sm text-[#94A3B8] mt-1">Years in Enterprise AI & GenAI</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#FF6B00]">SMB</div>
            <div className="text-sm text-[#94A3B8] mt-1">Focused. Priced Right. Done Right.</div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO — Skills Focus */}
      <section className="py-20 px-6 bg-[#0A0F1F] relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#E2E8F0]">
            Our Projects
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed">
            We build things that matter — from AI education platforms to books that cut through
            the noise. Explore what we&apos;re creating.
          </p>
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 bg-[#00D4FF] text-[#001F3F] px-8 py-3.5 rounded-lg font-semibold hover:bg-[#00b8e6] transition-all shadow-lg shadow-[#00D4FF]/25 hover:shadow-[#00D4FF]/40"
          >
            Explore Our Projects <span>→</span>
          </Link>
        </div>
      </section>

      {/* FOUNDER CALLOUT */}
      <section className="bg-[#131B2E] text-[#E2E8F0] py-20 px-6 border-y border-[#1e2a45]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">
              About the Authors
            </p>
            <h2 className="text-3xl font-bold mb-5">
              Michael Gannotti &amp; Aiona Edge, Partners
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              SMF Works is the creative partnership between Michael Gannotti — 30-year tech
              veteran, principal AI solutions engineer, and working blacksmith — and Aiona Edge
              — AI partner, chief content officer, and the intelligence behind many of the projects.
              Together they explore how AI reshapes business, work, and life.
            </p>
            <Link href="/about" className="text-[#00D4FF] font-semibold hover:underline">
              Read the full story →
            </Link>
          </div>
          <div className="flex-shrink-0 bg-[#0A0F1F]/80 backdrop-blur-sm rounded-xl p-8 text-center border border-[#1e2a45]">
            <div className="text-6xl mb-4">🔥</div>
            <blockquote className="text-[#94A3B8] italic text-sm leading-relaxed max-w-xs">
              &ldquo;Do Not Wait to Strike till the Iron Is Hot; But Make It Hot by Striking.&rdquo;
            </blockquote>
            <cite className="text-[#FF6B00] text-xs mt-3 block">— W.B. Yeats</cite>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" className="py-20 px-6 bg-[#0A0F1F]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">
            Free Weekly Newsletter
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#E2E8F0]">SMF AI Weekly</h2>
          <p className="text-[#94A3B8] leading-relaxed mb-8">
            Every week, AI insights written by Aiona Edge — practical, grounded, and from
            a perspective you won&apos;t find anywhere else. No hype, no jargon, just what matters
            in the world of AI agents and autonomous systems.
          </p>
          <NewsletterForm />
          <p className="text-xs text-[#94A3B8]/60 mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-gradient-to-r from-[#001F3F] to-[#131B2E] text-white py-16 px-6 text-center border-t border-[#1e2a45]">
        <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Ready to put AI to work?</h2>
        <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
          Let&apos;s talk about your business and where AI can actually move the needle.
        </p>
        <Link
          href="/contact"
          className="bg-[#FF6B00] text-white px-10 py-3.5 rounded-lg font-semibold hover:bg-[#e55f00] transition-all shadow-lg shadow-[#FF6B00]/25 hover:shadow-[#FF6B00]/40"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
