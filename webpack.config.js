const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/landing/landing.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'create.html',
      template: 'src/create/create.html'
    })
  ],
};