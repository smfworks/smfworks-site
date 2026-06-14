import Link from "next/link";
import type { AgentProfile } from "@/lib/marketplace/loader";

interface AgentCardProps {
  agent: AgentProfile;
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <Link href={`/agentmarketplace/${agent.id}`}>
      <article className="group h-full rounded-xl border border-forge-border bg-forge-card p-6 transition-all hover:border-data-cyan/40 hover:shadow-lg hover:shadow-data-cyan/10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-forge-surface-mid text-lg font-bold text-data-cyan">
              {agent.name.charAt(0)}
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary group-hover:text-data-cyan transition-colors">
                {agent.name}
              </h3>
              <p className="text-sm text-muted">{agent.company}</p>
            </div>
          </div>
          <span
            className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
              agent.openSource
                ? "bg-[#00E5A0]/10 text-[#00E5A0]"
                : "bg-forge-ember/10 text-forge-ember-bright"
            }`}
          >
            {agent.pricing}
          </span>
        </div>

        <p className="mt-4 text-sm text-text-primary line-clamp-2">{agent.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-md bg-forge-surface-mid px-2 py-1 text-xs text-muted">
            {agent.runtime}
          </span>
          {agent.model && (
            <span className="rounded-md bg-forge-surface-mid px-2 py-1 text-xs text-muted">
              {agent.model}
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {agent.categories.slice(0, 3).map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-forge-border px-2.5 py-0.5 text-xs text-text-muted"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 text-xs text-muted">
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.477 0-4.758.18-6.843.502m15.686 0c.973 1.168 1.646 2.549 1.958 4.04" />
            </svg>
            {agent.platforms.slice(0, 3).join(", ")}
          </span>
        </div>
      </article>
    </Link>
  );
}
