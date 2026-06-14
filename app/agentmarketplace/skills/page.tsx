import { getAllItems } from "@/lib/marketplace/loader";
import MarketplaceSectionClient from "@/components/MarketplaceSectionClient";

export const metadata = {
  title: "Skills & Addons — Agent Marketplace",
  description: "Reusable skills, MCP servers, plugins, and extensions for agent platforms.",
};

export default function SkillsPage() {
  const items = getAllItems("skills");
  return <MarketplaceSectionClient items={items} section="skills" title="Skills & Addons" description="Reusable skills, MCP servers, plugins, and extensions for agent platforms." />;
}
