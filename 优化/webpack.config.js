const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 引入压缩插件
const OptimizeCssAssetsWebpackPiugin = require('optimize-css-assets-webpack-plugin')
//  设置nodejs 环境变量
process.env.NODE_ENV = 'development'

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/built.js',
    // publicPath: './',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // 优化1 
      // 以下loader 只会匹配一个
      // 不能两个loader 同时处理同一个文件
      oneOf[
        {
          test: /\.(css|less)$/,
          use: [
  
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader:'postcss-loader',
              options:{
                ident:'postcss',
                // postcss 插件
                plugins:()=>[require('postcss-preset-env')()]
              }
            }
          ]
        },{
          test:/\.(jif|png|jpg)$/,
          loader:'url-loader',
          options:{
            limit:8*1024,
            name:'[hash:9].[ext]',
            // outputPath:'image',
            esModule:false 
          }
        },{
          test:/\.html$/,
          loader:'html-loader',
        },{
          exclude:/\.(html|jpg|png|css|less|js)$/,
          loader:'file-loader'
        }
      ],
     
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      // 对输出的css文件进行重命名
      // filename: 'css/built.css'
    }),
    new OptimizeCssAssetsWebpackPiugin()
  ],
  mode: 'development'
};
