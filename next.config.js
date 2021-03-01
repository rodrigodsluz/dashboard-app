const { resolve } = require('path');

/**
 * Resolve tsconfig.json paths to Webpack aliases
 * @param  {string} tsconfigPath           - Path to tsconfig
 * @param  {string} webpackConfigBasePath  - Path from tsconfig to Webpack config to create absolute aliases
 * @return {object}                        - Webpack alias config
 */
function resolveTsconfigPathsToAlias({
  tsconfigPath = './tsconfig.server.json',
  webpackConfigBasePath = __dirname,
} = {}) {
  const { paths } = require(tsconfigPath).compilerOptions;
  const aliases = {};

  Object.keys(paths).forEach((item) => {
    const key = item.replace('/*', '');
    const value = resolve(
      webpackConfigBasePath,
      paths[item][0].replace('/*', '').replace('*', '')
    );
    aliases[key] = value;
  });

  return aliases;
}

module.exports = {
  webpack(config, { dev }) {
    config.resolve.alias = {
      ...config.resolve.alias,
    };

    return config;
  },
  env: {
    API: process.env.API,
  },
};
