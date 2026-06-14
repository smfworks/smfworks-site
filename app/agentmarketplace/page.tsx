import { getAllAgents } from "@/lib/marketplace/loader";
import { getLLMPricingData } from "@/lib/marketplace/llm-data";
import HubClient from "@/components/HubClient";

export const metadata = {
  title: "Agent Marketplace — The AI Clearinghouse",
  description: "Your starting point for autonomous AI agents, LLMs, services, skills, and practical know-how.",
};

export default function AgentMarketplaceHub() {
  const agents = getAllAgents();
  const llmData = getLLMPricingData();
  return <HubClient agents={agents} llmModels={llmData.models} />;
}
