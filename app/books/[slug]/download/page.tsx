import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBookBySlug } from "@/lib/books";
import DownloadPageClient from "@/components/DownloadPageClient";

interface DownloadPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: DownloadPageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return { title: "Book Not Found" };

  return {
    title: `Download ${book.title} | Books`,
    robots: { index: false, follow: false },
  };
}

export default async function DownloadPage({ params }: DownloadPageProps) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) notFound();

  return (
    <section className="relative z-10 py-16 md:py-24 px-6 bg-[#001F3F]/75 min-h-[70vh]">
      <DownloadPageClient
        slug={book.slug}
        title={book.title}
        availableFormats={book.availableFormats}
      />
    </section>
  );
}
