const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/mian.ts',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  resolve: {
    extensions: ['.ts','.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  devServer: {
    open: true,
    port: 4001
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'../index.html')
    })
  ]


}