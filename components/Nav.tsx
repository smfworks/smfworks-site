"use client";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#1E1E1E] text-[#F8F5F0] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-[#C87941]">SMF</span> Works
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/services" className="hover:text-[#C87941] transition-colors">Services</Link>
          <Link href="/about" className="hover:text-[#C87941] transition-colors">About</Link>
          <Link href="/contact" className="hover:text-[#C87941] transition-colors">Contact</Link>
          <Link
            href="/#newsletter"
            className="bg-[#C87941] text-white px-4 py-2 rounded hover:bg-[#b56b35] transition-colors"
          >
            SMF AI Weekly
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#F8F5F0] transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#F8F5F0] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#F8F5F0] transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-sm font-medium border-t border-[#333]">
          <Link href="/services" onClick={() => setOpen(false)} className="hover:text-[#C87941] pt-4">Services</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="hover:text-[#C87941]">About</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-[#C87941]">Contact</Link>
          <Link
            href="/#newsletter"
            onClick={() => setOpen(false)}
            className="bg-[#C87941] text-white px-4 py-2 rounded text-center hover:bg-[#b56b35]"
          >
            SMF AI Weekly
          </Link>
        </div>
      )}
    </header>
  );
}
