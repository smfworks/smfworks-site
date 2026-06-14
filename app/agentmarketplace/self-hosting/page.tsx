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
  return <MarketplaceSectionClient items={items} section="self-hosting" title="Self-Hosting" description="Hardware and operating system guides for running agents and LLMs locally." />;
}
