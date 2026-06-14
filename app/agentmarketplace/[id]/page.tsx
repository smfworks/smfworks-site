import { Metadata } from "next";
import { notFound } from "next/navigation";
import AgentDetail from "@/components/AgentDetail";
import { getAgentBySlug, getAllAgents } from "@/lib/marketplace/loader";

export function generateStaticParams() {
  return getAllAgents().map((agent) => ({ id: agent.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const agent = getAgentBySlug(params.id);
  if (!agent) return {};
  return {
    title: `${agent.name} — Agent Marketplace | SMF Works`,
    description: `${agent.tagline} Built by ${agent.company}. Pricing: ${agent.pricing}. Runtime: ${agent.runtime}. Categories: ${agent.categories.join(", ")}.`,
    keywords: [agent.name, agent.company, "AI agent", ...agent.categories, agent.runtime, agent.pricing],
    openGraph: {
      title: `${agent.name} — Autonomous AI Agent`,
      description: agent.tagline,
      url: `https://smfworks.com/agentmarketplace/${agent.id}`,
      siteName: "SMF Works",
      type: "article",
    },
  };
}

export default function AgentPage({ params }: { params: { id: string } }) {
  const agent = getAgentBySlug(params.id);
  if (!agent) notFound();

  return (
    <div className="min-h-screen bg-forge-navy px-6 py-12">
      <AgentDetail agent={agent} />
    </div>
  );
}
