import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://smfworks.com";
  const now = new Date();

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/services`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${base}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/blog`, priority: 0.9, changeFrequency: "daily" as const },
    { url: `${base}/newsletter`, priority: 0.7, changeFrequency: "weekly" as const },
  ];

  const servicePages = [
    "company-websites",
    "blog-posts-articles",
    "email-sequences",
    "social-media-content",
    "white-papers-reports",
    "thought-leadership",
    "website-copy",
    "process-automation",
    "ai-tool-selection",
    "custom-ai-workflows",
    "staff-enablement",
    "roi-analysis",
    "ongoing-optimization",
  ].map((slug) => ({
    url: `${base}/services/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  return [
    ...staticPages.map((p) => ({ ...p, lastModified: now })),
    ...servicePages,
  ];
}
