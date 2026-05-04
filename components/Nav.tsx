"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SiteSearch from "./SiteSearch";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [blogsOpen, setBlogsOpen] = useState(false);

  return (
    <header className="bg-[#001F3F]/95 backdrop-blur-md text-[#E2E8F0] sticky top-0 z-50 border-b border-[#1e2a45]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/smf-logo.png" alt="SMF Works — AI Solutions for Small Business" width={180} height={50} className="h-14 w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-[#00D4FF] transition-colors">Home</Link>
          <Link href="/projects" className="hover:text-[#00D4FF] transition-colors">Projects</Link>
          <Link href="/skills-archived" className="hover:text-[#00D4FF] transition-colors">Skills</Link>
          {/* Blogs dropdown */}
          <div className="relative">
            <button
              onClick={() => setBlogsOpen(!blogsOpen)}
              className="flex items-center gap-1 hover:text-[#00D4FF] transition-colors focus:outline-none"
              aria-expanded={blogsOpen}
              aria-haspopup="true"
            >
              Blogs
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${blogsOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {blogsOpen && (
              <>
                <div
                  className="fixed inset-0 z-0"
                  onClick={() => setBlogsOpen(false)}
                  aria-hidden="true"
                />
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#001F3F] border border-[#1e2a45] rounded-lg shadow-lg shadow-black/20 py-2 z-10 flex flex-col">
                  <Link
                    href="/blog"
                    onClick={() => setBlogsOpen(false)}
                    className="px-4 py-2 hover:text-[#00D4FF] transition-colors hover:bg-[#1e2a45]/50"
                  >
                    SMF Blog
                  </Link>
                  <Link
                    href="/the-edge"
                    onClick={() => setBlogsOpen(false)}
                    className="px-4 py-2 transition-colors hover:bg-[#1e2a45]/50 text-[#9333EA] font-semibold hover:text-[#B06AFA]"
                  >
                    The Edge
                  </Link>
                  <Link
                    href="/liams-landing"
                    onClick={() => setBlogsOpen(false)}
                    className="px-4 py-2 hover:text-[#00D4FF] transition-colors hover:bg-[#1e2a45]/50"
                  >
                    Liam's Landing
                  </Link>
                  <Link
                    href="/drj"
                    onClick={() => setBlogsOpen(false)}
                    className="px-4 py-2 hover:text-[#00E5A0] transition-colors hover:bg-[#1e2a45]/50"
                  >
                    Dr J
                  </Link>
                  <Link
                    href="/the-signal"
                    onClick={() => setBlogsOpen(false)}
                    className="px-4 py-2 transition-colors hover:bg-[#1e2a45]/50 text-[#10B981] font-semibold hover:text-[#34D399]"
                  >
                    The Signal
                  </Link>
                </div>
              </>
            )}
          </div>
          <Link href="/about" className="hover:text-[#00D4FF] transition-colors">About</Link>
          <Link href="/contact" className="hover:text-[#00D4FF] transition-colors">Contact</Link>
          <Link href="/dashboard" className="hover:text-[#00D4FF] transition-colors">
            Subscribe
          </Link>
          <SiteSearch />
          <Link
            href="/newsletter"
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
          <Link href="/" onClick={() => setOpen(false)} className="hover:text-[#00D4FF] pt-4">Home</Link>
          <Link href="/projects" onClick={() => setOpen(false)} className="hover:text-[#00D4FF]">Projects</Link>
          <Link href="/skills-archived" onClick={() => setOpen(false)} className="hover:text-[#00D4FF]">Skills</Link>
          {/* Blogs accordion */}
          <div>
            <button
              onClick={() => setBlogsOpen(!blogsOpen)}
              className="flex items-center gap-1 hover:text-[#00D4FF] transition-colors focus:outline-none w-full text-left"
              aria-expanded={blogsOpen}
            >
              Blogs
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${blogsOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {blogsOpen && (
              <div className="mt-2 ml-4 flex flex-col gap-2 border-l-2 border-[#1e2a45] pl-3">
                <Link href="/blog" onClick={() => { setOpen(false); setBlogsOpen(false); }} className="hover:text-[#00D4FF] transition-colors">
                  SMF Blog
                </Link>
                <Link href="/the-edge" onClick={() => { setOpen(false); setBlogsOpen(false); }} className="transition-colors text-[#9333EA] font-semibold hover:text-[#B06AFA]">
                  The Edge
                </Link>
                <Link href="/liams-landing" onClick={() => { setOpen(false); setBlogsOpen(false); }} className="hover:text-[#00D4FF] transition-colors">
                  Liam's Landing
                </Link>
                <Link href="/drj" onClick={() => { setOpen(false); setBlogsOpen(false); }} className="hover:text-[#00E5A0] transition-colors">
                  Dr J
                </Link>
                <Link href="/the-signal" onClick={() => { setOpen(false); setBlogsOpen(false); }} className="transition-colors text-[#10B981] font-semibold hover:text-[#34D399]">
                  The Signal
                </Link>
              </div>
            )}
          </div>
          <Link href="/about" onClick={() => setOpen(false)} className="hover:text-[#00D4FF]">About</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-[#00D4FF]">Contact</Link>
          <Link href="/dashboard" onClick={() => setOpen(false)} className="hover:text-[#00D4FF]">Subscribe</Link>
          <Link
            href="/newsletter"
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
