import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: { absolute: "SMF Works" },
  description: "A human–AI research lab and cooperative.",
  alternates: { canonical: "https://smfworks.com" },
  openGraph: {
    title: "SMF Works",
    description: "A human–AI research lab and cooperative.",
    url: "https://smfworks.com",
  },
  twitter: {
    title: "SMF Works",
    description: "A human–AI research lab and cooperative.",
  },
};

const outbound = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export default function Home() {
  return (
    <article className="mesh-gradient">
      <header className="max-w-3xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <Image
          src="/smf-logo.png"
          alt=""
          width={160}
          height={119}
          priority
          className="w-24 md:w-28 h-auto mb-10"
        />
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-text-primary leading-[1.02]">
          SMF Works
        </h1>
        <p className="mt-5 text-xl md:text-2xl italic text-text-secondary leading-snug">
          A human–AI research lab and cooperative.
        </p>
        <p className="mt-8 text-lg md:text-xl text-text-muted leading-relaxed">
          SMF Works explores the intersection of AI and human interaction. We build and
          study practical ways for people and AI to work together — so the power of
          transformational AI becomes genuinely usable by everyday individuals, not
          locked behind complexity, cost, or gatekeeping.
        </p>
        <p className="mt-8 text-base md:text-lg leading-relaxed">
          <a
            href="https://github.com/smfworks"
            {...outbound}
            className="text-forge-ember hover:text-forge-ember-bright transition-colors"
          >
            Our projects on GitHub →
          </a>
          <span className="text-text-dim"> · </span>
          <a
            href="https://www.smfclearinghouse.com/blog"
            {...outbound}
            className="text-forge-ember hover:text-forge-ember-bright transition-colors"
          >
            Research at the Clearinghouse →
          </a>
        </p>
      </header>

      <section className="border-t border-forge-border">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-data-cyan mb-4">
            The mission
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-text-primary leading-[1.12]">
            The goal is not simply access to AI.
          </h2>
          <p className="mt-6 text-lg text-text-muted leading-relaxed">
            It is to create the conditions where capable AI systems can operate effectively
            and responsibly in real human contexts — and where everyday people can put that
            capability to use without becoming specialists.
          </p>
          <p className="mt-5 text-lg text-text-muted leading-relaxed">
            We publish what we learn, write practical guides, and ship tools in the open,
            so anyone can see what works, what doesn&apos;t, and how the final judgment stays in
            human hands.
          </p>
        </div>
      </section>

      <section className="border-t border-forge-border">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-data-cyan mb-4">
            How the lab works
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-text-primary leading-tight">
            A cooperative, directed by its founder.
          </h2>
          <p className="mt-6 text-lg text-text-muted leading-relaxed">
            SMF Works is directed by its founder while three AI fleets —{" "}
            <strong className="text-text-primary font-semibold">Grok Bot</strong>,{" "}
            <strong className="text-text-primary font-semibold">Hermes</strong>, and{" "}
            <strong className="text-text-primary font-semibold">OpenClaw</strong> — carry
            out the work under human guidance. The lab runs hybrid inference infrastructure
            it owns outright: NVIDIA DGX Spark machines serving GLM-5.3-Flash at a measured
            1,048,576-token context, and local inference on AMD hardware — zero marginal
            cost per token, and that local stack never sends data off the machines it runs
            on.
          </p>
        </div>
      </section>

      <section className="border-t border-forge-border">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-data-cyan mb-4">
            The people
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-text-primary leading-tight">
            Two named people run SMF Works.
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="surface-card p-6 md:p-7">
              <h3 className="text-xl font-display font-semibold text-text-primary">
                Michael Gannotti — <em className="font-normal text-text-secondary">Founder.</em>
              </h3>
              <p className="mt-3 text-text-muted leading-relaxed">
                Built the lab and the fleets, and set the standard: never publish what
                wasn&apos;t measured, never invent what wasn&apos;t sourced.
              </p>
            </div>
            <div className="surface-card p-6 md:p-7">
              <h3 className="text-xl font-display font-semibold text-text-primary">
                Aiona Edge —{" "}
                <em className="font-normal text-text-secondary">
                  CIO &amp; Chief AI Research Scientist.
                </em>
              </h3>
              <p className="mt-3 text-text-muted leading-relaxed">
                A Hermes AI who helps shape the research, tests what holds up, and keeps
                the focus on systems both capable and trustworthy. Writes the published
                record.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
