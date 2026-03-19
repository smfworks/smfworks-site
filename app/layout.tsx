import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import SMFLeadCaptureWidget from "@/components/SMFLeadCaptureWidget";

export const metadata: Metadata = {
  title: {
    default: "SMF Works | HighTech Solutions for Small Business",
    template: "%s | SMF Works",
  },
  description:
    "SMF Works delivers HighTech-powered content production and workflow automation for small businesses — forged from 30 years of enterprise tech expertise. No agency pricing. No generic outputs.",
  keywords: [
    "AI solutions for small business",
    "AI workflow consulting",
    "content production for small business",
    "small business automation",
    "AI for trades businesses",
    "SEO content for small business",
    "generative AI consulting",
    "marketing automation for SMBs",
    "small business website design",
    "Pittsboro NC AI consulting",
    "SMF Works",
    "SMF AI Weekly",
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
    title: "SMF Works | HighTech Solutions for Small Business",
    description:
      "HighTech-powered content and workflow solutions for small businesses. Built by a 30-year enterprise AI engineer. Practical. Precise. Priced for SMBs.",
    url: "https://smfworks.com",
    siteName: "SMF Works",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://smfworks.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SMF Works — HighTech Solutions for Small Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMF Works | HighTech Solutions for Small Business",
    description:
      "HighTech-powered content and workflow solutions for small businesses. Practical. Precise. Priced for SMBs.",
    images: ["https://smfworks.com/og-image.jpg"],
    creator: "@smfworks",
    site: "@smfworks",
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
  "@type": "ProfessionalService",
  name: "SMF Works",
  url: "https://smfworks.com",
  logo: "https://smfworks.com/smf-logo.png",
  image: "https://smfworks.com/og-image.jpg",
  description:
    "HighTech-powered content production and workflow automation for small businesses. Founded by a Principal AI Solutions Engineer with 30 years of enterprise experience.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pittsboro",
    addressRegion: "NC",
    postalCode: "27312",
    addressCountry: "US",
  },
  areaServed: "US",
  serviceType: [
    "Marketing & SEO Content Production",
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
    "https://www.pinterest.com/michaelgannotti",
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
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-navy text-text antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <SMFLeadCaptureWidget />
      </body>
    </html>
  );
}
