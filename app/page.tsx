import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ForgeCanvas from "@/components/ForgeCanvas";
import Button from "@/components/shared/Button";
import SupportCta from "@/components/shared/SupportCta";
import { Eyebrow, Hairline, SectionIntro, SurfaceCard } from "@/components/shared/LabUI";
import {
  ACCOMPLISHMENTS,
  PROOF_ITEMS,
  SURFACES,
} from "@/content/lib/lab";
import { getCurrentIssue } from "@/content/lib/newsletter-loader";
import { SERVICE_PACKAGES } from "@/content/lib/services";

export const metadata: Metadata = {
  title: "SMF Works | Human-AI Research Lab",
  description:
    "A human-AI research lab. We ship agent systems and open tools, publish what we learn, and install working Hermes or OpenClaw stacks for owners who want agents on machines they control.",
  alternates: { canonical: "https://smfworks.com" },
};

export default function Home() {
  const weekly = getCurrentIssue();
  const proofItems = PROOF_ITEMS.map((item) =>
    item.label === "SMF AI Weekly"
      ? { ...item, detail: `Issue #${weekly.issueNumber}` }
      : item
  );
  const accomplishments = ACCOMPLISHMENTS.map((item) =>
    item.title === "Clearinghouse + weekly + X"
      ? {
          ...item,
          oneLiner: `Research published at the Clearinghouse; SMF AI Weekly through Issue #${weekly.issueNumber}; field notes on X @MichaelGannotti.`,
        }
      : item
  );

  return (
    <>
      <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-forge-navy">
        <ForgeCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-forge-navy/40 via-forge-navy/55 to-forge-navy pointer-events-none z-10" />

        <div className="relative z-20 w-full max-w-6xl mx-auto px-6 pt-32 pb-20">
          <div className="max-w-3xl">
            <div className="mb-8">
              <Image
                src="/smf-logo.png"
                alt="SMF Works"
                width={160}
                height={119}
                className="w-[120px] md:w-[140px] h-auto opacity-90"
                priority
              />
            </div>

            <Eyebrow>Human-AI Research Lab</Eyebrow>

            <h1 className="text-4xl md:text-6xl font-display font-bold leading-[1.08] mb-6 tracking-tight text-text-primary">
              A lab for agent systems. Judgment stays human.
            </h1>

            <p className="text-lg md:text-xl text-text-muted max-w-2xl mb-10 leading-relaxed">
              SMF Works publishes what we learn, ships open agent tools, and
              installs stacks on hardware you own. Intelligence is abundant.
              Judgment is the product.
            </p>

            <Button href="/services">Agent Setup</Button>
          </div>
        </div>
      </section>

      <section className="border-y border-forge-border bg-forge-card/60">
        <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {proofItems.map((item) => {
            const inner = (
              <>
                <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-text-dim mb-1">
                  {item.label}
                </div>
                <div className="text-sm text-text-primary font-medium">{item.detail}</div>
              </>
            );
            const className = "block hover:text-forge-ember transition-colors";
            return item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {inner}
              </a>
            ) : (
              <Link key={item.label} href={item.href} className={className}>
                {inner}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="relative section-padding px-6 bg-forge-navy">
        <div className="max-w-6xl mx-auto">
          <SectionIntro
            eyebrow="Surfaces"
            title="What the lab runs"
            body="Six public surfaces. Research stays on the Clearinghouse; this site is the umbrella — who we are, what we shipped, and what you can buy."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SURFACES.map((item) => (
              <SurfaceCard key={item.name} href={item.href}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-data-cyan">
                    {item.status}
                  </span>
                  <span className="text-text-dim text-sm group-hover:text-forge-ember transition-colors">
                    {item.href.startsWith("http") ? "↗" : "→"}
                  </span>
                </div>
                <h3 className="text-xl font-display font-semibold text-text-primary mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.oneLiner}</p>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </section>

      <Hairline />

      <section className="relative section-padding px-6 bg-forge-navy">
        <div className="max-w-6xl mx-auto">
          <SectionIntro
            eyebrow="Shipped"
            title="Recent work, in public"
            body="Named products and dated notes — no invented counters, no case-study ROI. The full catalog lives on /work."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {accomplishments.map((item) => (
              <SurfaceCard key={item.title} href={item.href}>
                <div className="flex items-center gap-3 mb-3">
                  {item.date ? (
                    <span className="text-[11px] font-mono text-forge-ember uppercase tracking-wider">
                      {item.date}
                    </span>
                  ) : null}
                  <span className="text-[11px] font-mono text-text-dim uppercase tracking-wider">
                    {item.source}
                  </span>
                </div>
                <h3 className="text-lg font-display font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.oneLiner}</p>
              </SurfaceCard>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/work" variant="secondary">
              Full catalog
            </Button>
          </div>
        </div>
      </section>

      <Hairline />

      <section id="services" className="relative section-padding px-6 bg-forge-navy scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <SectionIntro
            eyebrow="Services"
            title="Agent Setup packages"
            body="We install and tailor an AI agent stack for your small business, then hand it back with a runbook. You stay the owner. Fixed packages — no open-ended billable hours for v1."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {SERVICE_PACKAGES.map((pkg) => (
              <div
                key={pkg.sku}
                className={`surface-card p-7 flex flex-col ${
                  pkg.featured ? "border-forge-ember/50 ring-1 ring-forge-ember/30" : ""
                }`}
              >
                <div className="mb-5">
                  {pkg.featured ? (
                    <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-forge-ember mb-2">
                      Main package
                    </p>
                  ) : null}
                  <h3 className="text-2xl font-display font-semibold text-text-primary">
                    {pkg.name}
                  </h3>
                  <p className="text-3xl font-display font-bold text-forge-ember mt-2">
                    {pkg.price}
                  </p>
                  {pkg.priceNote ? (
                    <p className="text-xs text-text-dim mt-1">{pkg.priceNote}</p>
                  ) : null}
                  <p className="text-sm text-text-muted mt-3 leading-relaxed">{pkg.tagline}</p>
                </div>
                <ul className="text-sm text-text-secondary space-y-2 mb-6 flex-1">
                  {pkg.includes.slice(0, 4).map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="text-data-cyan mt-0.5">▸</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <Button href={`/contact?package=${pkg.sku}`}>Request intake</Button>
              </div>
            ))}
          </div>
          <p className="text-sm text-text-dim text-center mt-8 max-w-2xl mx-auto">
            Primary stack: Hermes on Omarchy Linux. Alternate: OpenClaw gateway.
            Scope, refuse lists, and what is not included are on the{" "}
            <Link href="/services" className="text-forge-ember hover:underline">
              services page
            </Link>
            .
          </p>
        </div>
      </section>

      <Hairline />

      <section id="about" className="relative section-padding px-6 bg-forge-navy scroll-mt-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7">
            <Eyebrow>About</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-text-primary mb-5">
              Michael Gannotti, Principal AI
            </h2>
            <p className="text-text-muted leading-relaxed text-lg mb-4">
              Michael leads SMF Works: thirty years in enterprise technology,
              most recently as a Principal AI Solutions Engineer, now running a
              human-AI research lab that publishes in the open and installs
              agent stacks owners control.
            </p>
            <p className="text-text-muted leading-relaxed text-lg mb-8">
              Agents do the labor under the direction of Michael and his
              daughter, and COO,{"  "}Mary. Judgment stays human — tools are
              inspected before they are trusted, and consequential acts stay
              behind review.
            </p>
            <Button href="/about" variant="secondary">
              More about the lab
            </Button>
          </div>
          <div className="md:col-span-5 surface-card p-7">
            <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-data-cyan mb-3">
              How to reach us
            </p>
            <p className="text-text-primary font-medium mb-1">
              <a href="mailto:michael@smfworks.com" className="hover:text-forge-ember">
                michael@smfworks.com
              </a>
            </p>
            <p className="text-sm text-text-muted mb-6">
              Intake for Agent Setup, or a note about the work. He reads them.
            </p>
            <Button href="/contact">Contact</Button>
          </div>
        </div>
      </section>

      <Hairline />

      <SupportCta />
    </>
  );
}
