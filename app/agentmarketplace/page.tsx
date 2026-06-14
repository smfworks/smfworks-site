import { Metadata } from "next";
import { getAllAgents } from "@/lib/marketplace/loader";
import { getLLMPricingData } from "@/lib/marketplace/llm-data";
import { getAllItems } from "@/lib/marketplace/loader";
import HubClient from "@/components/HubClient";

export const metadata: Metadata = {
  title: "Agent Marketplace — The AI Clearinghouse | SMF Works",
  description: "Compare autonomous AI agents, LLM pricing, vendor services, skills, guides, tips, and benchmark tests. A curated directory for developers and teams adopting AI agents.",
  keywords: ["AI agents", "autonomous agents", "LLM pricing", "AI tools", "AI services", "coding agents", "agent comparison"],
  openGraph: {
    title: "Agent Marketplace — The AI Clearinghouse",
    description: "Compare autonomous AI agents, LLM pricing, vendor services, skills, guides, and tests.",
    url: "https://smfworks.com/agentmarketplace",
    siteName: "SMF Works",
    images: ["/images/agentmarketplace/og-marketplace.png"],
    type: "website",
  },
};

export default function AgentMarketplaceHub() {
  const agents = getAllAgents();
  const llmData = getLLMPricingData();
  const services = getAllItems("services");
  const skills = getAllItems("skills");
  const guides = getAllItems("guides");
  const tips = getAllItems("tips");
  const tests = getAllItems("tests");
  const selfHosting = getAllItems("self-hosting");

  return (
    <HubClient
      agents={agents}
      llmModels={llmData.models}
      services={services}
      skills={skills}
      guides={guides}
      tips={tips}
      tests={tests}
      selfHosting={selfHosting}
    />
  );
}
