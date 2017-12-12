const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/assets/js/app.js',
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: 'bundle.min.js'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/ 
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin()
  ]
};
