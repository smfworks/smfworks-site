import { getAllItems, getItemBySlug } from "@/lib/marketplace/loader";
import GenericMarketplaceDetailPage, {
  generateMetadataForSection,
  generateStaticParamsForSection,
} from "@/components/MarketplaceDetailWrapper";

export function generateStaticParams() {
  return generateStaticParamsForSection("services");
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return generateMetadataForSection("services", params);
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  return <GenericMarketplaceDetailPage params={params} section="services" />;
}
