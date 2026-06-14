import { getAllItems } from "@/lib/marketplace/loader";
import MarketplaceSectionClient from "@/components/MarketplaceSectionClient";

export const metadata = {
  title: "Skills & Addons — Agent Marketplace",
  description: "Reusable skills, MCP servers, plugins, and extensions for agent platforms.",
};

export default function SkillsPage() {
  const items = getAllItems("skills");
  return (
    <MarketplaceSectionClient
      items={items}
      sectionTitle="Skills & Addons"
      sectionHref="/agentmarketplace/skills"
      heroImage="/images/agentmarketplace/skills-hero.svg"
    />
  );
}
