/** @type {import('next').NextConfig} */

// USE TO CHECK IF IS DEPLOYING ON GITHUB PAGES
const isGithubPages = process.env.GITHUB_PAGES === 'true';

/* TODO SUPPRIMER APRES LES TESTS */
console.log('isGithubPages NEXT config : ', isGithubPages);

const nextConfig = {
  basePath: isGithubPages ? '/mowgli-tattoo-studio' : '',
  assetPrefix: isGithubPages ? '/mowgli-tattoo-studio/' : '',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  /* TODO SUPPRIMER SI TESTS NON CONCLUANT POUR GITHUB PAGES */
  output: 'export',
};

module.exports = {
  ...nextConfig,
  publicRuntimeConfig: {
    basePath: nextConfig.basePath,
  },
};
