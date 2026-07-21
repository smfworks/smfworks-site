import type { Metadata } from "next";
import Link from "next/link";
import { getAllBooks } from "@/lib/books";
import BookCard from "@/components/BookCard";

export const metadata: Metadata = {
  title: "Books | The SMF Works Project",
  description:
    "Books by Michael Gannotti and the SMF Works Project — ebooks and PDFs on AI, humanity, business, and craft. Direct from the author, no middleman.",
  alternates: {
    canonical: "https://smfworks.com/books",
  },
  openGraph: {
    title: "Books | The SMF Works Project",
    description:
      "Ebooks and PDFs on AI, humanity, business, and craft. Buy directly from the author.",
    url: "https://smfworks.com/books",
    siteName: "The SMF Works Project",
    type: "website",
    locale: "en_US",
    images: ["https://smfworks.com/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Books by The SMF Works Project",
  url: "https://smfworks.com/books",
  description:
    "Ebooks and PDFs by Michael Gannotti and the SMF Works Project.",
  publisher: {
    "@type": "Organization",
    name: "The SMF Works Project",
    url: "https://smfworks.com",
  },
};

export default function BooksPage() {
  const books = getAllBooks();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative z-10 py-20 md:py-28 px-6 bg-[#001F3F]/75 min-h-[60vh]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#ea580c] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              The SMF Works Library
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-6">
              Books by Michael Gannotti
            </h1>
            <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
              Direct-from-author ebooks and PDFs. No platform gatekeepers, no unnecessary middlemen —
              just the work, delivered straight to you.
            </p>
          </div>

          {books.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {books.map((book) => (
                <BookCard key={book.slug} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-[#1e2a45] rounded-2xl">
              <p className="text-[#94A3B8] text-lg">The bookstore is being stocked. Check back soon.</p>
            </div>
          )}

          <div className="mt-16 text-center">
            <p className="text-[#94A3B8] text-sm mb-4">
              Looking for free essays, research, and experiments?
            </p>
            <Link
              href="/the-signal"
              className="inline-block border border-[#E2E8F0]/10 text-[#E2E8F0] px-6 py-3 rounded-lg font-medium hover:border-[#ea580c]/30 hover:bg-[#ea580c]/5 transition-all"
            >
              Read The Signal →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
