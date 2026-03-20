import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import SMFLeadCaptureWidget from "@/components/SMFLeadCaptureWidget";

export const metadata: Metadata = {
  title: {
    default: "SMF Works | AI Solutions for Small Business — Content & Workflow Automation",
    template: "%s | SMF Works",
  },
  description:
    "AI-powered content creation and workflow automation built for small businesses. Professional SEO/GEO blogs, emails, social media, websites and custom AI systems for trades, services & retail owners. Start saving time today.",
  keywords: [
    "AI solutions for small business",
    "AI workflow consulting",
    "content production for small business",
    "small business automation",
    "AI for trades businesses",
    "SEO content for small business",
    "GEO content for small business",
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
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://smfworks.com/#organization",
      name: "SMF Works",
      alternateName: "SMF Works AI Solutions",
      url: "https://smfworks.com",
      logo: "https://smfworks.com/smf-logo.png",
      image: "https://smfworks.com/og-image.jpg",
      description:
        "AI-powered content creation and workflow automation for small businesses. Professional SEO blogs, emails, social media, websites and custom AI systems.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pittsboro",
        addressRegion: "NC",
        postalCode: "27312",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      serviceType: [
        "AI Content Production",
        "AI Workflow Automation",
        "SEO Services",
        "Marketing Automation",
        "Small Business Consulting",
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
      founder: {
        "@id": "https://smfworks.com/#founder",
      },
    },
    {
      "@type": "Person",
      "@id": "https://smfworks.com/#founder",
      name: "Michael",
      jobTitle: "Principal AI Solutions Engineer & Founder",
      worksFor: {
        "@id": "https://smfworks.com/#organization",
      },
      url: "https://smfworks.com/about",
      description:
        "30+ years enterprise tech and AI experience combined with blacksmith craftsmanship. Delivering high-impact AI content and automation solutions to small businesses.",
      knowsAbout: [
        "Artificial Intelligence",
        "AI Content Production",
        "Workflow Automation",
        "SEO for Small Business",
        "Enterprise Technology",
        "Small Business Marketing",
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
        text: "SMF Works provides AI-powered content creation and workflow automation for small businesses. We specialize in SEO-optimized blogs, emails, social media, websites, and custom AI systems for trades, services, and retail businesses nationwide.",
      },
    },
    {
      "@type": "Question",
      name: "How can AI help my small business save time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI can automate content creation, email responses, social media scheduling, and repetitive admin tasks. Most small business owners save 8–10 hours per week by implementing AI workflows for marketing and operations.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does SMF Works serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with small businesses in trades (plumbers, electricians, HVAC), services (consultants, agencies, professional services), and retail. Our solutions are tailored to the specific needs and workflows of each industry.",
      },
    },
    {
      "@type": "Question",
      name: "How much does AI content production cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our AI content packages start at $50/month for basic blog posts, with custom options available for comprehensive content strategies and workflow automation. We offer transparent pricing with no hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between AI content and traditional agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI content production is faster, more affordable, and more scalable than traditional agencies. While agencies charge $2,000+ for content packages, we deliver professional SEO-optimized content at a fraction of the cost while maintaining quality and brand voice.",
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
    <html lang="en">
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
      <body className="bg-navy text-text antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <SMFLeadCaptureWidget />
      </body>
    </html>
  );
}
