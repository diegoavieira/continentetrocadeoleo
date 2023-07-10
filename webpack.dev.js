const { merge } = require('webpack-merge');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpackCommon = require('./webpack.common');

const port = 8080;

module.exports = merge(webpackCommon, {
  mode: 'development',
  output: {
    publicPath: `http://localhost:${port}/`,
    sourceMapFilename: '[name].js.map'
  },
  devtool: 'inline-source-map',
  devServer: {
    port,
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx']
    })
  ]
});
