import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/shared/Button";
import { Eyebrow, Hairline, SectionIntro, SurfaceCard } from "@/components/shared/LabUI";
import { WORK_ITEMS } from "@/content/lib/lab";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Public catalog of SMF Works surfaces, open agent tools, and books — Clearinghouse, WisdomForge, Hermes, LAR, Praxis, and more.",
  alternates: { canonical: "https://smfworks.com/work" },
};

const GROUPS: { key: (typeof WORK_ITEMS)[number]["group"]; title: string; body: string }[] = [
  {
    key: "surfaces",
    title: "Lab surfaces",
    body: "Products people can open today. Research writing stays on the Clearinghouse.",
  },
  {
    key: "tools",
    title: "Open tools",
    body: "Repos we run and publish. Status is the public GitHub record — not a marketing badge.",
  },
  {
    key: "books",
    title: "Books",
    body: "Direct-from-author titles. The Stripe storefront on /books is for future direct drops.",
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="relative pt-36 pb-16 px-6 overflow-hidden mesh-gradient">
        <div className="max-w-4xl mx-auto">
          <Eyebrow tone="cyan">Catalog</Eyebrow>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-text-primary mb-5">
            Work that is public
          </h1>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            A catalog of shipped surfaces and tools — not a second homepage.
            For who we are and what you can buy, start at{" "}
            <Link href="/" className="text-forge-ember hover:underline">
              Home
            </Link>{" "}
            or{" "}
            <Link href="/services" className="text-forge-ember hover:underline">
              Agent Setup
            </Link>
            .
          </p>
        </div>
      </section>

      {GROUPS.map((group, i) => {
        const items = WORK_ITEMS.filter((item) => item.group === group.key);
        return (
          <section key={group.key} className="relative px-6 pb-20 bg-forge-navy">
            {i > 0 ? <Hairline /> : null}
            <div className={`max-w-6xl mx-auto ${i > 0 ? "pt-16" : ""}`}>
              <SectionIntro
                eyebrow={String(i + 1).padStart(2, "0")}
                title={group.title}
                body={group.body}
                align="left"
                tone={group.key === "tools" ? "cyan" : "ember"}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {items.map((item) => (
                  <SurfaceCard key={item.name} href={item.href}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-data-cyan">
                        {item.status}
                      </span>
                      <span className="text-xs font-mono text-text-dim">{item.tagline}</span>
                    </div>
                    <h2 className="text-xl font-display font-semibold text-text-primary mb-2 group-hover:text-forge-ember transition-colors">
                      {item.name}
                    </h2>
                    <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
                  </SurfaceCard>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="relative px-6 pb-24 bg-forge-navy">
        <div className="max-w-2xl mx-auto text-center surface-card p-10">
          <h2 className="text-2xl font-display font-bold text-text-primary mb-3">
            Want a stack installed?
          </h2>
          <p className="text-text-muted mb-6">
            Agent Setup is a fixed-scope install, not a custom software engagement.
          </p>
          <Button href="/services">View Agent Setup</Button>
        </div>
      </section>
    </>
  );
}
