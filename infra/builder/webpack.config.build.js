const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const configBase = require('./webpack.config.base');
const { fromRoot } = require('./util');

module.exports = merge(configBase, {
  entry: fromRoot('client', 'bootstrap', 'index.ts'),
  output: {
    path: fromRoot('dist'),
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[contenthash:8].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      template: fromRoot('public', 'index.html')
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      include: 'initial'
    }),
    new AngularCompilerPlugin({
      tsConfigPath: fromRoot('infra', 'ts', 'tsconfig.build.json'),
    })
  ],
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000
  },
  optimization: {
    namedChunks: true,
    splitChunks: {
      maxInitialRequests: Infinity,
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  }
});
