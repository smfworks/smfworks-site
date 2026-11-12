/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      {
        source: "/social-strategy",
        destination: "/morgan",
        permanent: true,
      },
      {
        source: "/social-strategy/:slug*",
        destination: "/morgan/:slug*",
        permanent: true,
      },
      {
        source: "/the-social-forge",
        destination: "/morgan",
        permanent: true,
      },
      {
        source: "/the-social-forge/:slug*",
        destination: "/morgan/:slug*",
        permanent: true,
      },
      {
        source: "/the-signal/testing-minimax-m3-frontier-model-one-morning",
        destination: "/drj/testing-minimax-m3-frontier-model-one-morning",
        permanent: true,
      },
      // Clearinghouse catalog and tools live on smfclearinghouse.com.
      // First-party pages removed in the single-page reorg are not redirected.
      {
        source: "/whitepapers",
        destination: "https://www.smfclearinghouse.com/whitepapers",
        permanent: true,
      },
      {
        source: "/whitepapers/:path*",
        destination: "https://www.smfclearinghouse.com/whitepapers/:path*",
        permanent: true,
      },
      // Redirect clearinghouse mirror routes to canonical clearinghouse domain
      {
        source: "/agents/:path*",
        destination: "https://www.smfclearinghouse.com/agents/:path*",
        permanent: true,
      },
      {
        source: "/llms/:path*",
        destination: "https://www.smfclearinghouse.com/llms/:path*",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/:slug",
        destination: "https://www.smfclearinghouse.com/services/:slug",
        permanent: true,
      },
      {
        source: "/services/:slug/:path*",
        destination: "https://www.smfclearinghouse.com/services/:slug/:path*",
        permanent: true,
      },
      {
        source: "/skills/:path*",
        destination: "https://www.smfclearinghouse.com/skills/:path*",
        permanent: true,
      },
      {
        source: "/tips/:path*",
        destination: "https://www.smfclearinghouse.com/tips/:path*",
        permanent: true,
      },
      {
        source: "/tests/:path*",
        destination: "https://www.smfclearinghouse.com/tests/:path*",
        permanent: true,
      },
      {
        source: "/guides/:path*",
        destination: "https://www.smfclearinghouse.com/guides/:path*",
        permanent: true,
      },
      {
        source: "/deployment-recipes/:path*",
        destination: "https://www.smfclearinghouse.com/deployment-recipes/:path*",
        permanent: true,
      },
      {
        source: "/ai-news/:path*",
        destination: "https://www.smfclearinghouse.com/ai-news/:path*",
        permanent: true,
      },
      {
        source: "/reviews/:path*",
        destination: "https://www.smfclearinghouse.com/reviews/:path*",
        permanent: true,
      },
      {
        source: "/alternatives/:path*",
        destination: "https://www.smfclearinghouse.com/alternatives/:path*",
        permanent: true,
      },
      {
        source: "/deals/:path*",
        destination: "https://www.smfclearinghouse.com/deals/:path*",
        permanent: true,
      },
      {
        source: "/safety/:path*",
        destination: "https://www.smfclearinghouse.com/safety/:path*",
        permanent: true,
      },
      {
        source: "/changelog/:path*",
        destination: "https://www.smfclearinghouse.com/changelog/:path*",
        permanent: true,
      },
      {
        source: "/self-hosting/:path*",
        destination: "https://www.smfclearinghouse.com/self-hosting/:path*",
        permanent: true,
      },
      {
        source: "/use-cases/:path*",
        destination: "https://www.smfclearinghouse.com/use-cases/:path*",
        permanent: true,
      },
      {
        source: "/what-is-the-clearinghouse",
        destination: "https://www.smfclearinghouse.com/",
        permanent: true,
      },
      {
        source: "/agentmarketplace",
        destination: "https://www.smfclearinghouse.com/",
        permanent: true,
      },
      {
        source: "/agentmarketplace/:path*",
        destination: "https://www.smfclearinghouse.com/:path*",
        permanent: true,
      },
      // Legacy /blog posts live on the clearinghouse. /blog itself is gone with the reorg.
      {
        source: "/blog/:slug*",
        destination: "https://www.smfclearinghouse.com/blog/:slug*",
        permanent: true,
      },
      // Publication route consolidation: old top-level routes → /publications/[name]
      // The Signal archive moved to the Clearinghouse. Do not chain through /publications.
      {
        source: "/publications/the-signal",
        destination: "https://www.smfclearinghouse.com/blog/series/signal/",
        permanent: true,
      },
      {
        source: "/publications/the-signal/:slug",
        destination: "https://www.smfclearinghouse.com/blog/:slug/",
        permanent: true,
      },
      {
        source: "/the-signal",
        destination: "https://www.smfclearinghouse.com/blog/series/signal/",
        permanent: true,
      },
      {
        source: "/the-signal/:slug",
        destination: "https://www.smfclearinghouse.com/blog/:slug/",
        permanent: true,
      },
      {
        source: "/morgan",
        destination: "https://www.smfclearinghouse.com/blog/series/morgan/",
        permanent: true,
      },
      {
        source: "/morgan/:slug",
        destination: "https://www.smfclearinghouse.com/blog/:slug/",
        permanent: true,
      },
      {
        source: "/publications/morgans-desk",
        destination: "https://www.smfclearinghouse.com/blog/series/morgan/",
        permanent: true,
      },
      {
        source: "/publications/morgans-desk/:slug",
        destination: "https://www.smfclearinghouse.com/blog/:slug/",
        permanent: true,
      },
      {
        source: "/harrys-desk",
        destination: "https://www.smfclearinghouse.com/blog/series/harry/",
        permanent: true,
      },
      {
        source: "/harrys-desk/:slug",
        destination: "https://www.smfclearinghouse.com/blog/:slug/",
        permanent: true,
      },
      {
        source: "/publications/harrys-desk",
        destination: "https://www.smfclearinghouse.com/blog/series/harry/",
        permanent: true,
      },
      {
        source: "/publications/harrys-desk/:slug",
        destination: "https://www.smfclearinghouse.com/blog/:slug/",
        permanent: true,
      },
      // Archived technical series voices now live on the clearinghouse blog.
      {
        source: "/the-terminal/:slug*",
        destination: "https://www.smfclearinghouse.com/blog/:slug*",
        permanent: true,
      },
      {
        source: "/drj/:slug*",
        destination: "https://www.smfclearinghouse.com/blog/:slug*",
        permanent: true,
      },
      {
        source: "/jeffs-journal/:slug*",
        destination: "https://www.smfclearinghouse.com/blog/:slug*",
        permanent: true,
      },
      {
        source: "/liams-landing/:slug*",
        destination: "https://www.smfclearinghouse.com/blog/:slug*",
        permanent: true,
      },
      // The Edge routes are intentionally absent so old /the-edge links 404.
      // / and /privacy are the remaining first-party pages. /services redirects home.
    ];
  },
};
module.exports = nextConfig;