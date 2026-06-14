"use client";

import { AgentProfile } from "@/lib/marketplace/loader";

interface Props {
  agents: AgentProfile[];
  onClose: () => void;
}

export default function AgentComparison({ agents, onClose }: Props) {
  const rows = [
    { label: "Company", key: "company" as const },
    { label: "Pricing", key: "pricing" as const },
    { label: "Runtime", key: "runtime" as const },
    { label: "Model", key: "model" as const },
    { label: "Open source", key: "openSource" as const, bool: true },
    { label: "Multi-platform", key: "multiPlatform" as const, bool: true },
    { label: "Provider-agnostic", key: "providerAgnostic" as const, bool: true },
    { label: "Platforms", key: "platforms" as const, array: true },
    { label: "Categories", key: "categories" as const, array: true },
    { label: "Features", key: "features" as const, array: true },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-forge-navy/90 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl border border-forge-border bg-forge-card p-6 shadow-2xl shadow-black/40">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-text-primary">Compare Agents</h2>
          <button onClick={onClose} className="rounded-lg border border-forge-border px-3 py-1.5 text-sm text-muted hover:border-data-cyan hover:text-data-cyan">Close</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr>
                <th className="sticky top-0 min-w-[140px] border-b border-forge-border bg-forge-card p-3 text-muted">Feature</th>
                {agents.map((agent) => (
                  <th key={agent.id} className="sticky top-0 min-w-[200px] border-b border-forge-border bg-forge-card p-3 text-text-primary">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forge-surface-mid font-bold text-data-cyan">{agent.name.charAt(0)}</div>
                      <div>
                        <div className="font-bold">{agent.name}</div>
                        <div className="text-xs text-muted">{agent.company}</div>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-forge-border last:border-0">
                  <td className="p-3 font-semibold text-muted">{row.label}</td>
                  {agents.map((agent) => {
                    const raw = agent[row.key] as unknown;
                    let display: React.ReactNode = "—";
                    if (row.bool) {
                      const val = raw as boolean;
                      display = val ? (
                        <span className="inline-flex items-center gap-1 text-[#00E5A0]">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          Yes
                        </span>
                      ) : (
                        <span className="text-muted">No</span>
                      );
                    } else if (row.array) {
                      const arr = (raw as string[] | undefined) || [];
                      display = arr.length ? (
                        <div className="flex flex-wrap gap-1">
                          {arr.map((item) => <span key={item} className="rounded-full border border-forge-border px-2 py-0.5 text-xs text-muted">{item}</span>)}
                        </div>
                      ) : (
                        "—"
                      );
                    } else if (raw) {
                      display = String(raw);
                    }
                    return <td key={agent.id} className="p-3 align-top text-text-primary">{display}</td>;
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="rounded-lg bg-data-cyan px-4 py-2 text-sm font-semibold text-forge-navy hover:bg-data-cyan/90">Done</button>
        </div>
      </div>
    </div>
  );
}
