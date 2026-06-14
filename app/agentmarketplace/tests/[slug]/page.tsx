import { getAllItems, getItemBySlug } from "@/lib/marketplace/loader";
import MarketplaceDetailPage from "@/components/MarketplaceDetail";

export function generateStaticParams() {
  return getAllItems("tests").map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = getItemBySlug("tests", params.slug);
  if (!item) return {};
  return {
    title: `${item.title} — Test Results`,
    description: item.excerpt,
  };
}

export default function TestPage({ params }: { params: { slug: string } }) {
  return (
    <MarketplaceDetailPage
      params={params}
      section="tests"
      sectionTitle="Test Results"
      backHref="/agentmarketplace/tests"
    />
  );
}
