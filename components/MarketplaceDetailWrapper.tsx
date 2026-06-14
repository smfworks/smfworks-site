import { Metadata } from "next";
import { getAllItems, getItemBySlug, MarketplaceItem } from "@/lib/marketplace/loader";
import MarketplaceDetailPage from "@/components/MarketplaceDetail";

const sectionNames: Record<string, string> = {
  services: "Services",
  skills: "Skills & Addons",
  guides: "How-To Guides",
  tips: "Tips & Tricks",
  tests: "Test Results",
};

const sectionPaths: Record<string, string> = {
  services: "/agentmarketplace/services",
  skills: "/agentmarketplace/skills",
  guides: "/agentmarketplace/guides",
  tips: "/agentmarketplace/tips",
  tests: "/agentmarketplace/tests",
};

interface PageProps {
  params: { slug: string };
  section: string;
}

export function generateStaticParamsForSection(section: string) {
  return getAllItems(section).map((item) => ({ slug: item.slug }));
}

export function generateMetadataForSection(section: string, params: { slug: string }): Metadata {
  const item = getItemBySlug(section, params.slug);
  if (!item) return {};
  const sectionName = sectionNames[section] || section;
  return {
    title: `${item.title} — ${sectionName} | SMF Works`,
    description: item.excerpt,
    keywords: [item.title, sectionName, ...item.tags],
    openGraph: {
      title: `${item.title} — ${sectionName}`,
      description: item.excerpt,
      url: `https://smfworks.com${sectionPaths[section]}/${item.slug}`,
      siteName: "SMF Works",
      type: "article",
    },
  };
}

export default function GenericMarketplaceDetailPage({ params, section }: PageProps) {
  return (
    <MarketplaceDetailPage
      params={params}
      section={section}
      sectionTitle={sectionNames[section] || section}
      backHref={sectionPaths[section] || `/agentmarketplace/${section}`}
    />
  );
}
