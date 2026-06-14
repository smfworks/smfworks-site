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
      // TODO: migrate /agentmarketplace routes to /clearinghouse and enable these redirects
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