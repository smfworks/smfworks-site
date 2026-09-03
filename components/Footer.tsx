import Link from "next/link";

const SOCIAL_LINKS = [
  { name: "X", href: "https://x.com/smfworks", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/smfworks", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
  { name: "Instagram", href: "https://www.instagram.com/smfworks", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg> },
];

const ECOSYSTEM_LINKS = [
  { label: "AI Clearinghouse", href: "https://www.smfclearinghouse.com/" },
  { label: "WisdomForge", href: "https://smfwisdomforge.com" },
  { label: "Hermes Agent", href: "https://github.com/smfworks" },
];

export default function Footer() {
  return (
    <footer className="relative mt-0 border-t border-[#1a2540] overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-[#ea580c] opacity-[0.03] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-xl font-display font-bold text-[#F1F5F9] mb-3">
              SMF Works
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed mb-5 max-w-xs">
              A human-AI research lab publishing findings, shipping open tools, and running a multi-agent organization in the open.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              {SOCIAL_LINKS.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-[#64748B] hover:text-[#f97316] transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-[#64748B] mb-4">Navigate</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-[#94A3B8] hover:text-[#F1F5F9] transition-colors">Home</Link></li>
              <li><Link href="/research" className="text-[#94A3B8] hover:text-[#F1F5F9] transition-colors">Research</Link></li>
              <li><Link href="/about" className="text-[#94A3B8] hover:text-[#F1F5F9] transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-[#64748B] mb-4">Ecosystem</h4>
            <ul className="space-y-3 text-sm">
              {ECOSYSTEM_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-[#F1F5F9] transition-colors">
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-[#64748B] mb-4">Reach the Lab</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:michael@smfworks.com" className="text-[#94A3B8] hover:text-[#F1F5F9] transition-colors">michael@smfworks.com</a></li>
              <li><a href="https://x.com/MichaelGannotti" target="_blank" rel="noopener noreferrer" className="text-[#94A3B8] hover:text-[#F1F5F9] transition-colors">X / @MichaelGannotti ↗</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#1a2540] flex items-center justify-between">
          <p className="text-xs text-[#64748B]">
            © {new Date().getFullYear()} SMF Works. All rights reserved.
          </p>
          <p className="text-xs text-[#64748B] font-mono">
            Built by people and AI, working together.
          </p>
        </div>
      </div>
    </footer>
  );
}