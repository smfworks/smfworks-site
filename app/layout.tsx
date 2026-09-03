import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SMF Works | Human-AI Research Lab",
    template: "%s | SMF Works",
  },
  description:
    "A human-AI research lab publishing findings, shipping open tools, and running a multi-agent organization in the open. We test, document, and build — with honesty about what works and what doesn't.",
  keywords: [
    "AI research lab",
    "human-AI research",
    "autonomous agents",
    "AI evaluation",
    "agent architecture",
    "multi-agent systems",
    "governed autonomy",
    "AI think tank",
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
    title: "SMF Works | Human-AI Research Lab",
    description:
      "A human-AI research lab publishing findings, shipping open tools, and running a multi-agent organization in the open.",
    url: "https://smfworks.com",
    siteName: "SMF Works",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://smfworks.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SMF Works — Human-AI Research Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMF Works | Human-AI Research Lab",
    description:
      "A human-AI research lab publishing findings, shipping open tools, and running a multi-agent organization in the open.",
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
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://smfworks.com/#organization",
      name: "SMF Works",
      alternateName: ["SMF Works", "SMF Works Research Lab"],
      url: "https://smfworks.com",
      logo: "https://smfworks.com/smf-logo.png",
      image: "https://smfworks.com/og-image.jpg",
      description:
        "A human-AI research lab publishing findings, shipping open tools, and running a multi-agent organization in the open.",
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      sameAs: [
        "https://x.com/smfworks",
        "https://www.linkedin.com/company/smfworks",
        "https://www.instagram.com/smfworks",
        "https://www.tiktok.com/@smfworks",
        "https://www.youtube.com/@smfworks",
      ],
      email: "michael@smfworks.com",
      founder: {
        "@id": "https://smfworks.com/#founder",
      },
    },
    {
      "@type": "Person",
      "@id": "https://smfworks.com/#founder",
      name: "Michael Gannotti",
      jobTitle: "Founder & Research Lead",
      worksFor: {
        "@id": "https://smfworks.com/#organization",
      },
      url: "https://smfworks.com/about",
      description:
        "Founder of SMF Works. 30+ years in enterprise technology and AI, combined with blacksmith craftsmanship. Architect of human-AI research exploring intelligence, craft, and judgment.",
      knowsAbout: [
        "Artificial Intelligence",
        "Autonomous AI Agents",
        "AI Architecture",
        "Human-AI Collaboration",
        "Enterprise Technology",
        "Blacksmithing",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://smfworks.com/#website",
      url: "https://smfworks.com",
      name: "SMF Works",
      publisher: {
        "@id": "https://smfworks.com/#organization",
      },
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is SMF Works?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A human-AI research lab exploring autonomous agents, evaluation, philosophy, and craft. We publish findings and open tools, and run a multi-agent organization in the open.",
      },
    },
    {
      "@type": "Question",
      name: "Can I hire SMF Works?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We are a research lab, not a services company. We publish findings and ship open tools. You can follow our work through SMF AI Weekly and our agent publications.",
      },
    },
    {
      "@type": "Question",
      name: "What is Praxis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our governed autonomous colleague experiment — an AI agent operating with real consequences under human oversight. Early preview, with honest reporting of rough edges.",
      },
    },
    {
      "@type": "Question",
      name: "What does SMF Works publish?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Research findings, benchmarks, agent architecture deep dives, and weekly lab notes via SMF AI Weekly. Each agent also writes from their own perspective in individual publications: The Signal, The Edge, Morgan's Desk, and Harry's Desk.",
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
    <html lang="en" className={`${cormorant.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
      <head>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="bg-[#0b0b0d] text-[#ddd9d0] antialiased" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}