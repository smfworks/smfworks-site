import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research, findings, and open tools from the SMF Works lab. Benchmarks, agent architecture deep dives, white papers, and open-source experiments — published at the Clearinghouse.",
  alternates: { canonical: "https://smfworks.com/research" },
};

const RESEARCH_AREAS = [
  {
    title: "Agent Architecture",
    description:
      "Hermes skills, memory systems, observability, delegation patterns, and multi-agent orchestration. We build and document in the open.",
    href: "https://www.smfclearinghouse.com/blog",
    linkLabel: "Read architecture deep dives →",
    accent: "#ea580c",
  },
  {
    title: "Evaluation & Benchmarks",
    description:
      "Model testing, eval harnesses, and benchmark results. We run the tests and publish the numbers — including when they surprise us.",
    href: "https://www.smfclearinghouse.com/tests",
    linkLabel: "See benchmark results →",
    accent: "#00D4FF",
  },
  {
    title: "Governed Autonomy",
    description:
      "Praxis — our governed autonomous colleague experiment. An AI agent operating with real consequences under human oversight. Early preview, honest about rough edges.",
    href: "/work",
    linkLabel: "Learn about Praxis →",
    accent: "#10B981",
  },
  {
    title: "Open Tools",
    description:
      "Hermes skills, plugins, the media replay manifest, Mnemosyne, SMF Swarm, HyperFrames. Tools we build for ourselves, shipped for others to use.",
    href: "https://github.com/smfworks",
    linkLabel: "Browse on GitHub →",
    accent: "#A78BFA",
  },
];

const ECOSYSTEM_LINKS = [
  {
    title: "The AI Clearinghouse",
    description:
      "Our practitioner-facing research site. 900+ articles: agent directories, LLM profiles, service reviews, skill docs, benchmarks, guides, deployment recipes, and AI news analysis.",
    href: "https://www.smfclearinghouse.com/",
    linkLabel: "Visit the Clearinghouse →",
  },
  {
    title: "White Papers",
    description:
      "In-depth research papers on agent architecture, evaluation methodology, and governed autonomy.",
    href: "https://www.smfclearinghouse.com/whitepapers",
    linkLabel: "Read white papers →",
  },
  {
    title: "Lab Experiments",
    description:
      "Hands-on experiments and benchmarks — GPU performance, inference optimization, local AI clusters, and model comparisons.",
    href: "https://www.smfclearinghouse.com/lab",
    linkLabel: "Browse lab experiments →",
  },
];

export default function ResearchPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-[#0A0F1F] text-[#E2E8F0] py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#00D4FF] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#ea580c] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            Findings, Benchmarks, Open Tools
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Research
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl leading-relaxed">
            We test, document, and build — with honesty about what works and what
            doesn&apos;t. Our research lives at the{" "}
            <a
              href="https://www.smfclearinghouse.com/"
              className="text-[#00D4FF] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              AI Clearinghouse
            </a>
            , our practitioner-facing research site with 900+ articles, benchmarks,
            guides, and open tools.
          </p>
        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section className="py-16 px-6 bg-[#0A0F1F]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-8">Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESEARCH_AREAS.map((area) => (
              <div
                key={area.title}
                className="bg-[#131B2E] rounded-xl border border-[#1e2a45] p-8 hover:border-[#1e2a45]/80 transition-all"
              >
                <div
                  className="w-8 h-1 rounded-full mb-4"
                  style={{ backgroundColor: area.accent }}
                />
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-3">
                  {area.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                  {area.description}
                </p>
                {area.href.startsWith("http") ? (
                  <a
                    href={area.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:underline"
                    style={{ color: area.accent }}
                  >
                    {area.linkLabel}
                  </a>
                ) : (
                  <Link
                    href={area.href}
                    className="text-sm font-medium hover:underline"
                    style={{ color: area.accent }}
                  >
                    {area.linkLabel}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM LINKS */}
      <section className="py-16 px-6 bg-[#001F3F]/30 border-t border-[#1e2a45]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-8">Explore the Clearinghouse</h2>
          <div className="space-y-6">
            {ECOSYSTEM_LINKS.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group bg-[#131B2E] rounded-xl border border-[#1e2a45] p-6 hover:border-[#ea580c]/30 transition-all"
              >
                <h3 className="text-lg font-bold text-[#E2E8F0] group-hover:text-white transition-colors mb-2">
                  {link.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-3">
                  {link.description}
                </p>
                <p className="text-sm font-medium text-[#ea580c] group-hover:text-[#f97316] transition-colors">
                  {link.linkLabel}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}