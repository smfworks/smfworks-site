import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach out to SMF Works in Pittsboro, NC. Get a free consultation on AI content production or workflow automation for your small business — personal response within 24 hours.",
  alternates: { canonical: "https://smfworks.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
