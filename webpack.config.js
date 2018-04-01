const webpack = require('webpack');
const path = require('path');

const client = {
  context: path.resolve(__dirname, 'client'),
  entry: path.resolve(__dirname, './client/src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['.js', '.jsx'] },
};

const server = {
  context: path.resolve(__dirname, 'client'),
  entry: path.resolve(__dirname, 'client/src/index-server.js'),
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle-server.js',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
    ],
  },
  resolve: { extensions: ['.js', '.jsx'] },
};

module.exports = [
  client, server,
];
