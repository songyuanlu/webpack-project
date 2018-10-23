const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackCommon = require('./webpack.common')

module.exports = merge(webpackCommon, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev')
    })
  ]
})