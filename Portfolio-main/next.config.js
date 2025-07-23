/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: [
    '@react-email/render',
  ],
  // Optional: if you're using image optimization from external sources
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'cdn.jsdelivr.net',
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
