import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
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

export const metadata: Metadata = {
  title: {
    default: "SMF Works | Human-AI Research Lab",
    template: "%s | SMF Works",
  },
  description:
    "A human-AI research lab publishing findings, shipping open agent tools, and installing working Hermes or OpenClaw stacks for owners who keep the keys.",
  keywords: [
    "AI research lab",
    "human-AI research",
    "autonomous agents",
    "Hermes agent",
    "OpenClaw",
    "agent setup",
    "AI evaluation",
    "multi-agent systems",
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
      "A human-AI research lab. Agent systems, open tools, and Agent Setup packages — Starter $2,000, Standard $3,500.",
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
      "A human-AI research lab. Agent systems, open tools, and Agent Setup for owners who keep the keys.",
    images: ["https://smfworks.com/og-image.jpg"],
    creator: "@MichaelGannotti",
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
        "A human-AI research lab publishing findings, shipping open agent tools, and installing working agent stacks.",
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      sameAs: [
        "https://x.com/MichaelGannotti",
        "https://x.com/smfworks",
        "https://github.com/smfworks",
        "https://www.linkedin.com/company/smfworks",
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
      jobTitle: "Principal AI",
      worksFor: {
        "@id": "https://smfworks.com/#organization",
      },
      url: "https://smfworks.com/about",
      sameAs: ["https://x.com/MichaelGannotti"],
      description:
        "Principal AI at SMF Works. Leads a human-AI research lab that ships agent systems, open tools, and Agent Setup packages.",
      knowsAbout: [
        "Artificial Intelligence",
        "Autonomous AI Agents",
        "AI Architecture",
        "Human-AI Collaboration",
        "Enterprise Technology",
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
        text: "A human-AI research lab exploring autonomous agents, evaluation, and agent operations. We publish findings, ship open tools, and offer fixed-scope Agent Setup packages.",
      },
    },
    {
      "@type": "Question",
      name: "Can I hire SMF Works?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — for Agent Setup. Starter is $2,000, Standard is $3,500, and Keep-alive is $300 per month after handoff. We install Hermes on Omarchy or OpenClaw, tailor a small set of workflows, and hand back a runbook. We do not sell open-ended custom software or compliance-certified products.",
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
        text: "Research findings, benchmarks, and practitioner guides live at the AI Clearinghouse. SMF AI Weekly is the public lab notebook. Open tools are on GitHub under smfworks.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="bg-forge-navy text-text-primary antialiased font-body">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
