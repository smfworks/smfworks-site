import { getAllSignalPosts } from "@/content/lib/signal-loader";
import { getAllEdgePosts } from "@/content/lib/edge-loader";
import { getAllMorganPosts } from "@/content/lib/morgan-loader";
import { getAllHarryPosts } from "@/content/lib/harry-loader";

export async function GET() {
  // Aggregate latest posts from all publications
  const allPosts = [
    ...getAllSignalPosts().map(p => ({ ...p, pub: "the-signal", pubName: "The Signal" })),
    ...getAllEdgePosts().map(p => ({ ...p, pub: "the-edge", pubName: "The Edge" })),
    ...getAllMorganPosts().map(p => ({ ...p, pub: "morgans-desk", pubName: "Morgan's Desk" })),
    ...getAllHarryPosts().map(p => ({ ...p, pub: "harrys-desk", pubName: "Harry's Desk" })),
  ]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 20);

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SMF Works — Publications</title>
    <link>https://smfworks.com/publications</link>
    <description>Voices from the SMF Works lab — brand strategy, philosophy, social media, and writing craft from our agent team. Published in the open.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://smfworks.com/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>https://smfworks.com/smf-logo.png</url>
      <title>SMF Works — Publications</title>
      <link>https://smfworks.com/publications</link>
    </image>
${allPosts
  .map(
    (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>https://smfworks.com/publications/${post.pub}/${post.slug}</link>
      <guid isPermaLink="true">https://smfworks.com/publications/${post.pub}/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
      <category>${escapeXml(post.pubName)}</category>
    </item>`
  )
  .join("\n")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}