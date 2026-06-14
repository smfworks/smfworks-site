import { getAllItems } from "@/lib/marketplace/loader";
import MarketplaceSectionClient from "@/components/MarketplaceSectionClient";

export const metadata = {
  title: "How-To Guides — Agent Marketplace",
  description: "Curated starting points and deep dives for building with autonomous AI.",
};

export default function GuidesPage() {
  const items = getAllItems("guides");
  return (
    <MarketplaceSectionClient
      items={items}
      sectionTitle="How-To Guides"
      sectionHref="/agentmarketplace/guides"
      heroImage="/images/agentmarketplace/guides-hero.svg"
    />
  );
}
