import { getAllItems } from "@/lib/marketplace/loader";
import MarketplaceSectionClient from "@/components/MarketplaceSectionClient";

export const metadata = {
  title: "Agent Changelog — Agent Marketplace",
  description: "Recent updates and release notes for leading AI agents.",
};

export default function ChangelogPage() {
  const items = getAllItems("changelog");
  return <MarketplaceSectionClient items={items} section="changelog" title="Agent Changelog" description="Recent updates and release notes for leading AI agents." />;
}
