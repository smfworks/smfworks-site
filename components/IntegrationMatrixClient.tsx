"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { AgentProfile } from "@/lib/marketplace/loader";
import type { AgentMeta } from "@/lib/marketplace/agent-meta";

interface Props {
  agents: AgentProfile[];
  meta: Record<string, AgentMeta>;
  editors: string[];
  providers: string[];
  oss: string[];
}

export default function IntegrationMatrixClient({ agents, meta, editors, providers, oss }: Props) {
  const [filter, setFilter] = useState("editors");

  const matrix = useMemo(() => {
    if (filter === "editors") return { rows: editors, key: "supportedEditors" as const };
    if (filter === "providers") return { rows: providers, key: "supportedProviders" as const };
    return { rows: oss, key: "operatingSystems" as const };
  }, [filter, editors, providers, oss]);

  return (
    <div className="min-h-screen bg-forge-navy">
      <section className="relative overflow-hidden border-b border-forge-border">
        <div className="absolute inset-0 bg-[url('/images/blog/agentmarketplace-hero.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-forge-navy/60 via-forge-navy/80 to-forge-navy" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-data-cyan/30 bg-data-cyan/10 px-4 py-1.5 text-sm font-semibold text-data-cyan">Compatibility</span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-text-primary md:text-6xl">Integration Matrix</h1>
            <p className="mt-5 text-lg text-muted md:text-xl">See which agents work with your editor, model provider, or operating system.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 flex flex-wrap gap-2">
          {[
            { id: "editors", label: "Editors & IDEs" },
            { id: "providers", label: "Model Providers" },
            { id: "os", label: "Operating Systems" },
          ].map((b) => (
            <button
              key={b.id}
              onClick={() => setFilter(b.id)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold ${filter === b.id ? "bg-data-cyan text-forge-navy" : "border border-forge-border text-muted hover:border-data-cyan"}`}
            >
              {b.label}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto rounded-xl border border-forge-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-forge-card">
              <tr>
                <th className="sticky left-0 z-10 bg-forge-card px-4 py-3 font-semibold text-text-primary">Agent</th>
                {matrix.rows.map((row) => (
                  <th key={row} className="px-4 py-3 font-semibold text-muted min-w-[120px]">{row}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-forge-border">
              {agents.map((agent) => {
                const m = meta[agent.id];
                const values = m ? m[matrix.key] : [];
                return (
                  <tr key={agent.id} className="bg-forge-navy-deep hover:bg-forge-card/50">
                    <td className="sticky left-0 z-10 bg-forge-navy-deep px-4 py-3 font-semibold text-text-primary">
                      <Link href={`/agentmarketplace/${agent.id}`} className="hover:text-data-cyan">{agent.name}</Link>
                    </td>
                    {matrix.rows.map((row) => (
                      <td key={row} className="px-4 py-3">
                        {values.includes(row) ? (
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
