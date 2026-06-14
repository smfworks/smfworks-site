import { getAllItems } from "@/lib/marketplace/loader";
import MarketplaceSectionClient from "@/components/MarketplaceSectionClient";

export const metadata = {
  title: "Test Results — Agent Marketplace",
  description: "Real-world benchmark reports measuring agents against practical tasks.",
};

export default function TestsPage() {
  const items = getAllItems("tests");
  return (
    <MarketplaceSectionClient
      items={items}
      sectionTitle="Test Results"
      sectionHref="/agentmarketplace/tests"
      heroImage="/images/agentmarketplace/tests-hero.svg"
    />
  );
}
