import { getAllItems, getItemBySlug } from "@/lib/marketplace/loader";
import GenericMarketplaceDetailPage, {
  generateMetadataForSection,
  generateStaticParamsForSection,
} from "@/components/MarketplaceDetailWrapper";

export function generateStaticParams() {
  return generateStaticParamsForSection("tests");
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return generateMetadataForSection("tests", params);
}

export default function TestPage({ params }: { params: { slug: string } }) {
  return <GenericMarketplaceDetailPage params={params} section="tests" />;
}
