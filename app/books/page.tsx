import type { Metadata } from "next";
import Link from "next/link";
import { getListedBooks } from "@/lib/books";
import BookCard from "@/components/BookCard";
import { Eyebrow } from "@/components/shared/LabUI";
import { AMAZON_BOOKS } from "@/content/lib/lab";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Books by Michael Gannotti and SMF Works — AI agents, enterprise transformation, and Hermes. Direct from the author.",
  alternates: { canonical: "https://smfworks.com/books" },
  openGraph: {
    title: "Books | SMF Works",
    description: "Direct-from-author books on AI agents and enterprise transformation.",
    url: "https://smfworks.com/books",
    siteName: "SMF Works",
    type: "website",
    locale: "en_US",
    images: ["https://smfworks.com/og-image.jpg"],
  },
};

export default function BooksPage() {
  const books = getListedBooks();

  return (
    <>
      <section className="relative pt-36 pb-16 px-6 overflow-hidden mesh-gradient">
        <div className="max-w-4xl mx-auto">
          <Eyebrow>Library</Eyebrow>
          <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-text-primary mb-5">
            Books
          </h1>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            Direct-from-author titles on agents, enterprise AI, and Hermes.
          </p>
        </div>
      </section>

      <section className="relative px-6 pb-20 bg-forge-navy">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-mono uppercase tracking-[0.16em] text-text-dim mb-6">
            Published
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {AMAZON_BOOKS.map((book) => (
              <a
                key={book.title}
                href={book.href}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-card card-lift p-6 block group"
              >
                <h3 className="text-lg font-display font-semibold text-text-primary mb-2 group-hover:text-white">
                  {book.title}
                </h3>
                <p className="text-sm text-text-muted mb-4">{book.oneLiner}</p>
                <span className="text-xs font-mono uppercase tracking-wider text-forge-ember">
                  Amazon ↗
                </span>
              </a>
            ))}
          </div>

          {books.length > 0 ? (
            <>
              <h2 className="text-sm font-mono uppercase tracking-[0.16em] text-text-dim mb-6">
                Direct store
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book) => (
                  <BookCard key={book.slug} book={book} />
                ))}
              </div>
            </>
          ) : null}

          <div className="mt-16 text-center">
            <p className="text-text-muted text-sm mb-4">
              Research essays live on the Clearinghouse, not in this bookstore.
            </p>
            <Link href="/research" className="text-data-cyan hover:underline text-sm">
              Research →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
