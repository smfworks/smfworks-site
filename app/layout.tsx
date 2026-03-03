import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SMF Works | AI Solutions for Small Business",
  description:
    "SMF Works delivers AI-powered content and workflow solutions to small businesses. Founded by a Principal AI Solutions Engineer with 30 years of enterprise experience.",
  openGraph: {
    title: "SMF Works | AI Solutions for Small Business",
    description:
      "Forged by 30 years of experience. Forging your future. AI content and workflow consulting for small businesses.",
    url: "https://smfworks.com",
    siteName: "SMF Works",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-warmwhite text-charcoal antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
