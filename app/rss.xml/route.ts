import { getAllPosts } from "@/content/lib/blog-loader";

export async function GET() {
  const posts = getAllPosts().slice(0, 20);

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>The SMF Works Project Blog</title>
    <link>https://smfworks.com/blog</link>
    <description>Practical AI and automation advice for small business owners. Weekly posts on AI adoption, agentic AI, SEO content strategies, and real-world implementation.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://smfworks.com/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>https://smfworks.com/smf-logo.png</url>
      <title>The SMF Works Project Blog</title>
      <link>https://smfworks.com/blog</link>
    </image>
${posts
  .map(
    (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>https://smfworks.com/blog/${post.slug}</link>
      <guid isPermaLink="true">https://smfworks.com/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
      <category>${post.categories.join("</category>\n      <category>")}</category>
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
