/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/Lamborghini-Miura-showcase',
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
