import { Suspense } from "react";
import { getAllAgents, getAgentCategories, getAgentPricings, getAgentRuntimes } from "@/lib/marketplace/loader";
import AgentsDirectoryClient from "@/components/AgentsDirectoryClient";

export const metadata = {
  title: "Agent Directory — Agent Marketplace",
  description: "Compare autonomous AI agents side-by-side. Filter by category, runtime, and pricing.",
};

export default function AgentsDirectoryPage() {
  const agents = getAllAgents();
  const categories = getAgentCategories();
  const runtimes = getAgentRuntimes();
  const pricings = getAgentPricings();
  const platforms = Array.from(new Set(agents.flatMap((a) => a.platforms))).sort();

  return (
    <Suspense fallback={<div className="min-h-screen bg-forge-navy flex items-center justify-center text-muted">Loading agent directory...</div>}>
      <AgentsDirectoryClient
        agents={agents}
        categories={categories}
        runtimes={runtimes}
        pricings={pricings}
        platforms={platforms}
      />
    </Suspense>
  );
}
