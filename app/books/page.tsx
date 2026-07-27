import type { Metadata } from "next";
import Link from "next/link";
import { getAllBooks } from "@/lib/books";
import BookCard from "@/components/BookCard";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Books by Michael Gannotti and SMF Works — ebooks and PDFs on AI, enterprise, and craft. Direct from the author, no middleman.",
  alternates: { canonical: "https://smfworks.com/books" },
  openGraph: {
    title: "Books | SMF Works",
    description: "Ebooks and PDFs on AI, enterprise, and craft. Buy directly from the author.",
    url: "https://smfworks.com/books",
    siteName: "SMF Works",
    type: "website",
    locale: "en_US",
    images: ["https://smfworks.com/og-image.jpg"],
  },
};

export default function BooksPage() {
  const books = getAllBooks();

  return (
    <>
      {/* HERO */}
      <section className="relative py-32 px-6 overflow-hidden mesh-gradient noise-overlay">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#C9A96E] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C9A96E] animate-pulse" />
            <p className="text-[#C9A96E] text-xs font-mono uppercase tracking-[0.3em] font-medium">
              The SMF Works Library
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tightest text-gradient-white mb-6 leading-[1.05]">
            Books
          </h1>
          <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl leading-relaxed">
            Direct-from-author ebooks and PDFs. No platform gatekeepers, no unnecessary middlemen —
            just the work, delivered straight to you.
          </p>
        </div>
      </section>

      {/* BOOKS GRID */}
      <section className="relative section-padding px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          {books.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map((book) => (
                <BookCard key={book.slug} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-[#1a2540] rounded-2xl glass">
              <div className="text-5xl mb-4">📚</div>
              <p className="text-[#94A3B8] text-lg">The bookstore is being stocked. Check back soon.</p>
            </div>
          )}

          <div className="mt-16 text-center">
            <p className="text-[#94A3B8] text-sm mb-4">
              Looking for free essays, research, and experiments?
            </p>
            <Link
              href="/publications/the-signal"
              className="inline-block border border-[#1a2540] text-[#F1F5F9] px-6 py-3 rounded-lg font-medium hover:border-[#ea580c40] hover:bg-[#ea580c08] transition-all"
            >
              Read The Signal →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}