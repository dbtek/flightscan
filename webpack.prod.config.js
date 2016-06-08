var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  hash: true,
  filename: 'index.html',
  inject: 'body'
});
var HotReloader = new webpack.HotModuleReplacementPlugin();

module.exports = {
  entry: [
    'babel-polyfill',
    './app/App.js'
  ],
  output: {
    path: 'dist',
    filename: '/index_bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'react-hot!babel',
        include: __dirname + '/app'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass?includePaths[]=./node_modules')
      },
      {
        test: /\.css$/,
        loader: 'css?includePaths[]=./node_modules'
      },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    HotReloader,
    new ExtractTextPlugin('/style.css', {
      allChunks: true
    })
  ],
};
