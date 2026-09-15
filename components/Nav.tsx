"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/about", label: "About" },
];

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
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent pointer-events-none">
        <div
          className="h-full transition-[width] duration-75 ease-out bg-forge-ember"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-forge-navy/90 backdrop-blur-xl border-b border-forge-border"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/smf-logo.png" alt="SMF Works" width={160} height={119} className="h-11 w-auto" priority />
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium font-display">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary !py-2 !px-4 !text-[11px]">
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-text-primary transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-text-primary transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-text-primary transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {open && (
          <div className="md:hidden px-6 pb-5 flex flex-col gap-4 text-sm font-medium bg-forge-navy/95 backdrop-blur-xl border-t border-forge-border font-display">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-text-muted hover:text-text-primary pt-2"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="text-forge-ember pt-1">
              Contact
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
