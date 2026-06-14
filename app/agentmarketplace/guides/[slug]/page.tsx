import { getAllItems, getItemBySlug } from "@/lib/marketplace/loader";
import GenericMarketplaceDetailPage, {
  generateMetadataForSection,
  generateStaticParamsForSection,
} from "@/components/MarketplaceDetailWrapper";

export function generateStaticParams() {
  return generateStaticParamsForSection("guides");
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return generateMetadataForSection("guides", params);
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  return <GenericMarketplaceDetailPage params={params} section="guides" />;
}
