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
    ];
  },
};
module.exports = nextConfig;