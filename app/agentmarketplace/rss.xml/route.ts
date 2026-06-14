import { NextResponse } from "next/server";
import { getAllAgents } from "@/lib/marketplace/loader";
import { getAllItems } from "@/lib/marketplace/loader";
import { aiNewsItems } from "@/lib/marketplace/news-data";

export async function GET() {
  const agents = getAllAgents();
  const sections = [
    { name: "Services", slug: "services" },
    { name: "Skills", slug: "skills" },
    { name: "Guides", slug: "guides" },
    { name: "Tips", slug: "tips" },
    { name: "Tests", slug: "tests" },
    { name: "Self-Hosting", slug: "self-hosting" },
    { name: "Use Cases", slug: "use-cases" },
    { name: "Alternatives", slug: "alternatives" },
    { name: "Deployment Recipes", slug: "deployment-recipes" },
    { name: "Deals", slug: "deals" },
    { name: "Changelog", slug: "changelog" },
    { name: "Safety", slug: "safety" },
    { name: "Getting Started", slug: "getting-started" },
    { name: "The Lab", slug: "lab" },
  ];

  const items = [
    ...agents.map((a) => ({
      title: `Agent: ${a.name}`,
      href: `https://smfworks.com/agentmarketplace/${a.id}`,
      date: new Date().toISOString().slice(0, 10),
      description: a.tagline,
    })),
    ...sections.flatMap(({ slug }) =>
      getAllItems(slug).map((i: any) => ({
        title: `${slug}: ${i.title}`,
        href: `https://smfworks.com/agentmarketplace/${slug}/${i.slug}`,
        date: new Date().toISOString().slice(0, 10),
        description: i.excerpt,
      }))
    ),
    ...aiNewsItems.slice(0, 10).map((n) => ({
      title: `AI News: ${n.title}`,
      href: n.url,
      date: n.date,
      description: `Source: ${n.source} · ${n.category}`,
    })),
  ];

  const channel = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SMF Works Agent Marketplace</title>
    <link>https://smfworks.com/agentmarketplace</link>
    <description>New agents, LLMs, services, guides, and news from the SMF Works Agent Marketplace.</description>
    <language>en-us</language>
    <atom:link href="https://smfworks.com/agentmarketplace/rss.xml" rel="self" type="application/rss+xml" />
    ${items
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 50)
      .map(
        (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.href}</link>
      <guid>${item.href}</guid>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
      <description>${escapeXml(item.description)}</description>
    </item>
    `
      )
      .join("")}
  </channel>
</rss>`;

  return new NextResponse(channel, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}

function escapeXml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
