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
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // compress: true,
    host: '0.0.0.0',
    port: 8080,
    //允许打开本地ip
    useLocalIp: true
  },
})