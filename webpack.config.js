const path = require('path');
const webpack = require('webpack');

const PLUGINS = [];

module.exports = {
  devServer: {
    host: '0.0.0.0',
    hotOnly: true,
    inline: true,
    stats: 'minimal',
    disableHostCheck: true
  },
  entry: './index.js',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  output: {
    globalObject: 'this',
    path: __dirname + '/dist',
    filename: process.env.NODE_ENV === 'production' ? 'aframe-ios-fullscreen-helper-component.min.js' : 'aframe-ios-fullscreen-helper-component.js',
    libraryTarget: 'umd'
  },
  plugins: PLUGINS,
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    modules: [path.join(__dirname, 'node_modules')]
  }
};
