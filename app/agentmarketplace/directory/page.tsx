import { Metadata } from "next";
import { getAllAgents } from "@/lib/marketplace/loader";
import { getLLMPricingData } from "@/lib/marketplace/llm-data";
import { getAllItems, MarketplaceItem } from "@/lib/marketplace/loader";

export const metadata: Metadata = {
  title: "Site Directory — Agent Marketplace | SMF Works",
  description: "A human-readable directory of every section, agent, LLM, service, skill, guide, tip, test, and news item in the Agent Marketplace.",
};

interface Section {
  name: string;
  href: string;
  count: number;
  items?: { title: string; href: string; excerpt: string }[];
}

export default function DirectoryPage() {
  const agents = getAllAgents();
  const llmModels = getLLMPricingData().models;
  const services = getAllItems("services");
  const skills = getAllItems("skills");
  const guides = getAllItems("guides");
  const tips = getAllItems("tips");
  const tests = getAllItems("tests");

  const selfHosting = getAllItems("self-hosting");

  const sections: Section[] = [
    {
      name: "Agent Directory",
      href: "/agentmarketplace/agents",
      count: agents.length,
      items: agents.map((a) => ({ title: a.name, href: `/agentmarketplace/${a.id}`, excerpt: a.tagline })),
    },
    {
      name: "LLM Pricing",
      href: "/agentmarketplace/llms",
      count: llmModels.length,
      items: llmModels.map((m) => ({ title: m.model, href: `/agentmarketplace/llms/${m.model_id.replace(/[^a-z0-9]+/g, "-").toLowerCase()}`, excerpt: m.notes })),
    },
    {
      name: "Services",
      href: "/agentmarketplace/services",
      count: services.length,
      items: mapItems(services, "services"),
    },
    {
      name: "Skills & Addons",
      href: "/agentmarketplace/skills",
      count: skills.length,
      items: mapItems(skills, "skills"),
    },
    {
      name: "How-To Guides",
      href: "/agentmarketplace/guides",
      count: guides.length,
      items: mapItems(guides, "guides"),
    },
    {
      name: "Tips & Tricks",
      href: "/agentmarketplace/tips",
      count: tips.length,
      items: mapItems(tips, "tips"),
    },
    {
      name: "Test Results",
      href: "/agentmarketplace/tests",
      count: tests.length,
      items: mapItems(tests, "tests"),
    },
    {
      name: "Self-Hosting",
      href: "/agentmarketplace/self-hosting",
      count: selfHosting.length,
      items: mapItems(selfHosting, "self-hosting"),
    },
    {
      name: "AI News",
      href: "/agentmarketplace/news",
      count: 0,
    },
  ];

  return (
    <div className="min-h-screen bg-forge-navy px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-extrabold text-text-primary md:text-5xl">Site Directory</h1>
        <p className="mt-4 text-lg text-muted">
          A complete index of the Agent Marketplace. For machine-readable access, see{" "}
          <a href="/llms.txt" className="text-data-cyan hover:underline">/llms.txt</a>.
        </p>

        <div className="mt-12 space-y-12">
          {sections.map((section) => (
            <section key={section.name} className="rounded-2xl border border-forge-border bg-forge-card p-6 md:p-8">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-text-primary">{section.name}</h2>
                <span className="rounded-full bg-forge-surface-mid px-3 py-1 text-sm text-muted">{section.count} items</span>
              </div>
              <p className="mb-4 text-sm text-muted">Browse at <a href={section.href} className="text-data-cyan hover:underline">{section.href}</a></p>
              {section.items && section.items.length > 0 && (
                <ul className="grid gap-3 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} className="group block rounded-lg border border-forge-border bg-forge-navy-deep p-3 hover:border-data-cyan">
                        <span className="font-semibold text-text-primary group-hover:text-data-cyan">{item.title}</span>
                        <p className="mt-1 line-clamp-2 text-xs text-muted">{item.excerpt}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

function mapItems(items: MarketplaceItem[], section: string) {
  return items.map((i) => ({ title: i.title, href: `/agentmarketplace/${section}/${i.slug}`, excerpt: i.excerpt }));
}
