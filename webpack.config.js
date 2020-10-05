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
};
