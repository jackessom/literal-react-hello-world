var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    path.join(process.cwd(), 'src/index.jsx'),
  ],
  output: {
    path: path.resolve(process.cwd(), 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: /src/
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel'],
        include: /src/
      },
      {
        test: /\.css$/,
        loaders: [ 'style', 'css' ]
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(svg|jpg)$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'My App',
      template: 'public/index.html'
    })
  ],
  eslint: {
    failOnWarning: false,
    failOnError: true,
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx',
      '.json'
    ]
  },
};
