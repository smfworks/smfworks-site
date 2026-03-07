import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "SMF Works | AI Solutions for Small Business",
    template: "%s | SMF Works",
  },
  description:
    "SMF Works delivers AI-powered content production and workflow automation for small businesses — forged from 30 years of enterprise tech expertise. No agency pricing. No generic outputs.",
  keywords: [
    "AI solutions for small business",
    "AI workflow consulting",
    "AI content production",
    "small business automation",
    "AI for trades businesses",
    "SEO content for small business",
    "generative AI consulting",
    "AI automation for SMBs",
    "small business AI tools",
    "Pittsboro NC AI consulting",
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
    title: "SMF Works | AI Solutions for Small Business",
    description:
      "AI-powered content and workflow solutions for small businesses. Forged by 30 years of enterprise experience. Practical. Precise. Priced for SMBs.",
    url: "https://smfworks.com",
    siteName: "SMF Works",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://smfworks.com/smf-logo.png",
        width: 1200,
        height: 630,
        alt: "SMF Works — AI Solutions for Small Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMF Works | AI Solutions for Small Business",
    description:
      "AI-powered content and workflow solutions for small businesses. Practical. Precise. Priced for SMBs.",
    images: ["https://smfworks.com/smf-logo.png"],
    creator: "@smfworks",
  },
  alternates: {
    canonical: "https://smfworks.com",
  },
  metadataBase: new URL("https://smfworks.com"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SMF Works",
  url: "https://smfworks.com",
  logo: "https://smfworks.com/smf-logo.png",
  description:
    "AI-powered content production and workflow automation for small businesses. Founded by a Principal AI Solutions Engineer with 30 years of enterprise experience.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pittsboro",
    addressRegion: "NC",
    postalCode: "27312",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 35.7246,
      longitude: -79.1769,
    },
    geoRadius: "100000",
  },
  serviceType: [
    "AI Content Production",
    "AI Workflow Consulting",
    "Process Automation",
    "Website Design",
    "SEO Content",
    "Email Marketing",
    "Social Media Management",
  ],
  sameAs: [
    "https://x.com/smfworks",
    "https://www.linkedin.com/company/smfworks",
    "https://www.instagram.com/smfworks",
    "https://www.tiktok.com/@smfworks",
    "https://www.youtube.com/@smfworks",
  ],
  email: "michael@smfworks.com",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-navy text-text antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
