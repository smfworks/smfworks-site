import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://smfworks.com";
  const now = new Date();

  const blogSlugs = [
    "openclaw-2026-4-7-agentic-ai-upgrade",
  ];

  const newsletterSlugs = [
    "2026-05-15",
    "2026-05-04",
    "2026-04-27",
    "2026-04-20",
    "2026-03-27",
    "2026-03-20",
    "2026-03-13",
    "2026-03-06",
    "2026-02-27",
    "2026-02-20",
    "2026-02-13",
    "2026-02-06",
    "2026-01-30",
  ];

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/the-signal`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/the-edge`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/morgan`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/harrys-desk`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/newsletter`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...blogSlugs.map((slug) => ({
      url: `${base}/the-signal/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...newsletterSlugs.map((slug) => ({
      url: `${base}/newsletter/${slug}`,
      lastModified: now,
      changeFrequency: "never" as const,
      priority: 0.6,
    })),
  ];
}
