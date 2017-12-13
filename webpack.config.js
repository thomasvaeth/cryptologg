const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
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
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader?-autoprefixer!postcss-loader!sass-loader')
      }
    ]
  },
  plugins: [
    // new UglifyJsPlugin(),
    new ExtractTextPlugin('../css/app.min.css'),
    // new OptimizeCssAssetsPlugin()
  ]
};
