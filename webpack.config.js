var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server',
    __dirname + '/src/index.jsx',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /.jsx?$/,
        loaders: ['react-hot', 'babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-3'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      template: 'public/index.html'
    }),
    new DashboardPlugin()
  ],
  eslint: {
      configFile: __dirname + '/.eslintrc',
      failOnWarning: false,
      failOnError: true
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: [
      '',
      '.js',
      '.jsx',
      '.css'
    ]
  },
};
