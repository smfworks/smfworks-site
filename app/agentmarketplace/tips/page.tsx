import { getAllItems } from "@/lib/marketplace/loader";
import MarketplaceSectionClient from "@/components/MarketplaceSectionClient";

export const metadata = {
  title: "Tips & Tricks — Agent Marketplace",
  description: "Bite-sized advice to level up your agent workflow.",
};

export default function TipsPage() {
  const items = getAllItems("tips");
  return <MarketplaceSectionClient items={items} section="tips" title="Tips & Tricks" description="Bite-sized advice to level up your agent workflow." />;
}
