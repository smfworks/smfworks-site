import { Metadata } from "next";
import { getAllItems, getItemBySlug } from "@/lib/marketplace/loader";
import MarketplaceDetailPage from "@/components/MarketplaceDetail";

const sectionNames: Record<string, string> = {
  services: "Services",
  skills: "Skills & Addons",
  guides: "How-To Guides",
  tips: "Tips & Tricks",
  tests: "Test Results",
  "self-hosting": "Self-Hosting",
  "use-cases": "Use Cases",
  alternatives: "Alternatives",
  "deployment-recipes": "Deployment Recipes",
  deals: "Vendor Deals",
  changelog: "Agent Changelog",
  safety: "AI Safety",
  "getting-started": "Getting Started",
  lab: "The Lab",
};

export function generateStaticParamsForSection(section: string) {
  return getAllItems(section).map((item) => ({ slug: item.slug }));
}

export async function generateMetadataForSection(
  section: string,
  params: Promise<{ slug: string }>
): Promise<Metadata> {
  const { slug } = await params;
  const item = getItemBySlug(section, slug);
  if (!item) return {};
  const sectionName = sectionNames[section] || section;
  return {
    title: `${item.title} — ${sectionName} | SMF Works`,
    description: item.excerpt,
    keywords: [item.title, sectionName, ...item.tags],
    openGraph: {
      title: `${item.title} — ${sectionName}`,
      description: item.excerpt,
      url: `https://smfworks.com/agentmarketplace/${section}/${item.slug}`,
      siteName: "SMF Works",
      type: "article",
    },
  };
}

export default async function GenericMarketplaceDetailPage({
  params,
  section,
}: {
  params: Promise<{ slug: string }>;
  section: string;
}) {
  const { slug } = await params;
  const item = getItemBySlug(section, slug);
  return (
    <MarketplaceDetailPage
      item={item}
      section={section}
      sectionTitle={sectionNames[section] || section}
      backHref={`/agentmarketplace/${section}`}
    />
  );
}
