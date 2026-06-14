import { getAllItems } from "@/lib/marketplace/loader";
import MarketplaceSectionClient from "@/components/MarketplaceSectionClient";

export const metadata = {
  title: "Test Results — Agent Marketplace",
  description: "Real-world benchmark reports from SMF Works and the community.",
};

export default function TestsPage() {
  const items = getAllItems("tests");
  return <MarketplaceSectionClient items={items} section="tests" title="Test Results" description="Real-world benchmark reports from SMF Works and the community." />;
}
