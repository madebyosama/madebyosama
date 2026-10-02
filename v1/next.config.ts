import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['mdx', 'ts', 'tsx'],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'madebyosama-blog.pockethost.io',
      },
    ],
  },
  experimental: {
    mdxRs: { mdxType: 'gfm' },
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
