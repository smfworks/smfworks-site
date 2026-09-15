import type { Metadata } from "next";
import Button from "@/components/shared/Button";
import { Eyebrow, Hairline, SectionIntro, SurfaceCard } from "@/components/shared/LabUI";

export const metadata: Metadata = {
  title: "Research",
  description:
    "We test, document, and build — with honesty about what works and what doesn't. Research lives at the AI Clearinghouse: articles, benchmarks, guides, and open tools written for practitioners, not procurement.",
  alternates: { canonical: "https://smfworks.com/research" },
};

const RESEARCH_AREAS = [
  {
    title: "Agent architecture",
    desc: "Hermes skills, memory, observability, and multi-agent patterns we actually run.",
    href: "https://www.smfclearinghouse.com/blog",
    linkLabel: "Clearinghouse blog",
    tone: "ember" as const,
  },
  {
    title: "Evaluation & benchmarks",
    desc: "Model tests and harness notes — including when the numbers surprise us.",
    href: "https://www.smfclearinghouse.com/tests",
    linkLabel: "Tests",
    tone: "cyan" as const,
  },
  {
    title: "Governed autonomy",
    desc: "Praxis — a colleague with a charter and human review for consequential acts.",
    href: "https://github.com/smfworks/smf-praxis",
    linkLabel: "Praxis on GitHub",
    tone: "cyan" as const,
  },
  {
    title: "Open tools",
    desc: "Hermes-on-Omarchy, LAR, Mnemosyne, Swarm, skills. Built for us, published for others.",
    href: "https://github.com/smfworks",
    linkLabel: "github.com/smfworks",
    tone: "ember" as const,
  },
];

const ECOSYSTEM_LINKS = [
  {
    title: "AI Clearinghouse",
    desc: "Canonical research: agents, models, evals, guides, and field notes.",
    href: "https://www.smfclearinghouse.com/",
    linkLabel: "smfclearinghouse.com",
  },
  {
    title: "White papers",
    desc: "Longer notes on architecture, evaluation, and governed autonomy.",
    href: "https://www.smfclearinghouse.com/whitepapers",
    linkLabel: "White papers",
  },
  {
    title: "Lab experiments",
    desc: "Hands-on runs — inference, local clusters, model comparisons.",
    href: "https://www.smfclearinghouse.com/lab",
    linkLabel: "Lab",
  },
];

export default function ResearchPage() {
  return (
    <>
      <section className="relative pt-36 pb-16 px-6 overflow-hidden mesh-gradient">
        <div className="max-w-4xl mx-auto">
          <Eyebrow tone="cyan">Research</Eyebrow>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-text-primary mb-5">
            Research that ships.
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed">
            We test, document, and build — with honesty about what holds up.
            Canonical writing lives at the AI Clearinghouse, not on this umbrella
            site.
          </p>
        </div>
      </section>

      <section className="relative px-6 pb-20 bg-forge-navy">
        <div className="max-w-6xl mx-auto">
          <SectionIntro
            eyebrow="Areas"
            title="What we study"
            body="Each card goes to a live surface. No placeholder hubs."
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {RESEARCH_AREAS.map((area) => (
              <SurfaceCard key={area.title} href={area.href}>
                <p
                  className={`text-[11px] font-mono uppercase tracking-[0.16em] mb-3 ${
                    area.tone === "cyan" ? "text-data-cyan" : "text-forge-ember"
                  }`}
                >
                  {area.linkLabel} ↗
                </p>
                <h2 className="text-xl font-display font-semibold text-text-primary mb-2">
                  {area.title}
                </h2>
                <p className="text-sm text-text-muted leading-relaxed">{area.desc}</p>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </section>

      <Hairline />

      <section className="relative section-padding px-6 bg-forge-navy">
        <div className="max-w-4xl mx-auto">
          <SectionIntro
            eyebrow="Clearinghouse"
            title="Go to the source"
            body="/blog on this domain redirects here, then out to the Clearinghouse."
            align="left"
            tone="cyan"
          />
          <div className="space-y-4">
            {ECOSYSTEM_LINKS.map((link) => (
              <SurfaceCard key={link.title} href={link.href}>
                <h3 className="text-lg font-display font-semibold text-text-primary mb-1">
                  {link.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-2">{link.desc}</p>
                <p className="text-xs font-mono uppercase tracking-wider text-forge-ember">
                  {link.linkLabel} ↗
                </p>
              </SurfaceCard>
            ))}
          </div>
          <div className="mt-10">
            <Button href="https://www.smfclearinghouse.com/" external>
              smfclearinghouse.com
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
