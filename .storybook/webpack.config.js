const webpack = require('webpack');
const path = require('path');

const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  config.resolve.modules.push('app');

  config.devServer = {
    inline: true,
    hot: true,
  };

  return config;
};
