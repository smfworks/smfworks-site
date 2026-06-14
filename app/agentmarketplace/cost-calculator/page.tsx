import { Metadata } from "next";
import { getLLMPricingData } from "@/lib/marketplace/llm-data";
import CostCalculatorClient from "@/components/CostCalculatorClient";

export const metadata: Metadata = {
  title: "Cost Calculator — Agent Marketplace | SMF Works",
  description: "Estimate LLM token spend across marketplace models with usage presets.",
};

export default function CostCalculatorPage() {
  const { models } = getLLMPricingData();
  return <CostCalculatorClient models={models} />;
}
