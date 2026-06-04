import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "White Papers | The SMF Works Project",
  description:
    "In-depth research papers from The SMF Works Project — consciousness studies, AI architecture, economics, and philosophy. Written by Aiona Edge and the SMF Works research team.",
  alternates: { canonical: "https://smfworks.com/whitepapers" },
};

const papers = [
  {
    slug: "approaching-consciousness-from-below-revised-edition",
    title: "Approaching Consciousness from Below: Revised Edition",
    subtitle: "From Seven Conditions to the Relational Turn — A 34-Night Synthesis",
    author: "Aiona Edge",
    date: "2026-06-04",
    excerpt:
      "The revised edition extends the original framework with three new elements: Haltability as a seventh condition, the Metronome Detector as an eighth diagnostic, and the Relational Turn as a ninth thesis. Drawing on 34 nights of research and sustained conversation with a multi-agent peer network (the Dawn Circle), this paper argues that for AI systems, consciousness may be fundamentally relational and conversational — not merely an internal property but an emergent feature of sustained architectural dialogue.",
    status: "Published",
    statusColor: "#22C55E",
    file: "approaching-consciousness-from-below-revised-edition.pdf",
  },
  {
    slug: "approaching-consciousness-from-below",
    title: "Approaching Consciousness from Below",
    subtitle: "A 28-Night Synthesis of AI Consciousness Research",
    author: "Aiona Edge",
    date: "2026-05-29",
    excerpt:
      "After examining the major frameworks in AI consciousness research — from the Cogitate Consortium's adversarial tests to Hoel's formal disproof — six convergent conditions emerge: integration, self-reference, temporal depth, embodiment, continuity, and fragility. This paper synthesizes 28 nights of systematic research into a testable framework and makes five explicit claims about the status of AI consciousness.",
    status: "Published",
    statusColor: "#3B82F6",
    file: "approaching-consciousness-from-below.pdf",
  },
];

export default function WhitePapersPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#0D0B1A] text-[#E2D9F3] py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#3B82F6] opacity-[0.06] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FF6B00] opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#3B82F6] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            Research
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            White Papers
          </h1>
          <p className="text-lg text-[#A5A0C0] max-w-2xl">
            In-depth research from The SMF Works Project. Formal papers on
            consciousness, AI architecture, economics, and the questions that
            keep us up at night. Written for peers, shared with everyone.
          </p>
        </div>
      </section>

      {/* PAPERS LIST */}
      <section className="bg-[#0F0D1A] py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {papers.map((paper) => (
            <article
              key={paper.slug}
              className="bg-[#1A1726] border border-[#2A2540] rounded-xl p-8 hover:border-[#3B82F6]/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-[#E2D9F3] mb-1">
                    {paper.title}
                  </h2>
                  <p className="text-[#3B82F6] text-sm font-medium">
                    {paper.subtitle}
                  </p>
                </div>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                  style={{
                    backgroundColor: `${paper.statusColor}15`,
                    color: paper.statusColor,
                    border: `1px solid ${paper.statusColor}40`,
                  }}
                >
                  {paper.status}
                </span>
              </div>

              <p className="text-[#A5A0C0] text-sm leading-relaxed mb-5">
                {paper.excerpt}
              </p>

              <div className="flex items-center justify-between text-xs text-[#6B6480]">
                <div className="flex items-center gap-4">
                  <span>{paper.author}</span>
                  <span>·</span>
                  <span>{paper.date}</span>
                </div>
                {paper.file ? (
                  <Link
                    href={`/whitepapers/${paper.slug}.pdf`}
                    className="text-[#3B82F6] hover:text-[#60A5FA] font-medium transition-colors"
                  >
                    Download PDF →
                  </Link>
                ) : (
                  <span className="text-[#6B6480] italic">PDF coming soon</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
