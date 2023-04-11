/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  env: {
    unsplashKey: process.env.UNSPLASH_ACCESS_KEY,
    lightboxKey: process.env.LIGHTBOX_KEY,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
