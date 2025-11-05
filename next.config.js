/** @type {import('next').NextConfig} */

// USE TO CHECK IF IS DEPLOYING ON GITHUB PAGES
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  basePath: isGithubPages ? '/mowgli-tattoo-studio' : '',
  assetPrefix: isGithubPages ? '/mowgli-tattoo-studio/' : '',
  reactStrictMode: true,
  output: 'standalone',
  images: {
    unoptimized: true, // TODO: remove when hosted on real server
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? '/mowgli-tattoo-studio' : '',
  },
};

module.exports = nextConfig;
