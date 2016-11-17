var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/',
  output: { path: __dirname, filename: '/build/bundle.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'stage-1', 'react']
        }
      }
    ]
  },
};
