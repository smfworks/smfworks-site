import GenericMarketplaceDetailPage, {
  generateMetadataForSection,
  generateStaticParamsForSection,
} from "@/components/MarketplaceDetailWrapper";

const section = "safety";

export const generateStaticParams = () => generateStaticParamsForSection(section);
export const generateMetadata = ({ params }: { params: Promise<{ slug: string }> }) => generateMetadataForSection(section, params);
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <GenericMarketplaceDetailPage params={params} section={section} />;
}
