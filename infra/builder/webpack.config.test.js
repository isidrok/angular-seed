const webpack = require('webpack');
const merge = require('webpack-merge');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const configBase = require('./webpack.config.base');
const {fromRoot} = require('./util');

module.exports = ({grep} = {}) => merge(configBase, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      KARMA_GREP: grep
    }),
    new AngularCompilerPlugin({
      tsConfigPath: fromRoot('infra', 'ts', 'tsconfig.test.json'),
    })
  ]
});
