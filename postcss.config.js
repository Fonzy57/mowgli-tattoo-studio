// USE TO CHECK IF IS DEPLOYING ON GITHUB PAGES
const isGithubPages = process.env.GITHUB_PAGES === 'true';

/* TODO SUPPRIMER APRES LES TESTS */
console.log('isGithubPages POSTCSS config : ', isGithubPages);


module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(isGithubPages && {
      'postcss-url': {
        url: ({ url }) => {
          const basePath = '/mowgli-tattoo-studio';
          if (url.startsWith('/')) {
            return `${basePath}${url}`;
          }
          return url;
        },
      },
    }),
  },
};
