const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const webpackCommon = require('./webpack.common');

module.exports = merge(webpackCommon, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist/app'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  plugins: [new CleanWebpackPlugin(), new BaseHrefWebpackPlugin({ baseHref: '/rdsystem/' })]
});
