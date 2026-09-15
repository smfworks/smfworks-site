import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

const SOCIAL_LINKS = [
  {
    name: "X",
    href: "https://x.com/MichaelGannotti",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/smfworks",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.32 3.53 1.01.11-.78.42-1.32.77-1.62-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.65-5.49 5.95.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C20.56 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-0 border-t border-forge-border bg-forge-navy-deep">
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="text-xl font-display font-bold text-text-primary mb-3">SMF Works</div>
            <p className="text-sm text-text-muted leading-relaxed mb-5 max-w-xs">
              Human-AI research lab. Agent systems, open tools, and Agent Setup for owners who keep the keys.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-lg surface-card flex items-center justify-center text-text-dim hover:text-forge-ember transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-text-dim mb-4">Navigate</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/work" className="text-text-muted hover:text-text-primary transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-text-muted hover:text-text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-text-muted hover:text-text-primary transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-text-muted hover:text-text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-muted hover:text-text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-text-muted hover:text-text-primary transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-text-dim mb-4">Lab</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.smfclearinghouse.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-text-primary transition-colors"
                >
                  Clearinghouse ↗
                </a>
              </li>
              <li>
                <a
                  href="https://smfwisdomforge.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-text-primary transition-colors"
                >
                  WisdomForge ↗
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/smfworks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-text-primary transition-colors"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <Link href="/books" className="text-text-muted hover:text-text-primary transition-colors">
                  Books
                </Link>
              </li>
              <li>
                <a href="mailto:michael@smfworks.com" className="text-text-muted hover:text-text-primary transition-colors">
                  michael@smfworks.com
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/MichaelGannotti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-text-primary transition-colors"
                >
                  X @MichaelGannotti ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-text-dim mb-4">SMF AI Weekly</h4>
            <p className="text-sm text-text-muted mb-4 leading-relaxed">
              Lab notes, once a week.
            </p>
            <NewsletterForm compact />
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-forge-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-text-dim">© {new Date().getFullYear()} SMF Works. All rights reserved.</p>
          <p className="text-xs text-text-dim font-mono">Built by people and AI, working together.</p>
        </div>
      </div>
    </footer>
  );
}
