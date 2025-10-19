/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true } // avoids remote loader setup for quick testing
};
module.exports = nextConfig;
