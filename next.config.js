/** @type {import('next').NextConfig} */
// Config to allow deployment on Cloudflare Pages
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true
  },
  experimental: {
    images: {
      unoptimized: true
    }
  }
}

module.exports = nextConfig
