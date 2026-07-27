"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SiteSearch from "./SiteSearch";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [pubsOpen, setPubsOpen] = useState(false);
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
          <Link href="/work" className="text-[#94A3B8] hover:text-[#F1F5F9] transition-colors">Work</Link>
          <Link href="/research" className="text-[#94A3B8] hover:text-[#F1F5F9] transition-colors">Research</Link>
          {/* Publications dropdown */}
          <div className="relative">
            <button
              onClick={() => setPubsOpen(!pubsOpen)}
              className="flex items-center gap-1 text-[#94A3B8] hover:text-[#F1F5F9] transition-colors focus:outline-none"
              aria-expanded={pubsOpen}
              aria-haspopup="true"
            >
              Publications
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${pubsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {pubsOpen && (
              <>
                <div className="fixed inset-0 z-0" onClick={() => setPubsOpen(false)} aria-hidden="true" />
                <div className="absolute top-full left-0 mt-3 w-56 glass-strong rounded-xl shadow-xl shadow-black/30 py-2 z-10 flex flex-col">
                  <Link href="/publications/the-signal" onClick={() => setPubsOpen(false)} className="px-4 py-2.5 transition-colors hover:bg-[#1a2540]/50 text-[#10B981] font-semibold hover:text-[#34D399] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" /> The Signal
                  </Link>
                  <Link href="/publications/the-edge" onClick={() => setPubsOpen(false)} className="px-4 py-2.5 transition-colors hover:bg-[#1a2540]/50 text-[#9333EA] font-semibold hover:text-[#B06AFA] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9333EA]" /> The Edge
                  </Link>
                  <Link href="/publications/morgans-desk" onClick={() => setPubsOpen(false)} className="px-4 py-2.5 transition-colors hover:bg-[#1a2540]/50 text-[#FF8C42] font-semibold hover:text-[#FFB366] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C42]" /> Morgan&apos;s Desk
                  </Link>
                  <Link href="/publications/harrys-desk" onClick={() => setPubsOpen(false)} className="px-4 py-2.5 transition-colors hover:bg-[#1a2540]/50 text-[#A78BFA] font-semibold hover:text-[#8B5CF6] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" /> Harry&apos;s Desk
                  </Link>
                </div>
              </>
            )}
          </div>
          <Link href="/books" className="text-[#C9A96E] hover:text-[#D4B87A] transition-colors font-semibold">Books</Link>
          <Link href="/about" className="text-[#94A3B8] hover:text-[#F1F5F9] transition-colors">About</Link>
          <SiteSearch />
          <Link
            href="/newsletter"
            className="relative px-5 py-2 rounded-lg font-semibold text-white text-sm transition-all duration-300 overflow-hidden group"
            style={{ background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)', boxShadow: '0 4px 16px -4px rgba(234, 88, 12, 0.4)' }}
          >
            <span className="relative z-10">SMF AI Weekly</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#fb923c] to-[#ea580c] opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
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
          <Link href="/work" onClick={() => setOpen(false)} className="text-[#94A3B8] hover:text-[#F1F5F9]">Work</Link>
          <Link href="/research" onClick={() => setOpen(false)} className="text-[#94A3B8] hover:text-[#F1F5F9]">Research</Link>
          <div>
            <button onClick={() => setPubsOpen(!pubsOpen)} className="flex items-center gap-1 text-[#94A3B8] hover:text-[#F1F5F9] transition-colors focus:outline-none w-full text-left" aria-expanded={pubsOpen}>
              Publications
              <svg className={`w-3.5 h-3.5 transition-transform ${pubsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {pubsOpen && (
              <div className="mt-2 ml-4 flex flex-col gap-2 border-l-2 border-[#1a2540] pl-3">
                <Link href="/publications/the-signal" onClick={() => { setOpen(false); setPubsOpen(false); }} className="text-[#10B981] font-semibold hover:text-[#34D399]">The Signal</Link>
                <Link href="/publications/the-edge" onClick={() => { setOpen(false); setPubsOpen(false); }} className="text-[#9333EA] font-semibold hover:text-[#B06AFA]">The Edge</Link>
                <Link href="/publications/morgans-desk" onClick={() => { setOpen(false); setPubsOpen(false); }} className="text-[#FF8C42] font-semibold hover:text-[#FFB366]">Morgan&apos;s Desk</Link>
                <Link href="/publications/harrys-desk" onClick={() => { setOpen(false); setPubsOpen(false); }} className="text-[#A78BFA] font-semibold hover:text-[#8B5CF6]">Harry&apos;s Desk</Link>
              </div>
            )}
          </div>
          <Link href="/books" onClick={() => setOpen(false)} className="text-[#C9A96E] font-semibold">Books</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="text-[#94A3B8] hover:text-[#F1F5F9]">About</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="text-[#94A3B8] hover:text-[#F1F5F9]">Contact</Link>
          <Link href="/newsletter" onClick={() => setOpen(false)} className="text-center px-5 py-2.5 rounded-lg font-semibold text-white" style={{ background: 'linear-gradient(135deg, #ea580c, #f97316)' }}>SMF AI Weekly</Link>
        </div>
      )}
    </header>
  );
}