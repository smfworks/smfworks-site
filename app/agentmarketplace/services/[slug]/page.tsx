import { getAllItems, getItemBySlug, MarketplaceItem } from "@/lib/marketplace/loader";
import MarketplaceDetailPage from "@/components/MarketplaceDetail";

export function generateStaticParams() {
  return getAllItems("services").map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = getItemBySlug("services", params.slug);
  if (!item) return {};
  return {
    title: `${item.title} — Services`,
    description: item.excerpt,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  return (
    <MarketplaceDetailPage
      params={params}
      section="services"
      sectionTitle="Services"
      backHref="/agentmarketplace/services"
    />
  );
}
