import { getAllItems } from "@/lib/marketplace/loader";
import MarketplaceSectionClient from "@/components/MarketplaceSectionClient";

export const metadata = {
  title: "Services — Agent Marketplace",
  description: "Consulting, hosting, security audits, and hybrid services for autonomous AI.",
};

export default function ServicesPage() {
  const items = getAllItems("services");
  return (
    <MarketplaceSectionClient
      items={items}
      sectionTitle="AI Services"
      sectionHref="/agentmarketplace/services"
      heroImage="/images/agentmarketplace/services-hero.svg"
    />
  );
}
