import { getAllItems, getItemBySlug } from "@/lib/marketplace/loader";
import GenericMarketplaceDetailPage, {
  generateMetadataForSection,
  generateStaticParamsForSection,
} from "@/components/MarketplaceDetailWrapper";

export function generateStaticParams() {
  return generateStaticParamsForSection("tips");
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return generateMetadataForSection("tips", params);
}

export default function TipPage({ params }: { params: { slug: string } }) {
  return <GenericMarketplaceDetailPage params={params} section="tips" />;
}
