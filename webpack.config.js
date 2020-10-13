var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    lesson1: './src/webgl/lesson1.ts',
    lesson2: { import: './src/webgl/lesson2.ts', dependOn: 'shared'},
    lesson3: { import: './src/webgl/lesson3.ts', dependOn: 'shared'},
    lesson4: { import: './src/webgl/lesson4.ts', dependOn: 'shared'},
    lesson5: { import: './src/webgl/lesson5.ts', dependOn: 'shared'},
    shared: 'gl-matrix'
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