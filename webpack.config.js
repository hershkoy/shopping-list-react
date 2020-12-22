const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './source/js/index.js',
  output: {
    path: './build/',
    filename: 'js/shopping-list.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      { 
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract("style-loader", "css-loader") }  
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './source/index.ejs'
    }),
    new ExtractTextPlugin("styles.css")
  ]
};