import { Metadata } from "next";
import Link from "next/link";
import { getAllAgents } from "@/lib/marketplace/loader";
import { agentExtendedMeta, allProviders } from "@/lib/marketplace/agent-meta";

export const metadata: Metadata = {
  title: "Model Compatibility — Agent Marketplace | SMF Works",
  description: "Compare which AI agents support OpenAI, Anthropic, Google, local, and other model providers.",
};

export default function ModelCompatibilityPage() {
  const agents = getAllAgents();

  return (
    <div className="min-h-screen bg-forge-navy">
      <section className="relative overflow-hidden border-b border-forge-border">
        <div className="absolute inset-0 bg-[url('/images/blog/agentmarketplace-hero.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-forge-navy/60 via-forge-navy/80 to-forge-navy" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-data-cyan/30 bg-data-cyan/10 px-4 py-1.5 text-sm font-semibold text-data-cyan">Models</span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-text-primary md:text-6xl">Model Compatibility</h1>
            <p className="mt-5 text-lg text-muted md:text-xl">Which agents can use which LLM providers, including local and self-hosted options.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="overflow-x-auto rounded-xl border border-forge-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-forge-card">
              <tr>
                <th className="sticky left-0 z-10 bg-forge-card px-4 py-3 font-semibold text-text-primary">Agent</th>
                {allProviders.map((p) => (
                  <th key={p} className="px-4 py-3 font-semibold text-muted min-w-[100px]">{p}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-forge-border">
              {agents.map((agent) => {
                const m = agentExtendedMeta[agent.id];
                const supported = m?.supportedProviders || [];
                return (
                  <tr key={agent.id} className="bg-forge-navy-deep hover:bg-forge-card/50">
                    <td className="sticky left-0 z-10 bg-forge-navy-deep px-4 py-3 font-semibold text-text-primary">
                      <Link href={`/agentmarketplace/${agent.id}`} className="hover:text-data-cyan">{agent.name}</Link>
                    </td>
                    {allProviders.map((p) => (
                      <td key={p} className="px-4 py-3">
                        {supported.includes(p) ? (
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#00E5A0]/20 text-[#00E5A0]">✓</span>
                        ) : (
                          <span className="text-forge-border">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
