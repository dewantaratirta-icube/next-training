/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'vignette.wikia.nocookie.net',
        },
        {
          protocol: 'https',
          hostname: 'www.themealdb.com',
        }
      ],
    },
  },
}

module.exports = nextConfig