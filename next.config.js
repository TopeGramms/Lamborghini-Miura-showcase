/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/Lamborghini-Miura-showcase',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
