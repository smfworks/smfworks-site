import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllAgents } from "@/lib/marketplace/loader";
import { useCases, getAgentMeta } from "@/lib/marketplace/agent-meta";

export function generateStaticParams() {
  return useCases.map((u) => ({ slug: slugify(u) }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const useCase = useCases.find((u) => slugify(u) === params.slug);
  if (!useCase) return {};
  return {
    title: `${useCase} — Agent Use Cases | SMF Works`,
    description: `Best AI agents for ${useCase.toLowerCase()}. Compare side-by-side on pricing, runtime, platforms, and features.`,
  };
}

export default function UseCasePage({ params }: { params: { slug: string } }) {
  const useCase = useCases.find((u) => slugify(u) === params.slug);
  if (!useCase) notFound();

  const agents = getAllAgents().filter((a) => getAgentMeta(a.id)?.useCases.includes(useCase));

  return (
    <div className="min-h-screen bg-forge-navy px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <Link href="/agentmarketplace/use-cases" className="text-sm text-muted hover:text-data-cyan">← All use cases</Link>
        <h1 className="mt-4 text-4xl font-extrabold text-text-primary">Best agents for {useCase}</h1>
        <p className="mt-2 text-lg text-muted">{agents.length} agent{agents.length !== 1 ? "s" : ""} matched this use case.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <Link
              key={agent.id}
              href={`/agentmarketplace/${agent.id}`}
              className="group rounded-2xl border border-forge-border bg-forge-card p-6 transition-all hover:border-data-cyan"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-forge-surface-mid text-lg font-bold text-data-cyan">
                  {agent.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-text-primary group-hover:text-data-cyan">{agent.name}</h2>
                  <p className="text-sm text-muted">{agent.company}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted">{agent.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-forge-surface-mid px-2 py-1 text-muted">{agent.pricing}</span>
                <span className="rounded-full bg-forge-surface-mid px-2 py-1 text-muted">{agent.runtime}</span>
                <span className="rounded-full bg-forge-surface-mid px-2 py-1 text-muted">{agent.openSource ? "Open source" : "Closed"}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
