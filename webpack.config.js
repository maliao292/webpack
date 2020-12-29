const { resolve } = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'built')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader'],
    }, {
      test: /\.(png|jpg|jif)$/,
      loader: 'url-loader',
      options: {
        limit: 8 * 1024,
        name: '[hash:9].[ext]',
        esModule: false,

        outputPath: 'images'
      }
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      exclude: /\.(png|jpg|jif|less|css|html|js)$/,
      loader: 'file-loader'
    }]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'built'),
    open: true,
    port: 300,
    compress: true
  }
}