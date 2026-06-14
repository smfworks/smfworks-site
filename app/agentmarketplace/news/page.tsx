import { Metadata } from "next";
import { aiNewsItems } from "@/lib/marketplace/news-data";
import AINewsClient from "@/components/AINewsClient";

export const metadata: Metadata = {
  title: "AI News — Agent Marketplace | SMF Works",
  description: "Curated AI news headlines and links covering agents, models, no-code tools, hardware, policy, and research.",
  keywords: ["AI news", "AI agents", "LLM releases", "AI policy", "AI hardware", "autonomous agents"],
  openGraph: {
    title: "AI News — Agent Marketplace",
    description: "Curated AI news headlines and links from primary sources.",
    url: "https://smfworks.com/agentmarketplace/news",
    siteName: "SMF Works",
    type: "website",
  },
};

export default function AINewsPage() {
  return <AINewsClient items={aiNewsItems} />;
}
