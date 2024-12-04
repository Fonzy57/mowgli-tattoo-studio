/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV == "production";

const nextConfig = {
  /* ------------------------------------------------- */
  /* TODO REMOVE WHEN DEPLOY ON OTHER THAN GITHUB PAGE */
  basePath: isProd ? '/mowgli-tattoo-studio' : '',
  assetPrefix: isProd ? '/mowgli-tattoo-studio/' : '',
  /* ------------------------------------------------- */
  reactStrictMode: true,
};

module.exports = nextConfig;
