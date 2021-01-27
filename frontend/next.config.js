const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
});

module.exports = {
  env: {
    REACT_APP_API_URL: 'http://localhost:3333',
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};
