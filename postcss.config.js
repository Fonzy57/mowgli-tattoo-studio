module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    /* ------------------------------------------------- */
    /* TODO REMOVE WHEN DEPLOY ON OTHER THAN GITHUB PAGE */
    'postcss-url': {
      url: ({ url }) => {
        const isProd = process.env.NODE_ENV === 'production';
        const basePath = isProd ? '/mowgli-tattoo-studio' : '';
        if (url.startsWith('/')) {
          return `${basePath}${url}`;
        }
        return url;
      },
    },
    /* ------------------------------------------------- */
  },
};
