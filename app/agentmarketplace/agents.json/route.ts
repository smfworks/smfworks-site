import { NextResponse } from "next/server";
import { getAllAgents, getAllItems } from "@/lib/marketplace/loader";
import { getLLMPricingData } from "@/lib/marketplace/llm-data";

export async function GET() {
  const agents = getAllAgents();
  const llmData = getLLMPricingData();
  const sections = [
    "services",
    "skills",
    "guides",
    "tips",
    "tests",
    "self-hosting",
    "use-cases",
    "alternatives",
    "deployment-recipes",
    "deals",
    "changelog",
    "safety",
    "getting-started",
    "lab",
  ];

  return NextResponse.json({
    site: "SMF Works Agent Marketplace",
    url: "https://smfworks.com/agentmarketplace",
    updated_at: new Date().toISOString().split("T")[0],
    feeds: {
      llms_txt: "https://smfworks.com/llms.txt",
      rss_xml: "https://smfworks.com/agentmarketplace/rss.xml",
      directory: "https://smfworks.com/agentmarketplace/directory",
    },
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
    sections: Object.fromEntries(sections.map((s) => [s, getAllItems(s)])),
  }, {
    headers: {
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
