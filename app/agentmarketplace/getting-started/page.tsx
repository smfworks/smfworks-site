import { getAllItems } from "@/lib/marketplace/loader";
import MarketplaceSectionClient from "@/components/MarketplaceSectionClient";

export const metadata = {
  title: "Getting Started — Agent Marketplace",
  description: "A learning path from your first agent to local self-hosting.",
};

export default function GettingStartedPage() {
  const items = getAllItems("getting-started");
  return <MarketplaceSectionClient items={items} section="getting-started" title="Getting Started" description="A learning path from your first agent to local self-hosting." />;
}
