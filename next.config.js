/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // If you serve a camera/stream from a different origin, you may need this:
  images: { remotePatterns: [{ protocol: 'http', hostname: '**' }, { protocol: 'https', hostname: '**' }] },
};
module.exports = nextConfig;
