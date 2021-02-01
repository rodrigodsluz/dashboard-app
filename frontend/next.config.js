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

const webpack = require('webpack')
const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const path = require('path');
// const isDevelopment = process.env.NODE_ENV === 'development'
// const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
    webpack: (config, { dev }) => {
        config.plugins.push(
            new webpack.EnvironmentPlugin(process.env),
        );

        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['static'] = path.join(__dirname, 'static')

        return config;
    },
};

module.exports = withPlugins([
    [optimizedImages, {
        handleImages: ['jpeg', 'png', 'svg'],
    }],
    withCSS
    ],
    nextConfig
);

