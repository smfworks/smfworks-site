import { NextResponse } from "next/server";
import { getAllAgents, getAllItems, MarketplaceItem } from "@/lib/marketplace/loader";
import { getLLMPricingData } from "@/lib/marketplace/llm-data";
import { formatNumber } from "@/lib/marketplace/format";

function itemList(items: MarketplaceItem[], section: string) {
  return items
    .map((i) => `- ${i.title}\n  URL: https://smfworks.com/agentmarketplace/${section}/${i.slug}\n  Category: ${i.category}\n  Tags: ${i.tags.join(", ")}\n  Summary: ${i.excerpt}`)
    .join("\n\n");
}

export async function GET() {
  const agents = getAllAgents();
  const llmData = getLLMPricingData();
  const services = getAllItems("services");
  const skills = getAllItems("skills");
  const guides = getAllItems("guides");
  const tips = getAllItems("tips");
  const tests = getAllItems("tests");
  const selfHosting = getAllItems("self-hosting");
  const useCases = getAllItems("use-cases");
  const alternatives = getAllItems("alternatives");
  const deploymentRecipes = getAllItems("deployment-recipes");
  const deals = getAllItems("deals");
  const changelog = getAllItems("changelog");
  const safety = getAllItems("safety");
  const gettingStarted = getAllItems("getting-started");
  const lab = getAllItems("lab");

  const body = `# SMF Works Agent Marketplace — Machine-Readable Manifest
> Source: https://smfworks.com/llms.txt
> Operator: SMF Works
> Purpose: Curated directory of autonomous AI agents, LLMs, vendor services, skills, guides, tips, tests, self-hosting, use cases, alternatives, deployment recipes, deals, changelog, safety, getting started, and SMF Works Lab resources.
> Last updated: ${new Date().toISOString().split("T")[0]}

## 1. Canonical Resources

| Resource | URL | Format |
|---|---|---|
| Marketplace hub | https://smfworks.com/agentmarketplace | HTML |
| Site directory | https://smfworks.com/agentmarketplace/directory | HTML |
| Agent directory | https://smfworks.com/agentmarketplace/agents | HTML |
| LLM pricing | https://smfworks.com/agentmarketplace/llms | HTML |
| Services | https://smfworks.com/agentmarketplace/services | HTML |
| Skills | https://smfworks.com/agentmarketplace/skills | HTML |
| Guides | https://smfworks.com/agentmarketplace/guides | HTML |
| Tips | https://smfworks.com/agentmarketplace/tips | HTML |
| Tests | https://smfworks.com/agentmarketplace/tests | HTML |
| AI News | https://smfworks.com/agentmarketplace/news | HTML |
| Self-Hosting | https://smfworks.com/agentmarketplace/self-hosting | HTML |
| Use Cases | https://smfworks.com/agentmarketplace/use-cases | HTML |
| Alternatives | https://smfworks.com/agentmarketplace/alternatives | HTML |
| Deployment Recipes | https://smfworks.com/agentmarketplace/deployment-recipes | HTML |
| Vendor Deals | https://smfworks.com/agentmarketplace/deals | HTML |
| Agent Changelog | https://smfworks.com/agentmarketplace/changelog | HTML |
| AI Safety | https://smfworks.com/agentmarketplace/safety | HTML |
| Getting Started | https://smfworks.com/agentmarketplace/getting-started | HTML |
| Benchmark Leaderboard | https://smfworks.com/agentmarketplace/benchmarks | HTML |
| Cost Calculator | https://smfworks.com/agentmarketplace/cost-calculator | HTML |
| Model Compatibility | https://smfworks.com/agentmarketplace/model-compatibility | HTML |
| Integration Matrix | https://smfworks.com/agentmarketplace/integration-matrix | HTML |
| RSS Feed | https://smfworks.com/agentmarketplace/rss.xml | RSS |
| The Lab | https://smfworks.com/agentmarketplace/lab | HTML |
| Agent catalog JSON | https://smfworks.com/agentmarketplace/agents.json | JSON |
| This manifest | https://smfworks.com/llms.txt | text/markdown |

## 2. Site-Wide Conventions

- All marketplace item URLs follow the pattern: https://smfworks.com/agentmarketplace/{section}/{slug}
- Agent URLs follow: https://smfworks.com/agentmarketplace/{agent_id}
- Comparison mode for agents accepts a query string: ?compare={agent_id_1},{agent_id_2},{agent_id_3}
- SMF Works does not sell services listed in the Services section; each listing links to the external vendor.
- LLM pricing is manually verified and includes a \`last_verified\` date; verify current vendor pricing before relying on it.

## 3. Agents (${agents.length})

${agents.map((a) => `- ${a.name}\n  URL: https://smfworks.com/agentmarketplace/${a.id}\n  Company: ${a.company}\n  Pricing: ${a.pricing}\n  Runtime: ${a.runtime}\n  Open source: ${a.openSource ? "yes" : "no"}\n  Multi-platform: ${a.multiPlatform ? "yes" : "no"}\n  Provider-agnostic: ${a.providerAgnostic ? "yes" : "no"}\n  Categories: ${a.categories.join(", ")}\n  Platforms: ${a.platforms.join(", ")}\n  Model: ${a.model || "varies"}\n  Summary: ${a.tagline}\n  Website: ${a.website}`).join("\n\n")}

## 4. LLM Models (${llmData.models.length})

${llmData.models.map((m) => `- ${m.model}\n  URL: https://smfworks.com/agentmarketplace/llms/${m.model_id.replace(/[^a-z0-9]+/g, "-").toLowerCase()}\n  Provider: ${m.provider}\n  Model ID: ${m.model_id}\n  Input price: ${m.input_price}\n  Output price: ${m.output_price}\n  Context window: ${formatNumber(m.context_window)} tokens\n  Max output tokens: ${m.max_output_tokens ? formatNumber(m.max_output_tokens) : "—"}\n  MMLU: ${m.mmlu ?? "—"}\n  Chatbot Arena Elo: ${m.chatbot_arena ?? "—"}\n  Notes: ${m.notes}`).join("\n\n")}

## 5. Vendor Services (${services.length})

${itemList(services, "services")}

## 6. Skills (${skills.length})

${itemList(skills, "skills")}

## 7. Guides (${guides.length})

${itemList(guides, "guides")}

## 8. Tips (${tips.length})

${itemList(tips, "tips")}

## 9. Tests (${tests.length})

${itemList(tests, "tests")}

## 10. Self-Hosting (${selfHosting.length})

${itemList(selfHosting, "self-hosting")}

## 11. Use Cases (${useCases.length})

${itemList(useCases, "use-cases")}

## 12. Alternatives (${alternatives.length})

${itemList(alternatives, "alternatives")}

## 13. Deployment Recipes (${deploymentRecipes.length})

${itemList(deploymentRecipes, "deployment-recipes")}

## 14. Vendor Deals (${deals.length})

${itemList(deals, "deals")}

## 15. Agent Changelog (${changelog.length})

${itemList(changelog, "changelog")}

## 16. AI Safety (${safety.length})

${itemList(safety, "safety")}

## 17. Getting Started (${gettingStarted.length})

${itemList(gettingStarted, "getting-started")}

## 18. The Lab (${lab.length})

${itemList(lab, "lab")}

## 19. Search

The marketplace hub at https://smfworks.com/agentmarketplace supports cross-section search across agents, LLMs, services, skills, guides, tips, tests, self-hosting, use cases, alternatives, deployment recipes, deals, changelog, safety, getting started, and the lab via an in-page search input.

## 20. Comparison Tool

The agent directory supports side-by-side comparison of up to 3 agents. Seed a comparison from any agent detail page using the "+ Compare" link, or construct URLs like:
https://smfworks.com/agentmarketplace/agents?compare=claude-code,cursor,github-copilot

## 20. Human Contact

- Site: https://smfworks.com
- Contact: https://smfworks.com/contact
- This is a content directory; no API access, credentials, OAuth tokens, or automated fulfillment is provided.
`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
