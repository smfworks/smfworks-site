import Link from "next/link";

const SOCIAL_LINKS = [
  {
    name: "X",
    href: "https://x.com/smfworks",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/smfworks",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/smfworks",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@smfworks",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@smfworks",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#001F3F] text-[#E2E8F0] py-12 border-t border-[#1e2a45]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-xl font-bold mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#007BFF]">SMF</span>{" "}
            <span className="text-[#FF6B00]">Works</span>
          </div>
          <p className="text-sm text-[#94A3B8] leading-relaxed mb-5">
            Forged by 30 years of experience.<br />Forging your future.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-3 flex-wrap">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-[#94A3B8] hover:text-[#00D4FF] transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-[#00D4FF]">Navigate</h4>
          <ul className="space-y-2 text-sm text-[#94A3B8]">
            <li><Link href="/services" className="hover:text-[#E2E8F0] transition-colors">Services</Link></li>
            <li><Link href="/blog" className="hover:text-[#E2E8F0] transition-colors">Blog</Link></li>
            <li><Link href="/about" className="hover:text-[#E2E8F0] transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-[#E2E8F0] transition-colors">Contact</Link></li>
            <li><Link href="/newsletter" className="hover:text-[#E2E8F0] transition-colors">SMF AI Weekly</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-[#00D4FF]">Get in Touch</h4>
          <ul className="space-y-2 text-sm text-[#94A3B8]">
            <li><a href="mailto:michael@smfworks.com" className="hover:text-[#E2E8F0] transition-colors">michael@smfworks.com</a></li>
            <li className="text-[#94A3B8]/60">Pittsboro, NC</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-[#1e2a45] text-center text-xs text-[#94A3B8]/40">
        © {new Date().getFullYear()} SMF Works. All rights reserved.
        <div className="mt-1">Saint Michael&apos;s Forge LLC</div>
      </div>
    </footer>
  );
}
