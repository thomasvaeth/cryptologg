const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
  entry: {
    app: './src/assets/js/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name]-[chunkhash].bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/ 
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['index.html', 'dist/assets/css', 'dist/assets/js']),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name]-[contenthash].min.css',
    }),
    new WebpackMd5Hash()
  ]
};
