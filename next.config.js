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
      // Canonical site reshaping: company/project content lives on smfworks.com;
      // clearinghouse catalog and tools live on smfclearinghouse.com.
      {
        source: "/projects",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/projects/:path*",
        destination: "/work/:path*",
        permanent: true,
      },
      {
        source: "/dev",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/dev/:path*",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/skills-archived",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/skills-archived/:path*",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/services-archived",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/services-archived/:path*",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/pay-archived",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/pay-archived/:path*",
        destination: "/work",
        permanent: true,
      },
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
        source: "/services/:path*",
        destination: "https://www.smfclearinghouse.com/services/:path*",
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
      // Blog reshaping: all /blog traffic goes to /research (which links to Clearinghouse);
      // individual legacy /blog/* posts live on the clearinghouse blog.
      {
        source: "/blog",
        destination: "/research",
        permanent: true,
      },
      {
        source: "/blog/:slug*",
        destination: "https://www.smfclearinghouse.com/blog/:slug*",
        permanent: true,
      },
      // Publication route consolidation: old top-level routes → /publications/[name]
      {
        source: "/the-signal",
        destination: "/publications/the-signal",
        permanent: true,
      },
      {
        source: "/the-signal/:slug*",
        destination: "/publications/the-signal/:slug*",
        permanent: true,
      },
      {
        source: "/the-edge",
        destination: "/publications/the-edge",
        permanent: true,
      },
      {
        source: "/the-edge/:slug*",
        destination: "/publications/the-edge/:slug*",
        permanent: true,
      },
      {
        source: "/morgan",
        destination: "/publications/morgans-desk",
        permanent: true,
      },
      {
        source: "/morgan/:slug*",
        destination: "/publications/morgans-desk/:slug*",
        permanent: true,
      },
      {
        source: "/harrys-desk",
        destination: "/publications/harrys-desk",
        permanent: true,
      },
      {
        source: "/harrys-desk/:slug*",
        destination: "/publications/harrys-desk/:slug*",
        permanent: true,
      },
      // Dashboard stub → newsletter
      {
        source: "/dashboard",
        destination: "/newsletter",
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
      // Three-page restructuring: trim to Home, Research, About
      {
        source: "/work",
        destination: "/",
        permanent: true,
      },
      {
        source: "/books",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/books/:slug*",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/newsletter",
        destination: "/",
        permanent: true,
      },
      {
        source: "/newsletter/:slug*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/publications",
        destination: "/research",
        permanent: true,
      },
      {
        source: "/publications/:path*",
        destination: "https://www.smfclearinghouse.com/blog",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;