"use client";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#001F3F]/95 backdrop-blur-md text-[#E2E8F0] sticky top-0 z-50 border-b border-[#1e2a45]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#007BFF]">SMF</span>{" "}
          <span className="text-[#FF6B00]">Works</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/services" className="hover:text-[#00D4FF] transition-colors">Services</Link>
          <Link href="/about" className="hover:text-[#00D4FF] transition-colors">About</Link>
          <Link href="/contact" className="hover:text-[#00D4FF] transition-colors">Contact</Link>
          <Link
            href="/#newsletter"
            className="bg-[#FF6B00] text-white px-4 py-2 rounded-lg hover:bg-[#e55f00] transition-colors shadow-sm shadow-[#FF6B00]/20"
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
          <span className={`block w-6 h-0.5 bg-[#E2E8F0] transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#E2E8F0] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#E2E8F0] transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-sm font-medium border-t border-[#1e2a45] bg-[#001F3F]">
          <Link href="/services" onClick={() => setOpen(false)} className="hover:text-[#00D4FF] pt-4">Services</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="hover:text-[#00D4FF]">About</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-[#00D4FF]">Contact</Link>
          <Link
            href="/#newsletter"
            onClick={() => setOpen(false)}
            className="bg-[#FF6B00] text-white px-4 py-2 rounded-lg text-center hover:bg-[#e55f00]"
          >
            SMF AI Weekly
          </Link>
        </div>
      )}
    </header>
  );
}
