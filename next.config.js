/** @type {import('next').NextConfig} */

// USE TO CHECK IF IS DEPLOYING ON GITHUB PAGES
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  basePath: isGithubPages ? '/mowgli-tattoo-studio' : '',
  assetPrefix: isGithubPages ? '/mowgli-tattoo-studio/' : '',
  reactStrictMode: true,
};

module.exports = nextConfig;
