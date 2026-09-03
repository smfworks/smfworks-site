"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SiteSearch from "./SiteSearch";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-strong shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-[1.02]">
          <Image src="/smf-logo.png" alt="SMF Works" width={160} height={119} className="h-11 w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <Link href="/" className="text-[#94A3B8] hover:text-[#F1F5F9] transition-colors">Home</Link>
          <Link href="/research" className="text-[#94A3B8] hover:text-[#F1F5F9] transition-colors">Research</Link>
          <Link href="/about" className="text-[#94A3B8] hover:text-[#F1F5F9] transition-colors">About</Link>
          <SiteSearch />
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#F1F5F9] transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#F1F5F9] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#F1F5F9] transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-sm font-medium glass-strong border-t border-[#1a2540]">
          <Link href="/" onClick={() => setOpen(false)} className="text-[#94A3B8] hover:text-[#F1F5F9] pt-4">Home</Link>
          <Link href="/research" onClick={() => setOpen(false)} className="text-[#94A3B8] hover:text-[#F1F5F9]">Research</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="text-[#94A3B8] hover:text-[#F1F5F9]">About</Link>
        </div>
      )}
    </header>
  );
}