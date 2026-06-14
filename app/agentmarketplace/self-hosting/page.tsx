import { Metadata } from "next";
import { getAllItems } from "@/lib/marketplace/loader";
import MarketplaceSectionClient from "@/components/MarketplaceSectionClient";

export const metadata: Metadata = {
  title: "Self-Hosting — Agent Marketplace | SMF Works",
  description: "Hardware and operating system guides for self-hosting AI agents and LLMs locally.",
  keywords: ["self-hosting", "local LLM", "AI hardware", "NVIDIA", "AMD", "Intel", "Mac", "Linux", "Windows", "macOS"],
};

export default function SelfHostingPage() {
  const items = getAllItems("self-hosting");
  return (
    <MarketplaceSectionClient
      items={items}
      sectionTitle="Self-Hosting"
      sectionHref="/agentmarketplace/self-hosting"
      heroImage="/images/agentmarketplace/self-hosting-hero.svg"
    />
  );
}
