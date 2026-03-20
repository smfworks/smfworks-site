import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Book a Free AI Consultation — SMF Works",
  description:
    "Book a free 20-minute consultation with SMF Works. Honest guidance on AI content production or workflow automation designed specifically for your small business in trades, services, or retail.",
  alternates: { canonical: "https://smfworks.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
