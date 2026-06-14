"use client";

import Link from "next/link";
import type { AgentProfile } from "@/lib/agents";

interface AgentDetailProps {
  agent: AgentProfile;
}

export default function AgentDetail({ agent }: AgentDetailProps) {
  return (
    <div className="mx-auto max-w-4xl">
      <Link
        href="/agentmarketplace"
        className="mb-6 inline-flex items-center text-sm text-muted hover:text-data-cyan transition-colors"
      >
        ← Back to marketplace
      </Link>

      <div className="rounded-2xl border border-forge-border bg-forge-card p-8 md:p-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-forge-surface-mid text-3xl font-bold text-data-cyan">
              {agent.name.charAt(0)}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-text-primary">{agent.name}</h1>
              <p className="text-lg text-muted mt-1">{agent.company} · {agent.releaseYear}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <span
              className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
                agent.openSource
                  ? "bg-[#00E5A0]/10 text-[#00E5A0]"
                  : "bg-forge-ember/10 text-forge-ember-bright"
              }`}
            >
              {agent.pricing}
            </span>
            <span className="rounded-full bg-forge-surface-mid px-4 py-1.5 text-sm text-text-primary">
              {agent.runtime}
            </span>
          </div>
        </div>

        <p className="mt-8 text-lg leading-relaxed text-text-primary">{agent.description}</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <section>
            <h2 className="text-xl font-bold text-data-cyan mb-4">Key Features</h2>
            <ul className="space-y-3">
              {agent.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-text-primary">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-forge-ember"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-data-cyan mb-4">Deployment & Integrations</h2>
            <div className="space-y-4">
              <div>
                <span className="text-sm font-semibold text-muted">Platforms:</span>
                <div className="mt-1 flex flex-wrap gap-2">
                  {agent.platforms.map((p) => (
                    <span key={p} className="rounded-md border border-forge-border px-2 py-1 text-sm text-text-primary">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-sm font-semibold text-muted">Categories:</span>
                <div className="mt-1 flex flex-wrap gap-2">
                  {agent.categories.map((c) => (
                    <span key={c} className="rounded-md border border-forge-border px-2 py-1 text-sm text-text-primary">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {agent.model && (
                <div>
                  <span className="text-sm font-semibold text-muted">Default / featured model:</span>
                  <p className="mt-1 text-text-primary">{agent.model}</p>
                </div>
              )}
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={agent.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-data-cyan px-6 py-3 font-semibold text-forge-navy hover:bg-[#33E5FF] transition-colors"
          >
            Visit Website
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          {agent.repository && (
            <a
              href={agent.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-forge-border px-6 py-3 font-semibold text-text-primary hover:border-data-cyan hover:text-data-cyan transition-colors"
            >
              View Source
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
