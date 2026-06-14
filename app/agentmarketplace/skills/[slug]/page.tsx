import { getAllItems, getItemBySlug } from "@/lib/marketplace/loader";
import GenericMarketplaceDetailPage, {
  generateMetadataForSection,
  generateStaticParamsForSection,
} from "@/components/MarketplaceDetailWrapper";

export function generateStaticParams() {
  return generateStaticParamsForSection("skills");
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  return generateMetadataForSection("skills", params);
}

export default function SkillPage({ params }: { params: { slug: string } }) {
  return <GenericMarketplaceDetailPage params={params} section="skills" />;
}
