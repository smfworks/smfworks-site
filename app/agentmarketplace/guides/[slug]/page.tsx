import { getAllItems, getItemBySlug } from "@/lib/marketplace/loader";
import MarketplaceDetailPage from "@/components/MarketplaceDetail";

export function generateStaticParams() {
  return getAllItems("guides").map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = getItemBySlug("guides", params.slug);
  if (!item) return {};
  return {
    title: `${item.title} — How-To Guides`,
    description: item.excerpt,
  };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  return (
    <MarketplaceDetailPage
      params={params}
      section="guides"
      sectionTitle="How-To Guides"
      backHref="/agentmarketplace/guides"
    />
  );
}
