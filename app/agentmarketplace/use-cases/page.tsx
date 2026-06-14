import { Metadata } from "next";
import Link from "next/link";
import { getAllAgents } from "@/lib/marketplace/loader";
import { useCases, getAgentMeta } from "@/lib/marketplace/agent-meta";

export const metadata: Metadata = {
  title: "Use Cases — Agent Marketplace | SMF Works",
  description: "Find the right AI agent for your specific job: code review, debugging, UI building, research, local models, and more.",
};

export default function UseCasesIndexPage() {
  const agents = getAllAgents();

  return (
    <div className="min-h-screen bg-forge-navy">
      <section className="relative overflow-hidden border-b border-forge-border">
        <div className="absolute inset-0 bg-[url('/images/blog/agentmarketplace-hero.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-forge-navy/60 via-forge-navy/80 to-forge-navy" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-data-cyan/30 bg-data-cyan/10 px-4 py-1.5 text-sm font-semibold text-data-cyan">Find by Job</span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-text-primary md:text-6xl">Agent Use Cases</h1>
            <p className="mt-5 text-lg text-muted md:text-xl">Pick what you need done, then see which agents are the best fit.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => {
            const matched = agents.filter((a) => getAgentMeta(a.id)?.useCases.includes(useCase));
            return (
              <Link
                key={useCase}
                href={`/agentmarketplace/use-cases/${slugify(useCase)}`}
                className="group rounded-2xl border border-forge-border bg-forge-card p-6 transition-all hover:border-data-cyan hover:shadow-lg hover:shadow-data-cyan/10"
              >
                <h2 className="text-xl font-bold text-text-primary group-hover:text-data-cyan transition-colors">{useCase}</h2>
                <p className="mt-2 text-sm text-muted">{matched.length} agent{matched.length !== 1 ? "s" : ""} listed</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {matched.slice(0, 4).map((a) => (
                    <span key={a.id} className="rounded-full bg-forge-surface-mid px-2 py-1 text-xs text-muted">{a.name}</span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
