import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "Developer Platform | SMF Works",
    template: "%s | SMF Works Dev",
  },
  description:
    "Build with SMF Works. Documentation, API reference, and tools for developers working with AI agent orchestration.",
  alternates: { canonical: "https://smfworks.com/dev" },
};

const sidebarLinks = [
  {
    heading: "Getting Started",
    links: [
      { href: "/dev", label: "Overview" },
      { href: "/dev/docs", label: "Documentation" },
    ],
  },
  {
    heading: "Tools",
    links: [
      { href: "/dev/docs/smf-forge", label: "smf-forge CLI" },
      { href: "/dev/docs/agent-dev", label: "Agent Dev Guide" },
      { href: "/dev/docs/api-reference", label: "API Reference" },
    ],
  },
  {
    heading: "Account",
    links: [
      { href: "/dev/api-keys", label: "API Keys" },
      { href: "/dev/status", label: "API Status" },
    ],
  },
];

export default function DevLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#0A0F1F] text-[#E2E8F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12 flex gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-24">
            <Link
              href="/dev"
              className="text-[#00D4FF] font-bold text-lg mb-6 block hover:text-[#33E5FF] transition-colors"
            >
              ← SMF Works Dev
            </Link>
            <nav className="space-y-6">
              {sidebarLinks.map((group) => (
                <div key={group.heading}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-2">
                    {group.heading}
                  </p>
                  <ul className="space-y-1">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-[#94A3B8] hover:text-[#00D4FF] transition-colors block py-1"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Mobile nav toggle */}
        <div className="lg:hidden w-full mb-6">
          <details className="bg-[#131B2E] border border-[#1e2a45] rounded-lg">
            <summary className="px-4 py-3 text-sm font-medium text-[#94A3B8] cursor-pointer">
              Navigation
            </summary>
            <nav className="px-4 pb-4 space-y-4">
              {sidebarLinks.map((group) => (
                <div key={group.heading}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-1">
                    {group.heading}
                  </p>
                  <ul className="space-y-1">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-[#94A3B8] hover:text-[#00D4FF] transition-colors block py-1"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </details>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </div>
  );
}