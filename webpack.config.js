var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    lesson1: './src/webgl/lesson1.ts'
  },
  output: {
    path: path.resolve(__dirname, 'public/build/js'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [],
};