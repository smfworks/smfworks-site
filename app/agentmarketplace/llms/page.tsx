import { getLLMPricingData } from "@/lib/marketplace/llm-data";
import LLMSectionClient from "@/components/LLMSectionClient";

export const metadata = {
  title: "LLM Pricing & Benchmarks — Agent Marketplace",
  description: "Compare costs, context windows, and benchmark scores across leading models.",
};

export default function LLMPage() {
  const data = getLLMPricingData();
  return <LLMSectionClient models={data.models} updatedAt={data.updated_at} />;
}
