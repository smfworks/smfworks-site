import { getAllItems } from "@/lib/marketplace/loader";
import GenericMarketplaceDetailPage, {
  generateMetadataForSection,
  generateStaticParamsForSection,
} from "@/components/MarketplaceDetailWrapper";

export function generateStaticParams() {
  return generateStaticParamsForSection("self-hosting");
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return generateMetadataForSection("self-hosting", params);
}

export default function SelfHostingDetailPage({ params }: { params: { slug: string } }) {
  return <GenericMarketplaceDetailPage params={params} section="self-hosting" />;
}
