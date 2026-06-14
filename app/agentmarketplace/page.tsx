import { Metadata } from "next";
import { getAllAgents, getAllItems } from "@/lib/marketplace/loader";
import { getLLMPricingData } from "@/lib/marketplace/llm-data";
import HubClient from "@/components/HubClient";

export const metadata: Metadata = {
  title: "Agent Marketplace — The AI Clearinghouse | SMF Works",
  description: "Compare autonomous AI agents, LLM pricing, vendor services, skills, guides, tips, tests, benchmarks, use cases, alternatives, deployment recipes, and self-hosting options.",
  keywords: ["AI agents", "autonomous agents", "LLM pricing", "AI tools", "AI services", "coding agents", "agent comparison", "self-hosting", "agent safety"],
  openGraph: {
    title: "Agent Marketplace — The AI Clearinghouse",
    description: "Compare autonomous AI agents, LLM pricing, vendor services, skills, guides, tests, use cases, alternatives, and deployment recipes.",
    url: "https://smfworks.com/agentmarketplace",
    siteName: "SMF Works",
    images: ["/images/agentmarketplace/og-marketplace.png"],
    type: "website",
  },
};

export default function AgentMarketplaceHub() {
  const agents = getAllAgents();
  const llmData = getLLMPricingData();
  const genericItems = {
    services: getAllItems("services"),
    skills: getAllItems("skills"),
    guides: getAllItems("guides"),
    tips: getAllItems("tips"),
    tests: getAllItems("tests"),
    "self-hosting": getAllItems("self-hosting"),
    "use-cases": getAllItems("use-cases"),
    alternatives: getAllItems("alternatives"),
    "deployment-recipes": getAllItems("deployment-recipes"),
    deals: getAllItems("deals"),
    changelog: getAllItems("changelog"),
    safety: getAllItems("safety"),
    "getting-started": getAllItems("getting-started"),
  };

  return (
    <HubClient
      agents={agents}
      llmModels={llmData.models}
      genericItems={genericItems}
    />
  );
}
