/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/social-strategy",
        destination: "/the-social-forge",
        permanent: true,
      },
      {
        source: "/social-strategy/:slug*",
        destination: "/the-social-forge/:slug*",
        permanent: true,
      },
      {
        source: "/the-signal/testing-minimax-m3-frontier-model-one-morning",
        destination: "/drj/testing-minimax-m3-frontier-model-one-morning",
        permanent: true,
      },
      // Redirect migrated technical blog content to SMF Clearinghouse
      {
        source: "/blog/:slug*",
        destination: "https://www.smfclearinghouse.com/blog/:slug*",
        permanent: true,
      },
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
      // {
      //   source: "/agentmarketplace",
      //   destination: "/clearinghouse",
      //   permanent: true,
      // },
      // {
      //   source: "/agentmarketplace/:path*",
      //   destination: "/clearinghouse/:path*",
      //   permanent: true,
      // },
    ];
  },
};
module.exports = nextConfig;