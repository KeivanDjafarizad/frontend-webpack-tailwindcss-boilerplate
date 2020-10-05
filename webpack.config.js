let HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      minify: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
