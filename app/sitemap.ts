import { MetadataRoute } from "next";
import { getAllSignalPosts } from "@/content/lib/signal-loader";
import { getAllEdgePosts } from "@/content/lib/edge-loader";
import { getAllMorganPosts } from "@/content/lib/morgan-loader";
import { getAllHarryPosts } from "@/content/lib/harry-loader";
import { getAllIssues } from "@/content/lib/newsletter-loader";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://smfworks.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/research`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/publications`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/publications/the-signal`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/publications/the-edge`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/publications/morgans-desk`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/publications/harrys-desk`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/books`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/newsletter`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const signalPosts = getAllSignalPosts().map((post) => ({
    url: `${base}/publications/the-signal/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "never" as const,
    priority: 0.7,
  }));

  const edgePosts = getAllEdgePosts().map((post) => ({
    url: `${base}/publications/the-edge/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "never" as const,
    priority: 0.7,
  }));

  const morganPosts = getAllMorganPosts().map((post) => ({
    url: `${base}/publications/morgans-desk/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "never" as const,
    priority: 0.7,
  }));

  const harryPosts = getAllHarryPosts().map((post) => ({
    url: `${base}/publications/harrys-desk/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "never" as const,
    priority: 0.7,
  }));

  const newsletterIssues = getAllIssues().map((issue) => ({
    url: `${base}/newsletter/${issue.slug}`,
    lastModified: new Date(issue.date),
    changeFrequency: "never" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...signalPosts,
    ...edgePosts,
    ...morganPosts,
    ...harryPosts,
    ...newsletterIssues,
  ];
}