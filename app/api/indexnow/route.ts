import { NextResponse } from "next/server";

const INDEXNOW_KEY = "smfworks2026indexnow";
const SITE_URL = "https://smfworks.com";

// Dynamically build URL list — update when adding new blog posts or newsletter issues
function getAllUrls(): string[] {
  const static_pages = [
    "/", "/work", "/research", "/publications", "/about", "/contact", "/newsletter", "/books"
  ];

  const blog_slugs: string[] = [];

  const newsletter_slugs = [
    "2026-03-06", "2026-02-27", "2026-02-20",
    "2026-02-13", "2026-02-06", "2026-01-30",
  ];

  return [
    ...static_pages.map(p => `${SITE_URL}${p}`),
    ...blog_slugs.map(s => `${SITE_URL}/blog/${s}`),
    ...newsletter_slugs.map(s => `${SITE_URL}/newsletter/${s}`),
  ];
}

async function submitToIndexNow(urls: string[]) {
  const resp = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: "smfworks.com",
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  });

  return {
    success: resp.ok,
    status: resp.status,
    urls_submitted: urls.length,
    message: resp.ok
      ? `✅ ${urls.length} URLs submitted to IndexNow (Bing + Yandex)`
      : `❌ IndexNow returned ${resp.status}`,
    timestamp: new Date().toISOString(),
  };
}

// GET: submit all URLs (called by cron, deploy hook, or manually)
export async function GET() {
  const urls = getAllUrls();
  const result = await submitToIndexNow(urls);
  return NextResponse.json(result);
}

// POST: submit specific URLs (called when a single new post is published)
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const urls = body.urls?.length ? body.urls : getAllUrls();
  const result = await submitToIndexNow(urls);
  return NextResponse.json(result);
}
