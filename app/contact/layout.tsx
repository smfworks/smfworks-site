import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Agent Setup intake and notes for SMF Works. Starter $2,000, Standard $3,500. Write to Michael Gannotti.",
  alternates: { canonical: "https://smfworks.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
