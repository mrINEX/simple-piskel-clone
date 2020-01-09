const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  //entry: './src/app.js',
  entry: {
    landing: './src/landing/landing.js',
    //create: './src/create/create.js',
    app: './src/app.js'
  },
  output: {
    filename: '[name].bundle.js', //path: path.resolve(__dirname, 'dist'),
    path: __dirname + '/dist'     //filename: './bundle.js'
  },
  mode: 'development',
  //plugins: [
  //  new HtmlWebpackPlugin({template: './src/app.html'})
  //]
};