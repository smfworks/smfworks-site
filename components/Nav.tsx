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
          <Image src="/smf-logo.png" alt="The SMF Works Project — Where AI Meets Humanity" width={180} height={50} className="h-14 w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-[#ea580c] transition-colors">Home</Link>
          <Link href="/work" className="hover:text-[#ea580c] transition-colors">Work</Link>
          <a
            href="https://smfwisdomforge.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C9A96E] transition-colors text-[#C9A96E] font-semibold"
          >
            🏛️ WisdomForge
          </a>
          <a
            href="https://www.smfclearinghouse.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ea580c] transition-colors text-[#00E5A0] font-semibold"
          >
            🤖 Clearinghouse
          </a>
          {/* Blogs dropdown */}
          <div className="relative">
            <button
              onClick={() => setBlogsOpen(!blogsOpen)}
              className="flex items-center gap-1 hover:text-[#ea580c] transition-colors focus:outline-none"
              aria-expanded={blogsOpen}
              aria-haspopup="true"
            >
              Publications
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
                    href="/the-signal"
                    onClick={() => setBlogsOpen(false)}
                    className="px-4 py-2 transition-colors hover:bg-[#1e2a45]/50 text-[#10B981] font-semibold hover:text-[#34D399]"
                  >
                    📡 The Signal
                  </Link>
                  <Link
                    href="/the-edge"
                    onClick={() => setBlogsOpen(false)}
                    className="px-4 py-2 transition-colors hover:bg-[#1e2a45]/50 text-[#9333EA] font-semibold hover:text-[#B06AFA]"
                  >
                    The Edge
                  </Link>
                  <Link
                    href="/morgan"
                    onClick={() => setBlogsOpen(false)}
                    className="px-4 py-2 transition-colors hover:bg-[#1e2a45]/50 text-[#FF8C42] font-semibold hover:text-[#FFB366]"
                  >
                    Morgan's Desk
                  </Link>
                  <Link
                    href="/harrys-desk"
                    onClick={() => setBlogsOpen(false)}
                    className="px-4 py-2 transition-colors hover:bg-[#1e2a45]/50 text-[#A78BFA] font-semibold hover:text-[#8B5CF6]"
                  >
                    Harry's Desk
                  </Link>
                </div>
              </>
            )}
          </div>
          <Link href="/about" className="hover:text-[#ea580c] transition-colors">About</Link>
          <Link href="/contact" className="hover:text-[#ea580c] transition-colors">Contact</Link>
          <SiteSearch />
          <Link
            href="/newsletter"
            className="bg-[#ea580c] text-white px-4 py-2 rounded-lg hover:bg-[#e55f00] transition-colors shadow-sm shadow-[#ea580c]/20"
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
          <Link href="/" onClick={() => setOpen(false)} className="hover:text-[#ea580c] pt-4">Home</Link>
          <Link href="/work" onClick={() => setOpen(false)} className="hover:text-[#ea580c]">Work</Link>
          <a
            href="https://smfwisdomforge.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="hover:text-[#C9A96E] text-[#C9A96E] font-semibold"
          >
            🏛️ WisdomForge
          </a>
          <a
            href="https://www.smfclearinghouse.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="hover:text-[#ea580c] text-[#00E5A0] font-semibold"
          >
            🤖 Clearinghouse
          </a>
          {/* Publications accordion */}
          <div>
            <button
              onClick={() => setBlogsOpen(!blogsOpen)}
              className="flex items-center gap-1 hover:text-[#ea580c] transition-colors focus:outline-none w-full text-left"
              aria-expanded={blogsOpen}
            >
              Publications
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
                <Link href="/the-signal" onClick={() => { setOpen(false); setBlogsOpen(false); }} className="transition-colors text-[#10B981] font-semibold hover:text-[#34D399]">
                  📡 The Signal
                </Link>
                <Link href="/the-edge" onClick={() => { setOpen(false); setBlogsOpen(false); }} className="transition-colors text-[#9333EA] font-semibold hover:text-[#B06AFA]">
                  The Edge
                </Link>
                <Link href="/morgan" onClick={() => { setOpen(false); setBlogsOpen(false); }} className="font-semibold transition-colors text-[#FF8C42] hover:text-[#FFB366]">
                  Morgan's Desk
                </Link>
                <Link href="/harrys-desk" onClick={() => { setOpen(false); setBlogsOpen(false); }} className="transition-colors text-[#A78BFA] font-semibold hover:text-[#8B5CF6]">
                  Harry's Desk
                </Link>
              </div>
            )}
          </div>
          <Link href="/about" onClick={() => setOpen(false)} className="hover:text-[#ea580c]">About</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-[#ea580c]">Contact</Link>
          <Link href="/dashboard" onClick={() => setOpen(false)} className="hover:text-[#ea580c]">Subscribe</Link>
          <Link
            href="/newsletter"
            onClick={() => setOpen(false)}
            className="bg-[#ea580c] text-white px-4 py-2 rounded-lg text-center hover:bg-[#e55f00]"
          >
            SMF AI Weekly
          </Link>
        </div>
      )}
    </header>
  );
}
