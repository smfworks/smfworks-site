import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBookBySlug, getAllBooks } from "@/lib/books";
import BuyButton from "@/components/BuyButton";

interface BookPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllBooks().map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return { title: "Book Not Found" };

  return {
    title: `${book.title} | Books`,
    description: book.description,
    alternates: {
      canonical: `https://smfworks.com/books/${book.slug}`,
    },
    openGraph: {
      title: book.title,
      description: book.description,
      url: `https://smfworks.com/books/${book.slug}`,
      siteName: "The SMF Works Project",
      type: "book",
      locale: "en_US",
      images: book.coverImage.startsWith("http")
        ? [book.coverImage]
        : [`https://smfworks.com${book.coverImage}`],
    },
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) notFound();

  const formatList = book.availableFormats.map((f) => f.toUpperCase()).join(" + ");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    author: {
      "@type": "Person",
      name: book.author,
    },
    description: book.description,
    image: book.coverImage.startsWith("http")
      ? book.coverImage
      : `https://smfworks.com${book.coverImage}`,
    datePublished: book.publishDate,
    numberOfPages: book.pageCount,
    offers: {
      "@type": "Offer",
      price: book.priceUsd.toString(),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `https://smfworks.com/books/${book.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative z-10 py-16 md:py-24 px-6 bg-[#001F3F]/75 min-h-[70vh]">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/books"
            className="text-sm text-[#94A3B8] hover:text-[#ea580c] transition-colors inline-flex items-center gap-1 mb-8"
          >
            ← Back to Books
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Cover */}
            <div className="relative aspect-[2/3] w-full max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-2xl shadow-black/30 bg-[#0A1628]">
              <Image
                src={book.coverImage}
                alt={`Cover of ${book.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>

            {/* Details */}
            <div>
              <p className="text-xs text-[#94A3B8] font-mono uppercase tracking-wider mb-3">
                {book.tags.join(" · ")}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-[#E2E8F0] mb-3">
                {book.title}
              </h1>
              {book.subtitle && (
                <p className="text-xl text-[#C9A96E] mb-4">{book.subtitle}</p>
              )}
              <p className="text-sm text-[#94A3B8] mb-6">
                By {book.author}
                {book.pageCount && <span className="ml-3">· {book.pageCount} pages</span>}
                {book.publishDate && (
                  <span className="ml-3">· {new Date(book.publishDate).getFullYear()}</span>
                )}
              </p>

              <p className="text-[#E2E8F0] leading-relaxed mb-8">
                {book.longDescription || book.description}
              </p>

              <div className="mb-8">
                <BuyButton book={book} />
              </div>

              <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-5">
                <h3 className="text-sm font-semibold text-[#E2E8F0] mb-2">What you get</h3>
                <ul className="text-sm text-[#94A3B8] space-y-1 list-disc list-inside">
                  <li>Instant download after purchase</li>
                  <li>DRM-free {formatList} files</li>
                  <li>Lifetime access to updates for this edition</li>
                  <li>30-day satisfaction guarantee</li>
                </ul>
              </div>

              {book.relatedPosts && book.relatedPosts.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-sm font-semibold text-[#E2E8F0] mb-3">Related reading</h3>
                  <ul className="text-sm space-y-2">
                    {book.relatedPosts.map((post) => (
                      <li key={post.href}>
                        <a
                          href={post.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#ea580c] hover:underline"
                        >
                          {post.title}
                          {post.site === "clearinghouse" && (
                            <span className="text-[#94A3B8] text-xs ml-2">(SMF Clearinghouse)</span>
                          )}
                          {post.site === "wisdomforge" && (
                            <span className="text-[#94A3B8] text-xs ml-2">(WisdomForge)</span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}