const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const configBuild = require('./webpack.config.build');

module.exports = merge(configBuild, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});
