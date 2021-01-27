const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
});

module.exports = {
  env: {
    REACT_APP_API_URL: 'http://localhost:3333',
  },
};
