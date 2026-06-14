"use client";

import { LLMModel, modelSlug } from "@/lib/marketplace/pricing";
import { formatNumber, formatPrice } from "@/lib/marketplace/format";
import Link from "next/link";

interface Props {
  models: LLMModel[];
}

export default function LLMComparisonTable({ models }: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-forge-border bg-forge-card">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-forge-border bg-forge-surface-mid/50">
          <tr>
            <th className="px-4 py-3 font-semibold text-text-primary">Model</th>
            <th className="px-4 py-3 font-semibold text-text-primary">Provider</th>
            <th className="px-4 py-3 font-semibold text-text-primary">Input / 1M</th>
            <th className="px-4 py-3 font-semibold text-text-primary">Output / 1M</th>
            <th className="px-4 py-3 font-semibold text-text-primary">Context</th>
            <th className="px-4 py-3 font-semibold text-text-primary">MMLU</th>
            <th className="px-4 py-3 font-semibold text-text-primary">Arena</th>
          </tr>
        </thead>
        <tbody>
          {models.map((m) => {
            const slug = modelSlug(m.model_id);
            return (
              <tr key={m.model_id} className="border-b border-forge-border/50 last:border-0 hover:bg-forge-surface-mid/30">
                <td className="px-4 py-3 font-medium text-text-primary">
                  <Link href={`/agentmarketplace/llms/${slug}`} className="hover:text-data-cyan transition-colors">
                    {m.model}
                  </Link>
                </td>
                <td className="px-4 py-3 text-muted">{m.provider}</td>
                <td className="px-4 py-3 text-[#00E5A0]">{formatPrice(m.input_price)}</td>
                <td className="px-4 py-3 text-forge-ember-bright">{formatPrice(m.output_price)}</td>
                <td className="px-4 py-3 text-muted">{formatNumber(m.context_window)}</td>
                <td className="px-4 py-3 text-muted">{m.mmlu ?? "—"}</td>
                <td className="px-4 py-3 text-muted">{m.chatbot_arena ?? "—"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
