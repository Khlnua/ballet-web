import type { NextConfig } from 'next';

const config: NextConfig = {
  images: {
    domains: [
      'images.unsplash.com', 
      'via.placeholder.com', 
      'picsum.photos',
      'pub-c732fae67a4540d5ae377e19b62491a7.r2.dev',
      'static.vecteezy.com',
      'images.squarespace-cdn.com'
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }
    return config;
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default config;
