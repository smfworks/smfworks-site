import type { Metadata } from "next";
import Button from "@/components/shared/Button";
import { Eyebrow, Hairline } from "@/components/shared/LabUI";
import {
  SERVICE_BOUNDARIES,
  SERVICE_FIT,
  SERVICE_NEEDS,
  SERVICE_PACKAGES,
} from "@/content/lib/services";

export const metadata: Metadata = {
  title: "Agent Setup",
  description:
    "SMF Works Agent Setup: Starter $2,000, Standard $3,500, Keep-alive $300/month. Hermes on Omarchy or OpenClaw — installed, tailored, handed back with a runbook.",
  alternates: { canonical: "https://smfworks.com/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-36 pb-16 px-6 overflow-hidden mesh-gradient">
        <div className="max-w-4xl mx-auto">
          <Eyebrow>Services</Eyebrow>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-text-primary mb-5">
            Agent Setup
          </h1>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed mb-4">
            We install and tailor an AI agent stack for your small business, then
            hand it back with a runbook. You stay the owner. Fixed packages — no
            open-ended billable hours for v1.
          </p>
          <p className="text-sm font-mono text-data-cyan">
            Primary stack: Hermes on Omarchy Linux · Alternate: OpenClaw gateway
          </p>
        </div>
      </section>

      <section className="relative px-6 pb-20 bg-forge-navy">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5">
          {SERVICE_PACKAGES.map((pkg) => (
            <article
              key={pkg.sku}
              id={pkg.sku}
              className={`surface-card p-7 flex flex-col scroll-mt-28 ${
                pkg.featured ? "border-forge-ember/50 ring-1 ring-forge-ember/30" : ""
              }`}
            >
              <div className="mb-6">
                {pkg.featured ? (
                  <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-forge-ember mb-2">
                    Main package
                  </p>
                ) : null}
                <h2 className="text-2xl font-display font-semibold text-text-primary">
                  {pkg.name}
                </h2>
                <p className="text-3xl font-display font-bold text-forge-ember mt-2">
                  {pkg.price}
                </p>
                {pkg.priceNote ? (
                  <p className="text-xs text-text-dim mt-1">{pkg.priceNote}</p>
                ) : null}
                <p className="text-sm text-text-muted mt-3 leading-relaxed">{pkg.tagline}</p>
              </div>

              <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-text-dim mb-2">
                Includes
              </p>
              <ul className="text-sm text-text-secondary space-y-2 mb-5">
                {pkg.includes.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-data-cyan mt-0.5">▸</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-text-dim mb-2">
                Does not include
              </p>
              <ul className="text-sm text-text-dim space-y-2 mb-5 flex-1">
                {pkg.doesNotInclude.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-text-dim mt-0.5">–</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-text-muted mb-6 leading-relaxed">{pkg.timeline}</p>
              <Button href={`/contact?package=${pkg.sku}`}>Request intake</Button>
            </article>
          ))}
        </div>
      </section>

      <Hairline />

      <section className="relative section-padding px-6 bg-forge-navy">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-display font-semibold text-text-primary mb-4">
              Who this is for
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Owners who want a working agent on their machine (or a small VPS
              they control), wired to real work — not another chatbot demo.
            </p>
            <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-data-cyan mb-2">
              Good fits
            </p>
            <ul className="text-sm text-text-secondary space-y-1 mb-5">
              {SERVICE_FIT.good.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-forge-ember mb-2">
              Not a fit (v1)
            </p>
            <ul className="text-sm text-text-dim space-y-1">
              {SERVICE_FIT.notV1.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-display font-semibold text-text-primary mb-4">
              What we need from you
            </h2>
            <ul className="text-sm text-text-secondary space-y-2 mb-8">
              {SERVICE_NEEDS.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-forge-ember mt-0.5">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <h2 className="text-2xl font-display font-semibold text-text-primary mb-4">
              Boundaries
            </h2>
            <ul className="text-sm text-text-muted space-y-2">
              {SERVICE_BOUNDARIES.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-text-dim mt-0.5">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-24 bg-forge-navy">
        <div className="max-w-2xl mx-auto text-center surface-card p-10">
          <h2 className="text-2xl font-display font-bold text-text-primary mb-3">
            How to start
          </h2>
          <p className="text-text-muted mb-6 leading-relaxed">
            Pick Starter or Standard. We&apos;ll send a short intake and an
            invoice. Keep-alive is offered at handoff.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/contact?package=standard">Contact / intake</Button>
            <Button href="mailto:michael@smfworks.com" variant="secondary" external>
              michael@smfworks.com
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
