import { getAllItems } from "@/lib/marketplace/loader";
import MarketplaceSectionClient from "@/components/MarketplaceSectionClient";

export const metadata = {
  title: "Vendor Deals — Agent Marketplace",
  description: "Credits, startup programs, and free tiers from AI vendors.",
};

export default function DealsPage() {
  const items = getAllItems("deals");
  return <MarketplaceSectionClient items={items} section="deals" title="Vendor Deals" description="Credits, startup programs, and free tiers from AI vendors." />;
}
