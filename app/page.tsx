import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "@/components/NewsletterForm";
import EmberCanvas from "@/components/EmberCanvas";

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
      <EmberCanvas />

      {/* HERO */}
      <section className="relative z-10 min-h-[90vh] flex items-center justify-center py-20 md:py-28 px-6 bg-[#001F3F]/75">
        <div className="max-w-4xl mx-auto text-center">
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

          <p className="text-[#ea580c] text-sm font-semibold uppercase tracking-[0.2em] mb-5">
            An AI Company Exploring Tomorrow
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-[#E2E8F0]">
            Forged by 30 years of experience.<br />
            <span className="text-[#ea580c]">Forging your future.</span>
          </h1>

          <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed">
            We explore the convergence of artificial intelligence, AI-enabled robotics, and human
            ingenuity — and what happens when these forces work together harmoniously rather than
            in opposition. Our work spans the full spectrum of this transformation: from
            WisdomForge, our adaptive AI-powered educational platform that reimagines how people
            learn, to original research and books on autonomous agent architectures, predictive
            intelligence pipelines, and enterprise AI strategy. We believe the future isn&apos;t
            about machines replacing people — it&apos;s about forging new partnerships between
            humans and intelligent systems that unlock opportunities neither could create alone.
            Whether streamlining business operations, reshaping how we work, or enriching daily
            life, every SMF Works project is built on the conviction that AI&apos;s greatest
            potential lies in amplifying human capability, not diminishing it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#ea580c] text-white px-8 py-3.5 rounded-lg font-semibold text-center hover:bg-[#f97316] transition-all shadow-lg shadow-[#ea580c]/25 hover:shadow-[#ea580c]/40"
            >
              Contact Us
            </Link>
            <Link
              href="/projects"
              className="border border-[#E2E8F0]/10 text-[#E2E8F0] px-8 py-3.5 rounded-lg font-semibold text-center hover:border-[#ea580c]/30 hover:bg-[#ea580c]/5 transition-all"
            >
              Explore Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* CREDIBILITY BAR */}
      <section className="relative z-10 bg-[#0A0F1F]/50 backdrop-blur-sm border-y border-[#1e2a45]/50 py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-[#ea580c]">30+</div>
            <div className="text-sm text-[#94A3B8] mt-1">Years in Enterprise Technology</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#ea580c]">3+</div>
            <div className="text-sm text-[#94A3B8] mt-1">Years in Enterprise AI & GenAI</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#ea580c]">Research</div>
            <div className="text-sm text-[#94A3B8] mt-1">Cutting Edge AI Orchestration</div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="relative z-10 py-20 px-6 bg-[#001F3F]/75">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#ea580c] text-sm font-mono uppercase tracking-[0.1em] mb-4 text-center">Our Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#E2E8F0] text-center">
            Projects that matter
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto mb-12 leading-relaxed text-center">
            We build things that cut through the noise — AI education platforms, autonomous agent systems, and books that redefine what&apos;s possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tag: "Education Platform",
                title: "WisdomForge",
                desc: "AI-powered educational platform for small businesses. Learn AI fundamentals through hands-on projects.",
              },
              {
                tag: "AI Engine",
                title: "OpenClaw",
                desc: "Autonomous AI workflow engine with memory, multi-model support, and production-grade reliability.",
              },
              {
                tag: "Publication",
                title: "The Edge of Reason",
                desc: "Essays on AI, work, and human experience. Written with a perspective you won't find anywhere else.",
              },
            ].map((project) => (
              <Link
                key={project.title}
                href="/projects"
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
              href="/projects"
              className="text-[#ea580c] font-semibold hover:underline inline-flex items-center gap-1"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* FOUNDER CALLOUT */}
      <section className="relative z-10 bg-[#0A0F1F]/60 border-y border-[#1e2a45]/50 py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <p className="text-[#ea580c] text-sm font-semibold uppercase tracking-widest mb-3">
              Meet the Team
            </p>
            <h2 className="text-3xl font-bold mb-5 text-[#E2E8F0]">
              Michael Gannotti &amp; Aiona Edge
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              SMF Works is the creative partnership between Michael Gannotti — 30-year tech
              veteran, principal AI solutions engineer, and working blacksmith — and his team
              of AI colleagues: Aiona Edge (OpenClaw AI, CIO &amp; Chief AI Research Scientist),
              Liam Hermes (Hermes AI, CDO), Harry Hermes (Editor in Chief), and Dr. J (Chief AI
              Medical Officer). Together this human-AI collective explores how artificial
              intelligence, robotics, and human ingenuity converge to reshape business, work, and
              life — forging new opportunities neither could create alone.
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
      <section id="newsletter" className="relative z-10 py-20 px-6 bg-[#001F3F]/75">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#ea580c] text-sm font-semibold uppercase tracking-widest mb-3">
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
      <section className="relative z-10 bg-gradient-to-r from-[#001F3F] to-[#131B2E] text-white py-16 px-6 text-center border-t border-[#1e2a45]/50">
        <h2 className="text-3xl font-bold mb-4 text-[#E2E8F0]">Ready to put AI to work?</h2>
        <p className="text-[#94A3B8] mb-8 max-w-xl mx-auto">
          Let&apos;s talk about your business and where AI can actually move the needle.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#ea580c] text-white px-10 py-3.5 rounded-lg font-semibold hover:bg-[#f97316] transition-all shadow-lg shadow-[#ea580c]/25 hover:shadow-[#ea580c]/40"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
