import { notFound } from "next/navigation";
import AgentDetail from "@/components/AgentDetail";
import { getAgentBySlug, getAllAgents } from "@/lib/marketplace/loader";

export function generateStaticParams() {
  return getAllAgents().map((agent) => ({ id: agent.id }));
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
