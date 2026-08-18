/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // Required from Next.js 16 on: every `quality` passed to <Image> must be listed here.
    // 55 = decorative hero spiral, 60 = lazy slider tiles, 75 = Next.js default.
    qualities: [55, 60, 75],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
    ],
  },
  async headers() {
    const cspHeader = `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://www.googletagmanager.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' blob: data: https://img.youtube.com https://i.ytimg.com https://www.gstatic.com;
      font-src 'self' https://fonts.gstatic.com data:;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-ancestors 'none';
      frame-src 'self' https://www.google.com/recaptcha/ https://www.youtube.com/ https://www.youtube-nocookie.com/;
      connect-src 'self' https://www.google-analytics.com https://stats.g.doubleclick.net https://www.google.com/recaptcha/;
    `.replace(/\s{2,}/g, ' ').trim();

    // Defines global security headers applied to all routes
    const securityHeaders = [
      {
        key: 'Content-Security-Policy',
        value: cspHeader,
      },
      {
        key: "X-DNS-Prefetch-Control",
        value: "on",
      },
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
      {
        key: "X-Content-Type-Options",
        value: "nosniff",
      },
      {
        key: "Referrer-Policy",
        value: "origin-when-cross-origin",
      },
      {
        // Prevents Clickjacking
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN'
      },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
      },
    ];

    return [
      {
        // Apply global security headers to all paths
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/tools/converter",
        headers: [
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
        ],
      },
      {
        // iOS Safari requires byte-range support to stream MP4 video.
        // Without Accept-Ranges it may silently refuse to play even with a valid source.
        source: "/assets/videos/:path*",
        headers: [
          {
            key: "Accept-Ranges",
            value: "bytes",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  redirects: async () => {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "socialengagementgroup.com" }],
        destination: "https://www.socialengagementgroup.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
