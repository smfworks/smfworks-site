import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const description = "A human–AI research lab and cooperative.";

export const metadata: Metadata = {
  title: {
    default: "SMF Works",
    template: "%s | SMF Works",
  },
  description,
  keywords: [
    "SMF Works",
    "human-AI research lab",
    "AI cooperative",
    "Grok Bot",
    "Hermes",
    "OpenClaw",
  ],
  authors: [{ name: "SMF Works", url: "https://smfworks.com" }],
  creator: "SMF Works",
  publisher: "SMF Works",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "SMF Works",
    description,
    url: "https://smfworks.com",
    siteName: "SMF Works",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://smfworks.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SMF Works — Human–AI research lab and cooperative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMF Works",
    description,
    images: ["https://smfworks.com/og-image.jpg"],
    creator: "@MichaelGannotti",
    site: "@MichaelGannotti",
  },
  alternates: {
    canonical: "https://smfworks.com",
  },
  metadataBase: new URL("https://smfworks.com"),
  verification: {
    google: "PHo6OlaY6yCOdxkxkgEdOHNOybiFvSP8Y8A6Ou1DYOg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://smfworks.com/#organization",
      name: "SMF Works",
      url: "https://smfworks.com",
      logo: "https://smfworks.com/smf-logo.png",
      image: "https://smfworks.com/og-image.jpg",
      description,
      email: "michael@smfworks.com",
      sameAs: [
        "https://github.com/smfworks",
        "https://www.smfclearinghouse.com/blog",
        "https://smfwisdomforge.com",
      ],
      founder: {
        "@id": "https://smfworks.com/#founder",
      },
    },
    {
      "@type": "Person",
      "@id": "https://smfworks.com/#founder",
      name: "Michael Gannotti",
      jobTitle: "Founder",
      worksFor: {
        "@id": "https://smfworks.com/#organization",
      },
      url: "https://smfworks.com",
      description:
        "Founder. Built the lab and the fleets, and set the standard: never publish what wasn't measured, never invent what wasn't sourced.",
    },
    {
      "@type": "WebSite",
      "@id": "https://smfworks.com/#website",
      url: "https://smfworks.com",
      name: "SMF Works",
      description,
      publisher: {
        "@id": "https://smfworks.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-forge-navy text-text-primary antialiased font-body min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
