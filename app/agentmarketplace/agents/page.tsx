import { getAllAgents, getAgentCategories, getAgentPricings, getAgentRuntimes } from "@/lib/marketplace/loader";
import AgentsDirectoryClient from "@/components/AgentsDirectoryClient";

export const metadata = {
  title: "Agent Directory — Agent Marketplace",
  description: "Compare autonomous AI agents side-by-side.",
};

export default function AgentsDirectoryPage() {
  const agents = getAllAgents();
  const categories = getAgentCategories();
  const runtimes = getAgentRuntimes();
  const pricings = getAgentPricings();
  const platforms = Array.from(new Set(agents.flatMap((a) => a.platforms))).sort();

  return (
    <AgentsDirectoryClient
      agents={agents}
      categories={categories}
      runtimes={runtimes}
      pricings={pricings}
      platforms={platforms}
    />
  );
}
