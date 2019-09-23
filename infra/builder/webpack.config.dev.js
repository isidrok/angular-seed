const merge = require('webpack-merge');
const configBuild = require('./webpack.config.build');

module.exports = merge(configBuild, {
  mode: 'development',
  devtool: 'source-map',
  watch: true,
  devServer: {
    progress: true,
    compress: true,
    historyApiFallback: true
  }
});
