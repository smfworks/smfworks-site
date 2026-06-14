import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllItems, getItemBySlug, MarketplaceItem } from "@/lib/marketplace/loader";

interface MarketplaceDetailPageProps {
  item: MarketplaceItem | null | undefined;
  section: string;
  sectionTitle: string;
  backHref: string;
}

export default function MarketplaceDetailPage({ item, section, sectionTitle: title, backHref }: MarketplaceDetailPageProps) {
  if (!item) notFound();

  return (
    <div className="min-h-screen bg-forge-navy px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <Link href={backHref} className="mb-6 inline-flex items-center text-sm text-muted hover:text-data-cyan transition-colors">
          ← Back to {title.toLowerCase()}
        </Link>

        <article className="rounded-2xl border border-forge-border bg-forge-card p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            {item.image && (
              <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-xl md:w-1/3">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
            )}
            <div className="flex-1">
              <span className="text-sm font-semibold text-data-cyan">{item.category}</span>
              <h1 className="mt-2 text-3xl font-bold text-text-primary md:text-4xl">{item.title}</h1>
              <p className="mt-4 text-lg text-muted">{item.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-forge-surface-mid px-3 py-1 text-xs text-muted">{tag}</span>
                ))}
              </div>
              {item.last_verified && (
                <p className="mt-4 text-xs text-muted">Last verified: {item.last_verified}</p>
              )}
            </div>
          </div>

          <div className="prose prose-invert mt-10 max-w-none">
            <MarkdownContent content={item.content} />
          </div>
        </article>
      </div>
    </div>
  );
}

function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="space-y-4 text-text-primary">
      {content.split("\n").map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) return null;
        if (trimmed.startsWith("# ")) return <h2 key={idx} className="mt-8 text-2xl font-bold text-data-cyan">{trimmed.slice(2)}</h2>;
        if (trimmed.startsWith("## ")) return <h3 key={idx} className="mt-6 text-xl font-bold text-text-primary">{trimmed.slice(3)}</h3>;
        if (trimmed.startsWith("- ")) return <li key={idx} className="ml-5 list-disc text-muted">{trimmed.slice(2)}</li>;
        return <p key={idx} className="text-muted">{trimmed}</p>;
      })}
    </div>
  );
}
