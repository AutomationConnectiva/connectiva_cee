/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '://google.com',
      },
      {
        protocol: 'https',
        hostname: '://googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;

// Keeps your Cloudflare compilation environment tracking smoothly
import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
