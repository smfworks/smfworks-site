import { NextResponse } from "next/server";

// IndexNow key — also needs a matching file at /public/[key].txt
const INDEXNOW_KEY = "smfworks2026indexnow";
const SITE_URL = "https://smfworks.com";

// All site URLs to submit
const ALL_URLS = [
  `${SITE_URL}/`,
  `${SITE_URL}/services`,
  `${SITE_URL}/about`,
  `${SITE_URL}/contact`,
  `${SITE_URL}/blog`,
  `${SITE_URL}/blog/why-local-businesses-need-ai-now`,
  `${SITE_URL}/blog/5-ways-small-business-owners-save-hours-with-ai`,
  `${SITE_URL}/blog/seo-for-trades-businesses`,
  `${SITE_URL}/blog/ai-content-vs-traditional-agencies`,
  `${SITE_URL}/newsletter`,
  `${SITE_URL}/newsletter/2026-03-06`,
  `${SITE_URL}/newsletter/2026-02-27`,
  `${SITE_URL}/newsletter/2026-02-20`,
  `${SITE_URL}/newsletter/2026-02-13`,
  `${SITE_URL}/newsletter/2026-02-06`,
  `${SITE_URL}/newsletter/2026-01-30`,
];

export async function GET() {
  return submitToIndexNow(ALL_URLS);
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const urls = body.urls || ALL_URLS;
  return submitToIndexNow(urls);
}

async function submitToIndexNow(urls: string[]) {
  try {
    // Submit to IndexNow (notifies Bing, Yandex, and others simultaneously)
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

    return NextResponse.json({
      success: resp.ok,
      status: resp.status,
      urls_submitted: urls.length,
      message: resp.ok
        ? `✅ ${urls.length} URLs submitted to IndexNow`
        : `❌ IndexNow returned ${resp.status}`,
    });
  } catch (e) {
    return NextResponse.json({ success: false, error: String(e) }, { status: 500 });
  }
}
