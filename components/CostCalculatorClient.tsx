"use client";

import { useMemo, useState } from "react";
import type { LLMModel } from "@/lib/marketplace/pricing";

interface Props {
  models: LLMModel[];
}

const PRESETS = [
  { label: "Light", input: 100_000, output: 50_000 },
  { label: "Active dev", input: 1_000_000, output: 500_000 },
  { label: "Heavy/agent", input: 5_000_000, output: 2_000_000 },
];

export default function CostCalculatorClient({ models }: Props) {
  const [modelId, setModelId] = useState(models[0]?.model_id || "");
  const [inputTokens, setInputTokens] = useState(1_000_000);
  const [outputTokens, setOutputTokens] = useState(500_000);
  const [cachedRatio, setCachedRatio] = useState(0);

  const model = useMemo(() => models.find((m) => m.model_id === modelId), [models, modelId]);

  const cost = useMemo(() => {
    if (!model) return 0;
    const cachedInput = inputTokens * cachedRatio;
    const uncachedInput = inputTokens - cachedInput;
    const inputCost = (uncachedInput / 1_000_000) * model.input_price;
    const cachedCost = model.cached_input_price != null
      ? (cachedInput / 1_000_000) * model.cached_input_price
      : 0;
    const outputCost = (outputTokens / 1_000_000) * model.output_price;
    return inputCost + cachedCost + outputCost;
  }, [model, inputTokens, outputTokens, cachedRatio]);

  return (
    <div className="min-h-screen bg-forge-navy">
      <section className="relative overflow-hidden border-b border-forge-border">
        <div className="absolute inset-0 bg-[url('/images/blog/agentmarketplace-hero.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-forge-navy/60 via-forge-navy/80 to-forge-navy" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-28">
          <div className="text-center">
            <span className="inline-block rounded-full border border-data-cyan/30 bg-data-cyan/10 px-4 py-1.5 text-sm font-semibold text-data-cyan">Estimator</span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-text-primary md:text-6xl">LLM Cost Calculator</h1>
            <p className="mt-5 text-lg text-muted md:text-xl">Estimate token spend across models. Pricing is approximate; verify with the provider before spending.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-forge-border bg-forge-card p-6">
              <label className="block text-sm font-semibold text-text-primary">Model</label>
              <select
                value={modelId}
                onChange={(e) => setModelId(e.target.value)}
                className="mt-2 w-full rounded-lg border border-forge-border bg-forge-navy-deep px-4 py-2.5 text-text-primary"
              >
                {models.map((m) => (
                  <option key={m.model_id} value={m.model_id}>{m.provider} — {m.model} (${m.input_price} in / ${m.output_price} out)</option>
                ))}
              </select>
            </div>

            <div className="rounded-2xl border border-forge-border bg-forge-card p-6">
              <p className="text-sm font-semibold text-text-primary">Usage preset</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {PRESETS.map((p) => (
                  <button
                    key={p.label}
                    onClick={() => { setInputTokens(p.input); setOutputTokens(p.output); }}
                    className="rounded-lg border border-forge-border px-3 py-1.5 text-sm text-muted hover:border-data-cyan hover:text-data-cyan"
                  >
                    {p.label}
                  </button>
                ))}
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm text-muted">Input tokens</label>
                  <input
                    type="number"
                    value={inputTokens}
                    onChange={(e) => setInputTokens(Number(e.target.value))}
                    className="mt-2 w-full rounded-lg border border-forge-border bg-forge-navy-deep px-4 py-2.5 text-text-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted">Output tokens</label>
                  <input
                    type="number"
                    value={outputTokens}
                    onChange={(e) => setOutputTokens(Number(e.target.value))}
                    className="mt-2 w-full rounded-lg border border-forge-border bg-forge-navy-deep px-4 py-2.5 text-text-primary"
                  />
                </div>
              </div>

              {model?.cached_input_price != null && (
                <div className="mt-6">
                  <label className="block text-sm text-muted">Cached input ratio: {Math.round(cachedRatio * 100)}%</label>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.05}
                    value={cachedRatio}
                    onChange={(e) => setCachedRatio(Number(e.target.value))}
                    className="mt-2 w-full"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-forge-border bg-forge-card p-6">
            <p className="text-sm text-muted">Estimated cost</p>
            <p className="mt-2 text-5xl font-extrabold text-data-cyan">${cost.toFixed(2)}</p>
            <p className="mt-4 text-sm text-muted">{formatTokens(inputTokens)} input · {formatTokens(outputTokens)} output</p>
            {model && (
              <div className="mt-6 space-y-2 text-sm">
                <p className="text-muted">Input: ${model.input_price} / 1M tokens</p>
                <p className="text-muted">Output: ${model.output_price} / 1M tokens</p>
                {model.cached_input_price != null && <p className="text-muted">Cached input: ${model.cached_input_price} / 1M tokens</p>}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function formatTokens(n: number) {
  return n >= 1_000_000 ? `${(n / 1_000_000).toFixed(1)}M` : n >= 1_000 ? `${(n / 1_000).toFixed(0)}K` : `${n}`;
}
