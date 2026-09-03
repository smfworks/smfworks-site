"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); // init on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar — 2px ember line at very top */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent pointer-events-none">
        <div
          className="h-full transition-[width] duration-75 ease-out"
          style={{ width: `${progress}%`, background: "#ff7a2f", boxShadow: "0 0 8px rgba(255, 122, 47, 0.6)" }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#101014]/85 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-[rgba(142,166,191,0.15)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-[1.02]">
            <Image src="/smf-logo.png" alt="SMF Works" width={160} height={119} className="h-11 w-auto" priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            <Link href="/" className="text-[#8ea6bf] hover:text-[#ddd9d0] transition-colors">Home</Link>
            <Link href="/research" className="text-[#8ea6bf] hover:text-[#ddd9d0] transition-colors">Research</Link>
            <Link href="/about" className="text-[#8ea6bf] hover:text-[#ddd9d0] transition-colors">About</Link>
            <a href="https://www.smfclearinghouse.com/" target="_blank" rel="noopener noreferrer" className="text-[#8ea6bf] hover:text-[#ddd9d0] transition-colors">Clearinghouse ↗</a>
            <a href="https://smfwisdomforge.com" target="_blank" rel="noopener noreferrer" className="text-[#8ea6bf] hover:text-[#ddd9d0] transition-colors">WisdomForge ↗</a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#ddd9d0] transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#ddd9d0] transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#ddd9d0] transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-sm font-medium bg-[#101014]/95 backdrop-blur-xl border-t border-[rgba(142,166,191,0.15)]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            <Link href="/" onClick={() => setOpen(false)} className="text-[#8ea6bf] hover:text-[#ddd9d0] pt-4">Home</Link>
            <Link href="/research" onClick={() => setOpen(false)} className="text-[#8ea6bf] hover:text-[#ddd9d0]">Research</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="text-[#8ea6bf] hover:text-[#ddd9d0]">About</Link>
            <a href="https://www.smfclearinghouse.com/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="text-[#8ea6bf] hover:text-[#ddd9d0]">Clearinghouse ↗</a>
            <a href="https://smfwisdomforge.com" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="text-[#8ea6bf] hover:text-[#ddd9d0]">WisdomForge ↗</a>
          </div>
        )}
      </header>
    </>
  );
}