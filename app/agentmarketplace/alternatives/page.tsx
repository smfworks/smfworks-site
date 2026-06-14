import { Metadata } from "next";
import { getAllItems } from "@/lib/marketplace/loader";
import MarketplaceSectionClient from "@/components/MarketplaceSectionClient";

export const metadata: Metadata = {
  title: "Alternatives — Agent Marketplace | SMF Works",
  description: "Top alternatives to GitHub Copilot, Cursor, ChatGPT, Claude, and other AI tools.",
};

export default function AlternativesPage() {
  const items = getAllItems("alternatives");
  return <MarketplaceSectionClient section="alternatives" title="Alternatives" description="Replacement options for popular AI tools." items={items} />;
}
