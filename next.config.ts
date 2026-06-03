import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // The portfolio ships a local profile image and has no remote image host.
    // Unoptimized keeps it portable across Vercel, static export, and any host.
    unoptimized: true,
  },
}

export default nextConfig
