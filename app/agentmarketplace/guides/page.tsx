import { getAllItems } from "@/lib/marketplace/loader";
import MarketplaceSectionClient from "@/components/MarketplaceSectionClient";

export const metadata = {
  title: "How-To Guides — Agent Marketplace",
  description: "Curated starting points and deep dives for adopting AI agents.",
};

export default function GuidesPage() {
  const items = getAllItems("guides");
  return <MarketplaceSectionClient items={items} section="guides" title="How-To Guides" description="Curated starting points and deep dives for adopting AI agents." />;
}
