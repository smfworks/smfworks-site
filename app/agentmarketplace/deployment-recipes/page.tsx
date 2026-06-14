import { Metadata } from "next";
import { getAllItems } from "@/lib/marketplace/loader";
import MarketplaceSectionClient from "@/components/MarketplaceSectionClient";

export const metadata: Metadata = {
  title: "Deployment Recipes — Agent Marketplace | SMF Works",
  description: "Copy-paste deployment recipes for Ollama, Open WebUI, Cline, and other agent stacks.",
};

export default function DeploymentRecipesPage() {
  const items = getAllItems("deployment-recipes");
  return <MarketplaceSectionClient section="deployment-recipes" title="Deployment Recipes" description="Get agents and LLMs running locally or in the cloud." items={items} />;
}
