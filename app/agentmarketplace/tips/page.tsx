import { getAllItems } from "@/lib/marketplace/loader";
import MarketplaceSectionClient from "@/components/MarketplaceSectionClient";

export const metadata = {
  title: "Tips & Tricks — Agent Marketplace",
  description: "Bite-sized advice to make your agent workflow safer, cheaper, and more productive.",
};

export default function TipsPage() {
  const items = getAllItems("tips");
  return (
    <MarketplaceSectionClient
      items={items}
      sectionTitle="Tips & Tricks"
      sectionHref="/agentmarketplace/tips"
      heroImage="/images/agentmarketplace/tips-hero.svg"
    />
  );
}
