/** @type {import('next').NextConfig} */

// USE TO CHECK IF IS DEPLOYING ON GITHUB PAGES
const isGithubPages = process.env.GITHUB_PAGES === 'true';

// CHECK IF IS PRODUCTION
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isGithubPages ? '/mowgli-tattoo-studio' : '',
  assetPrefix: isGithubPages ? '/mowgli-tattoo-studio/' : '',
  reactStrictMode: true,
  images: {
    unoptimized: true, // TODO: remove when hosted on real server
  },
  ...(isProd && { output: 'export' }),
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? '/mowgli-tattoo-studio' : '',
  },
};

module.exports = nextConfig;
