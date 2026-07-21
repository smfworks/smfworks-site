export type BookFormat = "pdf" | "epub";

export interface Book {
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  description: string;
  longDescription?: string;
  coverImage: string;
  publishDate: string;
  pageCount?: number;
  /** Single Stripe Price ID for this book — buyer gets all formats. */
  stripePriceId: string;
  /** Flat price displayed on the site. */
  priceUsd: number;
  /** Available formats — buyer gets all of these for one price. */
  availableFormats: BookFormat[];
  tags: string[];
  /** Filename inside the repo-root `downloads/` directory. */
  files: Partial<Record<BookFormat, string>>;
  /** Cross-site promotion links. */
  relatedPosts?: { title: string; href: string; site: "smfworks" | "clearinghouse" | "wisdomforge" }[];
}

export const books: Book[] = [
  {
    slug: "placeholder-book-1",
    title: "Your First Book Title",
    subtitle: "A subtitle that explains the promise",
    author: "Michael Gannotti",
    description:
      "Short elevator pitch for the book. This appears on cards and social previews.",
    longDescription:
      "A longer description for the book detail page. Expand on who it is for, what problems it solves, and what the reader will walk away knowing.",
    coverImage: "/images/books/placeholder-cover-1.svg",
    publishDate: "2026-07-15",
    pageCount: 180,
    stripePriceId: process.env.STRIPE_PRICE_ID_BOOK_1 || "price_book1_placeholder",
    priceUsd: 1.99,
    availableFormats: ["pdf", "epub"],
    files: {
      pdf: "placeholder-book-1.pdf",
      epub: "placeholder-book-1.epub",
    },
    tags: ["AI", "Business", "Strategy"],
    relatedPosts: [
      {
        title: "Building a Reliable Human-AI Social Operations System",
        href: "https://www.smfclearinghouse.com/blog/building-a-reliable-human-ai-social-operations-system",
        site: "clearinghouse",
      },
    ],
  },
  {
    slug: "placeholder-book-2",
    title: "Your Second Book Title",
    subtitle: "Another compelling subtitle",
    author: "Michael Gannotti",
    description:
      "Short elevator pitch for the second book.",
    longDescription:
      "A longer description for the book detail page.",
    coverImage: "/images/books/placeholder-cover-2.svg",
    publishDate: "2026-08-01",
    pageCount: 220,
    stripePriceId: process.env.STRIPE_PRICE_ID_BOOK_2 || "price_book2_placeholder",
    priceUsd: 1.99,
    availableFormats: ["pdf", "epub"],
    files: {
      pdf: "placeholder-book-2.pdf",
      epub: "placeholder-book-2.epub",
    },
    tags: ["AI", "Leadership"],
  },
];

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((book) => book.slug === slug);
}

export function getAllBooks(): Book[] {
  return books;
}

export function getBooksByTag(tag: string): Book[] {
  return books.filter((book) => book.tags.includes(tag));
}

export function formatPrice(dollars: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(dollars);
}