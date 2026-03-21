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

  // Free skills
  const freeSkillSlugs = [
    "file-organizer",
    "pdf-toolkit",
    "text-formatter",
    "qr-generator",
    "system-monitor",
    "website-checker",
    "csv-converter",
    "image-resizer",
    "password-generator",
    "markdown-converter",
  ];

  // Pro skills
  const proSkillSlugs = [
    "lead-capture",
    "database-backup",
    "report-generator",
    "email-campaign",
    "task-manager",
    "self-improvement",
    "invoice-generator",
    "form-builder",
    "booking-engine",
    "openclaw-optimizer",
  ];

  const allSkillSlugs = [...freeSkillSlugs, ...proSkillSlugs];

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/newsletter`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/skills`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
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
    ...allSkillSlugs.map((slug) => ({
      url: `${base}/skills/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
