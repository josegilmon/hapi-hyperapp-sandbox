const path = require('path');

module.exports = {
  entry: './src/main.h',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.h']
  },
  module: {
    rules: [
      {
        test: /\.(js|h)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
};