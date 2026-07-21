import Link from "next/link";
import Image from "next/image";
import { Book, formatPrice } from "@/lib/books";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link
      href={`/books/${book.slug}`}
      className="group block bg-[#131B2E] border border-[#E2E8F0]/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#ea580c]/20 hover:-translate-y-1 hover:shadow-[inset_0_0_30px_rgba(234,88,12,0.04)]"
    >
      <div className="aspect-[2/3] relative bg-[#0A1628] overflow-hidden">
        <Image
          src={book.coverImage}
          alt={`Cover of ${book.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <p className="text-xs text-[#94A3B8] font-mono uppercase tracking-wider mb-2">
          {book.tags.slice(0, 3).join(" · ")}
        </p>
        <h3 className="text-xl font-semibold text-[#E2E8F0] mb-1">{book.title}</h3>
        {book.subtitle && <p className="text-sm text-[#C9A96E] mb-3">{book.subtitle}</p>}
        <p className="text-sm text-[#94A3B8] leading-relaxed mb-4 line-clamp-3">{book.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-[#ea580c] font-semibold">{formatPrice(book.priceUsd)}</span>
          <span className="text-[#ea580c] text-lg transition-transform group-hover:translate-x-1 inline-block">→</span>
        </div>
      </div>
    </Link>
  );
}