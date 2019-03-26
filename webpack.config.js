const path = require('path');

const config = {
  entry: './lib/components/Index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /mode_modules/, use: 'babel-loader'}
    ]
  }
};

module.exports = config;
