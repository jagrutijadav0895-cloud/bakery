/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    // Allow all domains for development/testing
    // unoptimized: true // Uncomment if images still don't load
  },
}

module.exports = nextConfig
