import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://smfworks.com";
  const now = new Date();

  const blogSlugs = [
    "why-local-businesses-need-ai-now",
    "5-ways-small-business-owners-save-hours-with-ai",
    "seo-for-trades-businesses",
    "ai-content-vs-traditional-agencies",
  ];

  const newsletterSlugs = [
    "2026-03-06",
    "2026-02-27",
    "2026-02-20",
    "2026-02-13",
    "2026-02-06",
    "2026-01-30",
  ];

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/newsletter`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/the-edge`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/liams-landing`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/drj`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/harrys-desk`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/jeffs-journal`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    // Removed: services (archived), skills (archived), the-signal, the-terminal, the-social-forge (suspended)
    ...blogSlugs.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...newsletterSlugs.map((slug) => ({
      url: `${base}/newsletter/${slug}`,
      lastModified: now,
      changeFrequency: "never" as const,
      priority: 0.6,
    })),
  ];
}
