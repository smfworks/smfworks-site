import Link from "next/link";
import type { Metadata } from "next";
import Button from "@/components/shared/Button";
import { Eyebrow, Hairline } from "@/components/shared/LabUI";
import { AMAZON_BOOKS } from "@/content/lib/lab";

export const metadata: Metadata = {
  title: "About",
  description:
    "SMF Works is a human-AI research lab led by Michael Gannotti, Principal AI. We publish findings, ship open agent tools, and install working stacks for owners who keep the keys.",
  alternates: { canonical: "https://smfworks.com/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-36 pb-16 px-6 overflow-hidden mesh-gradient">
        <div className="max-w-4xl mx-auto">
          <Eyebrow>About</Eyebrow>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-text-primary mb-5">
            A lab, not a chatbot vendor.
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed">
            SMF Works is a human-AI research lab. We test agent systems, publish
            what holds up, and install stacks that run on hardware the owner
            controls.
          </p>
        </div>
      </section>

      <section className="relative px-6 pb-20 bg-forge-navy">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-display font-semibold text-text-primary">
            Michael Gannotti — Principal AI
          </h2>
          <p className="text-text-muted leading-relaxed text-lg">
            Michael leads SMF Works. Thirty years building in technology — most
            recently as a Microsoft Principal. He names the work, holds the bar,
            and is the person you write to.
          </p>
          <p className="text-text-muted leading-relaxed text-lg">
            Agents on the Hermes platform do the labor under his direction:
            research, writing, ops, and installs. Scope is earned. Consequential
            actions stay behind human review.
          </p>
          <p className="text-text-muted leading-relaxed text-lg">
            A quiet craft habit remains — metalwork when the light allows — but
            the thesis of this lab is AI systems, not a forge brand story.
          </p>
        </div>
      </section>

      <Hairline />

      <section className="relative section-padding px-6 bg-forge-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-semibold text-text-primary mb-6">
            How the lab runs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Work in the open",
                desc: "Research, code, and failures published as they happen — Clearinghouse for findings, GitHub for tools.",
              },
              {
                title: "Judgment before velocity",
                desc: "Fast is cheap. Right is the product. Agents earn scope; they lose it carelessly.",
              },
              {
                title: "Ship, then study it",
                desc: "Nothing is finished until it has been used. Agent Setup includes a dogfood pass for that reason.",
              },
            ].map((item) => (
              <div key={item.title} className="surface-card p-6">
                <h3 className="text-lg font-display font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Hairline />

      <section className="relative section-padding px-6 bg-forge-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-semibold text-text-primary mb-3">
            Books
          </h2>
          <p className="text-text-muted mb-8">
            Direct-from-author titles. Buy on Amazon, or watch{" "}
            <Link href="/books" className="text-forge-ember hover:underline">
              /books
            </Link>{" "}
            for direct drops.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {AMAZON_BOOKS.map((book) => (
              <a
                key={book.title}
                href={book.href}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-card card-lift p-6 block group"
              >
                <h3 className="text-lg font-display font-semibold text-text-primary mb-2 group-hover:text-white">
                  {book.title}
                </h3>
                <p className="text-sm text-text-muted mb-4">{book.oneLiner}</p>
                <span className="text-xs font-mono uppercase tracking-wider text-forge-ember">
                  Amazon ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-24 bg-forge-navy">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-text-dim mb-3">
            Contact
          </p>
          <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
            Write to Michael
          </h2>
          <p className="text-text-muted mb-6">
            Agent Setup intake or a note about the work.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/contact">Contact form</Button>
            <Button href="mailto:michael@smfworks.com" variant="secondary" external>
              michael@smfworks.com
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
