import { notFound } from "next/navigation";
import AgentDetail from "@/components/AgentDetail";
import { agents } from "@/lib/agents";

export function generateStaticParams() {
  return agents.map((agent) => ({ id: agent.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const agent = agents.find((a) => a.id === params.id);
  if (!agent) return {};
  return {
    title: `${agent.name} — Agent Marketplace`,
    description: agent.tagline,
  };
}

export default function AgentPage({ params }: { params: { id: string } }) {
  const agent = agents.find((a) => a.id === params.id);
  if (!agent) notFound();

  return (
    <div className="min-h-screen bg-forge-navy px-6 py-12">
      <AgentDetail agent={agent} />
    </div>
  );
}
