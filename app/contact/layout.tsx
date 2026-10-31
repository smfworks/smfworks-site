import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Notes for SMF Works. Write to Michael Gannotti about the lab and the work.",
  alternates: { canonical: "https://smfworks.com/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
