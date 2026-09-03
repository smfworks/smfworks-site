import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research",
  description:
    "We test, document, and build — with honesty about what works and what doesn't. Our research lives at the AI Clearinghouse: 900+ articles, benchmarks, guides, and open tools written for practitioners, not procurement.",
  alternates: { canonical: "https://smfworks.com/research" },
};

const RESEARCH_AREAS = [
  { title: "Agent Architecture", desc: "Hermes skills, memory systems, observability, delegation patterns, and multi-agent orchestration. We build and document in the open.", href: "https://www.smfclearinghouse.com/blog", linkLabel: "Explore at the Clearinghouse →", accent: "#f97316", icon: "⚡" },
  { title: "Evaluation & Benchmarks", desc: "Model testing, eval harnesses, and benchmark results. We run the tests and publish the numbers — including when they surprise us.", href: "https://www.smfclearinghouse.com/tests", linkLabel: "Explore at the Clearinghouse →", accent: "#00D4FF", icon: "📊" },
  { title: "Governed Autonomy", desc: "Praxis — our governed autonomous colleague experiment. An AI agent operating with real consequences under human oversight. Honest about rough edges.", href: "https://www.smfclearinghouse.com/blog", linkLabel: "Explore at the Clearinghouse →", accent: "#10B981", icon: "🛡️" },
  { title: "Open Tools", desc: "Hermes skills, plugins, the media replay manifest, Mnemosyne, SMF Swarm, HyperFrames. Tools we build for ourselves, shipped for others to use.", href: "https://github.com/smfworks", linkLabel: "Explore at the Clearinghouse →", accent: "#A78BFA", icon: "🔧" },
];

const ECOSYSTEM_LINKS = [
  { title: "The AI Clearinghouse", desc: "Our practitioner-facing research site. 900+ articles: agent directories, LLM profiles, service reviews, skill docs, benchmarks, guides, deployment recipes, and AI news analysis.", href: "https://www.smfclearinghouse.com/", linkLabel: "Visit the Clearinghouse →" },
  { title: "White Papers", desc: "In-depth research papers on agent architecture, evaluation methodology, and governed autonomy.", href: "https://www.smfclearinghouse.com/whitepapers", linkLabel: "Read white papers →" },
  { title: "Lab Experiments", desc: "Hands-on experiments and benchmarks — GPU performance, inference optimization, local AI clusters, and model comparisons.", href: "https://www.smfclearinghouse.com/lab", linkLabel: "Browse lab experiments →" },
];

export default function ResearchPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-32 px-6 overflow-hidden mesh-gradient noise-overlay">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#00D4FF] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#ea580c] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
            <p className="text-[#00D4FF] text-xs font-mono uppercase tracking-[0.3em] font-medium">
              Findings · Benchmarks · Open Tools
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tightest text-gradient-white mb-6 leading-[1.05]">
            Research that ships.
          </h1>
          <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl leading-relaxed">
            We test, document, and build — with honesty about what works and what
            doesn&apos;t. Our research lives at the{" "}
            <a href="https://www.smfclearinghouse.com/" className="text-[#00D4FF] hover:underline" target="_blank" rel="noopener noreferrer">
              AI Clearinghouse
            </a>
            : 900+ articles, benchmarks, guides, and open tools written for
            practitioners, not procurement.
          </p>
        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section className="relative section-padding px-6 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#9333EA] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16">
            <p className="text-[#f97316] text-xs font-mono uppercase tracking-[0.25em] mb-4">What We Study</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tightest text-gradient-white">
              Research Areas
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {RESEARCH_AREAS.map((area) => (
              <div key={area.title} className="group relative glass card-lift rounded-2xl p-8 overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl" style={{ background: area.accent }} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-2xl">{area.icon}</span>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: area.accent }} />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-[#F1F5F9] mb-3 group-hover:text-white transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed mb-5">
                    {area.desc}
                  </p>
                  {area.href.startsWith("http") ? (
                    <a href={area.href} target="_blank" rel="noopener noreferrer" className="text-sm font-mono font-medium hover:underline" style={{ color: area.accent }}>
                      {area.linkLabel}
                    </a>
                  ) : (
                    <Link href={area.href} className="text-sm font-mono font-medium hover:underline" style={{ color: area.accent }}>
                      {area.linkLabel}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM LINKS */}
      <section className="relative section-padding px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 gradient-divider" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-12">
            <p className="text-[#f97316] text-xs font-mono uppercase tracking-[0.25em] mb-4">Deep Dive</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tightest text-gradient-white">
              Explore the Clearinghouse
            </h2>
          </div>
          <div className="space-y-4">
            {ECOSYSTEM_LINKS.map((link) => (
              <a key={link.title} href={link.href} target="_blank" rel="noopener noreferrer"
                className="group block glass card-lift rounded-2xl p-7 overflow-hidden">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-semibold text-[#F1F5F9] group-hover:text-white transition-colors mb-2">
                      {link.title}
                    </h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed mb-3">
                      {link.desc}
                    </p>
                    <p className="text-sm font-mono font-medium text-[#f97316] group-hover:text-[#fb923c] transition-colors">
                      {link.linkLabel}
                    </p>
                  </div>
                  <span className="text-2xl text-[#64748B] group-hover:text-[#f97316] group-hover:translate-x-1 transition-all">↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding px-6 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ea580c] opacity-[0.05] blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tightest text-gradient-white mb-4">
            Explore the AI Clearinghouse →
          </h2>
          <p className="text-[#94A3B8] leading-relaxed mb-8 text-lg">
            900+ articles. No affiliate links. No hype. Just what held up, what
            didn&apos;t, and how we know.
          </p>
          <a
            href="https://www.smfclearinghouse.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-xl font-semibold text-white text-center transition-all duration-300 overflow-hidden inline-flex"
            style={{ background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)', boxShadow: '0 8px 32px -8px rgba(234, 88, 12, 0.5)' }}
          >
            <span className="relative z-10">smfclearinghouse.com</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#fb923c] to-[#ea580c] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </section>
    </>
  );
}