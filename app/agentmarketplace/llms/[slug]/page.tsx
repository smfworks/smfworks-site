import { notFound } from "next/navigation";
import Link from "next/link";
import { formatNumber, formatPrice, modelSlug } from "@/lib/marketplace/format";
import { getLLMPricingData } from "@/lib/marketplace/llm-data";

export function generateStaticParams() {
  const data = getLLMPricingData();
  return data.models.map((m) => ({
    slug: modelSlug(m.model_id),
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const data = getLLMPricingData();
  const slug = params.slug;
  const model = data.models.find((m) => modelSlug(m.model_id) === slug);
  if (!model) return {};
  return {
    title: `${model.model} — LLM Pricing & Benchmarks`,
    description: model.notes,
  };
}

export default function LLMDetailPage({ params }: { params: { slug: string } }) {
  const data = getLLMPricingData();
  const slug = params.slug;
  const model = data.models.find((m) => modelSlug(m.model_id) === slug);
  if (!model) notFound();

  return (
    <div className="min-h-screen bg-forge-navy px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <Link href="/agentmarketplace/llms" className="mb-6 inline-flex items-center text-sm text-muted hover:text-data-cyan transition-colors">
          ← Back to LLM pricing
        </Link>

        <div className="rounded-2xl border border-forge-border bg-forge-card p-8 md:p-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <span className="text-sm font-semibold text-data-cyan">{model.provider}</span>
              <h1 className="mt-1 text-3xl font-bold text-text-primary md:text-4xl">{model.model}</h1>
              <p className="mt-2 text-sm text-muted">Model ID: {model.model_id}</p>
            </div>
            <a href={model.source_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-data-cyan px-5 py-2.5 font-semibold text-forge-navy hover:bg-[#33E5FF] transition-colors">
              View provider pricing
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <p className="mt-6 text-lg text-text-primary">{model.notes}</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-forge-border bg-forge-navy-deep p-5">
              <p className="text-sm text-muted">Input price</p>
              <p className="mt-1 text-2xl font-bold text-[#00E5A0]">{formatPrice(model.input_price)}</p>
              <p className="text-xs text-muted">per 1M tokens</p>
            </div>
            <div className="rounded-xl border border-forge-border bg-forge-navy-deep p-5">
              <p className="text-sm text-muted">Output price</p>
              <p className="mt-1 text-2xl font-bold text-forge-ember-bright">{formatPrice(model.output_price)}</p>
              <p className="text-xs text-muted">per 1M tokens</p>
            </div>
            <div className="rounded-xl border border-forge-border bg-forge-navy-deep p-5">
              <p className="text-sm text-muted">Context window</p>
              <p className="mt-1 text-2xl font-bold text-text-primary">{formatNumber(model.context_window)}</p>
              <p className="text-xs text-muted">tokens</p>
            </div>
            <div className="rounded-xl border border-forge-border bg-forge-navy-deep p-5">
              <p className="text-sm text-muted">Max output</p>
              <p className="mt-1 text-2xl font-bold text-text-primary">{model.max_output_tokens ? formatNumber(model.max_output_tokens) : "—"}</p>
              <p className="text-xs text-muted">tokens</p>
            </div>
            <div className="rounded-xl border border-forge-border bg-forge-navy-deep p-5">
              <p className="text-sm text-muted">MMLU</p>
              <p className="mt-1 text-2xl font-bold text-text-primary">{model.mmlu ?? "—"}</p>
              <p className="text-xs text-muted">benchmark</p>
            </div>
            <div className="rounded-xl border border-forge-border bg-forge-navy-deep p-5">
              <p className="text-sm text-muted">Chatbot Arena</p>
              <p className="mt-1 text-2xl font-bold text-text-primary">{model.chatbot_arena ?? "—"}</p>
              <p className="text-xs text-muted">Elo</p>
            </div>
          </div>

          {model.cached_input_price != null && (
            <div className="mt-6 rounded-xl border border-forge-border bg-forge-navy-deep p-5">
              <p className="text-sm text-muted">Cached input price</p>
              <p className="mt-1 text-xl font-bold text-text-primary">{formatPrice(model.cached_input_price)}</p>
              <p className="text-xs text-muted">per 1M tokens (prompt caching)</p>
            </div>
          )}

          {data.updated_at && (
            <p className="mt-8 text-xs text-muted">Pricing data last verified: {new Date(data.updated_at).toLocaleDateString()} · Source: {model.source_url}</p>
          )}
        </div>
      </div>
    </div>
  );
}
