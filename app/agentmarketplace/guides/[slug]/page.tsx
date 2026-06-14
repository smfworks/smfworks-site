import GenericMarketplaceDetailPage, {
  generateMetadataForSection,
  generateStaticParamsForSection,
} from "@/components/MarketplaceDetailWrapper";

const section = "guides";

export const generateStaticParams = () => generateStaticParamsForSection(section);
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return generateMetadataForSection(section, params);
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <GenericMarketplaceDetailPage params={params} section={section} />;
}
