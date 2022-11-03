/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental:{appDir: true},
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'camiestas-futbol.effectstudios.co',
          // port: '',
          // pathname: '',
        },
      ],
      experimental: {
        fontLoaders: [
          { loader: '@next/font/google', options: { subsets: ['latin'] } },
        ],
      },
    },
  }
  
  module.exports = nextConfig