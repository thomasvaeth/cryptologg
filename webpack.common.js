const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    new ExtractTextPlugin('../css/app.min.css')
  ]
};
