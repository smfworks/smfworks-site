import { getAllItems, getItemBySlug } from "@/lib/marketplace/loader";
import MarketplaceDetailPage from "@/components/MarketplaceDetail";

export function generateStaticParams() {
  return getAllItems("tips").map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = getItemBySlug("tips", params.slug);
  if (!item) return {};
  return {
    title: `${item.title} — Tips & Tricks`,
    description: item.excerpt,
  };
}

export default function TipPage({ params }: { params: { slug: string } }) {
  return (
    <MarketplaceDetailPage
      params={params}
      section="tips"
      sectionTitle="Tips & Tricks"
      backHref="/agentmarketplace/tips"
    />
  );
}
