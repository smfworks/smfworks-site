import { notFound } from "next/navigation";
import { getAgentBySlug } from "@/lib/marketplace/loader";
import AgentDetail from "@/components/AgentDetail";

interface AgentPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { getAllAgents } = await import("@/lib/marketplace/loader");
  return getAllAgents().map((a) => ({ slug: a.id }));
}

export async function generateMetadata({ params }: AgentPageProps) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) return { title: "Agent Not Found" };
  return {
    title: `${agent.name} — SMF Works Agent Marketplace`,
    description: agent.tagline,
  };
}

export default async function AgentDetailPage({ params }: AgentPageProps) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  if (!agent) notFound();
  return (
    <div className="min-h-screen bg-forge-navy py-12">
      <AgentDetail agent={agent} />
    </div>
  );
}
