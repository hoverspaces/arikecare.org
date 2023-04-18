/** @type {import('next').NextConfig} */
// Config to allow deployment on Cloudflare Pages
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    runtime: 'edge',
  }
}

module.exports = nextConfig
