const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // 预设：指示babel做怎么样的兼容性处理
          presets: [
            [
              '@babel/preset-env',
              // 按需加載
              {
                useBuiltIns: 'usage',
                corejs: {
                  // 指定corejs版本
                  version: 3
                },
                // 
                targets: {
                  // 指定兼容性  做到哪个版本的浏览器
                  chrome: 60,
                  firefox: 50,
                  ie: 9,
                  safari: 10,
                  edge: 17
                }
              }
            ]

          ]
        }
      },
      {
        test: /\.(css|less)$/,
        use: [
          // 创建style标签，将样式放入
          // 'style-loader', 
          // 这个loader取代style-loader。作用：提取js中的css成单独文件
          MiniCssExtractPlugin.loader,
          // 将css文件整合到js文件中
          'css-loader',
          // 使用 loader的默认配置
          // postcss-loader
          // 修改loader 的配置
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              // postcss 插件
              plugins: () => [require('postcss-preset-env')()]
            }
          }
        ]
      }, {
        test: /\.(jif|png|jpg)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:9].[ext]',
          // outputPath:'image',
          esModule: false
        }
      }, {
        test: /\.html$/,
        loader: 'html-loader',
      }, {
        exclude: /\.(html|jpg|png|css|less|js)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      // 对输出的css文件进行重命名
      // filename: 'css/built.css'
    })
  ],
  mode: 'development'
};
