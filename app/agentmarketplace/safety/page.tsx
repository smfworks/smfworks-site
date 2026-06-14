import { getAllItems } from "@/lib/marketplace/loader";
import MarketplaceSectionClient from "@/components/MarketplaceSectionClient";

export const metadata = {
  title: "AI Safety — Agent Marketplace",
  description: "Permission models, prompt injection defenses, and trust checklists for AI agents.",
};

export default function SafetyPage() {
  const items = getAllItems("safety");
  return <MarketplaceSectionClient items={items} section="safety" title="AI Safety" description="Permission models, prompt injection defenses, and trust checklists for AI agents." />;
}
