/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: ['pbs.twimg.com'],
  },
};

module.exports = nextConfig;
