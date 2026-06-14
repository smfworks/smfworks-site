import { getAllItems } from "@/lib/marketplace/loader";
import GenericMarketplaceDetailPage, {
  generateMetadataForSection,
  generateStaticParamsForSection,
} from "@/components/MarketplaceDetailWrapper";

const section = "deployment-recipes";

export const generateStaticParams = () => generateStaticParamsForSection(section);
export const generateMetadata = ({ params }: { params: Promise<{ slug: string }> }) => generateMetadataForSection(section, params);
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <GenericMarketplaceDetailPage params={Promise.resolve({ slug })} section={section} />;
}
