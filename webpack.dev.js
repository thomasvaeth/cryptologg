const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
});
