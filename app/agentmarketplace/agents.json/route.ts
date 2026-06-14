import { NextResponse } from "next/server";
import { getAllAgents, getAllItems } from "@/lib/marketplace/loader";
import { getLLMPricingData } from "@/lib/marketplace/llm-data";

export async function GET() {
  const agents = getAllAgents();
  const llmData = getLLMPricingData();
  const services = getAllItems("services");
  const skills = getAllItems("skills");
  const guides = getAllItems("guides");
  const tips = getAllItems("tips");
  const tests = getAllItems("tests");
  const selfHosting = getAllItems("self-hosting");

  return NextResponse.json({
    site: "SMF Works Agent Marketplace",
    url: "https://smfworks.com/agentmarketplace",
    updated_at: new Date().toISOString().split("T")[0],
    sections: {
      agents: agents.map((a) => ({
        id: a.id,
        name: a.name,
        url: `https://smfworks.com/agentmarketplace/${a.id}`,
        company: a.company,
        pricing: a.pricing,
        runtime: a.runtime,
        open_source: a.openSource,
        multi_platform: a.multiPlatform,
        provider_agnostic: a.providerAgnostic,
        categories: a.categories,
        platforms: a.platforms,
        model: a.model,
        tagline: a.tagline,
        website: a.website,
      })),
      llms: llmData.models,
      services,
      skills,
      guides,
      tips,
      tests,
      self_hosting: selfHosting,
    },
  }, {
    headers: {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
