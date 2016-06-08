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
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './app/App.js'
  ],
  output: {
    path: 'public',
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
        test: /\.css$/,
        loader: 'css'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass?includePaths[]=./node_modules')
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
  devServer: {
    contentBase: __dirname + '/public',
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api*': {
        target: 'http://localhost:3000'
      }
    }
  },
};
