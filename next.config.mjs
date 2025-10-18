// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;







// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.giohy.com',
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.gif$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;
