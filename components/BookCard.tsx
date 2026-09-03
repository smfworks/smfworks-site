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
      className="group relative glass card-lift rounded-2xl overflow-hidden"
    >
      <div className="aspect-[2/3] relative bg-[#0c1220] overflow-hidden">
        <Image
          src={book.coverImage}
          alt={`Cover of ${book.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <p className="text-xs text-[#6a5e4e] font-mono uppercase tracking-wider mb-2">
          {book.tags.slice(0, 3).join(" · ")}
        </p>
        <h3 className="text-xl font-display font-semibold text-[#ddd9d0] mb-1 group-hover:text-white transition-colors">{book.title}</h3>
        {book.subtitle && <p className="text-sm text-[#C9A96E] mb-3 font-mono">{book.subtitle}</p>}
        <p className="text-sm text-[#8ea6bf] leading-relaxed mb-4 line-clamp-3">{book.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-[#ff9a56] font-semibold font-mono">{formatPrice(book.priceUsd)}</span>
          <span className="text-[#ff9a56] text-lg transition-transform group-hover:translate-x-1 inline-block">→</span>
        </div>
      </div>
    </Link>
  );
}