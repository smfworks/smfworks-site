import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "SMF Works | AI Solutions for Small Business — Content & Workflow Automation",
  description:
    "SMF Works delivers AI-powered content production and workflow automation for small businesses. Practical, precise, and priced for SMBs. Founded by a Principal AI Solutions Engineer with 30 years of enterprise experience. Serving Pittsboro, NC and beyond.",
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
            AI Solutions for Small Business
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
            SMF Works delivers HighTech-powered content and workflow solutions to small businesses
            that have been priced out of the game. Serious expertise. Genuine craftsmanship.
            No corporate fluff.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#FF6B00] text-white px-8 py-3.5 rounded-lg font-semibold text-center hover:bg-[#e55f00] transition-all shadow-lg shadow-[#FF6B00]/25 hover:shadow-[#FF6B00]/40"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="border border-[#00D4FF]/60 text-[#00D4FF] px-8 py-3.5 rounded-lg font-semibold text-center hover:bg-[#00D4FF] hover:text-[#001F3F] transition-all hover:shadow-lg hover:shadow-[#00D4FF]/20"
            >
              See Our Services
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

      {/* WHAT WE DO — Glassmorphism Cards */}
      <section className="py-20 px-6 bg-[#0A0F1F] relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#E2E8F0]">
            What We Do
          </h2>
          <p className="text-center text-[#94A3B8] max-w-2xl mx-auto mb-14">
            Two service lines. Both built to give small businesses the same advantage
            that enterprise companies have been hoarding.
          </p>

          {/* Glassmorphism container */}
          <div className="bg-[#131B2E]/60 backdrop-blur-md rounded-2xl border border-[#1e2a45]/80 p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service 1 */}
              <div className="bg-[#0A0F1F]/80 backdrop-blur-sm rounded-xl p-8 border border-[#1e2a45] hover:border-[#00D4FF]/40 transition-all group hover:shadow-lg hover:shadow-[#00D4FF]/5">
                <div className="w-12 h-12 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#00D4FF]/20 transition-colors group-hover:shadow-lg group-hover:shadow-[#00D4FF]/20">
                  <span className="text-2xl" aria-hidden="true">✍️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#E2E8F0]">Marketing & SEO/GEO Content Production</h3>
                <p className="text-[#94A3B8] leading-relaxed mb-6">
                  Blog posts, email sequences, social media, white papers, thought leadership,
                  and ghostwriting — all HighTech-powered, all precisely crafted to your brand voice.
                  Optimized for both traditional search (Google/Bing) and AI engines (ChatGPT, Perplexity).
                </p>
                <Link href="/services#content" className="text-[#00D4FF] font-semibold hover:underline inline-flex items-center gap-1">
                  Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>

              {/* Service 2 */}
              <div className="bg-[#0A0F1F]/80 backdrop-blur-sm rounded-xl p-8 border border-[#1e2a45] hover:border-[#FF6B00]/40 transition-all group hover:shadow-lg hover:shadow-[#FF6B00]/5">
                <div className="w-12 h-12 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center mb-4 group-hover:bg-[#FF6B00]/20 transition-colors group-hover:shadow-lg group-hover:shadow-[#FF6B00]/20">
                  <span className="text-2xl" aria-hidden="true">⚙️</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#E2E8F0]">AI Workflow Consulting</h3>
                <p className="text-[#94A3B8] leading-relaxed mb-6">
                  Implementing AI automation for your business operations — whether you&apos;re a
                  trades business or a white-collar firm, we build practical systems that save
                  you time and money.
                </p>
                <Link href="/services#workflow" className="text-[#FF6B00] font-semibold hover:underline inline-flex items-center gap-1">
                  Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER CALLOUT */}
      <section className="bg-[#131B2E] text-[#E2E8F0] py-20 px-6 border-y border-[#1e2a45]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">
              The Founder
            </p>
            <h2 className="text-3xl font-bold mb-5">
              The Engineer. The Forger. The Creator.
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Our founder has spent 30 years in technology — solutioning AI for some of
              the largest organizations in the country the past six years. When he&apos;s not
              doing that, he&apos;s running an actual forge, shaping metal with fire and hammer.
              SMF Works is where those worlds meet: deep expertise and the discipline of a
              craftsman, brought directly to small businesses.
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
            Every week, practical AI insights for small business owners — no hype,
            no jargon, just what you can actually use. Written by an enterprise AI engineer
            who forges metal on weekends.
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
