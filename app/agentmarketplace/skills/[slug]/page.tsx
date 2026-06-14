import { getAllItems, getItemBySlug } from "@/lib/marketplace/loader";
import MarketplaceDetailPage from "@/components/MarketplaceDetail";

export function generateStaticParams() {
  return getAllItems("skills").map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = getItemBySlug("skills", params.slug);
  if (!item) return {};
  return {
    title: `${item.title} — Skills & Addons`,
    description: item.excerpt,
  };
}

export default function SkillPage({ params }: { params: { slug: string } }) {
  return (
    <MarketplaceDetailPage
      params={params}
      section="skills"
      sectionTitle="Skills & Addons"
      backHref="/agentmarketplace/skills"
    />
  );
}
