/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'vignette.wikia.nocookie.net',
        },
      ],
    },
  },
}

module.exports = nextConfig
