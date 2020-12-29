/*
  webpack.config.js  webpack的配置文件
    作用: 指示 webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置）

    所有构建工具都是基于nodejs平台运行的~模块化默认采用commonjs。
*/

// resolve用来拼接绝对路径的方法
const { resolve } = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // webpack配置
  // 入口起点
  entry: './src/index.js',
  // 输出
  output: {
    // 输出文件名
    filename: 'built.js',
    // 输出路径
    // __dirname nodejs的变量，代表当前文件的目录绝对路径
    path: resolve(__dirname, 'built')
  },
  // loader的配置
  module: {
    rules: [
      // 详细loader配置
      // 不同文件必须配置不同loader处理
      {
        // 匹配哪些文件
        test: /\.css$/,
        // 使用哪些loader进行处理
        use: [
          // use数组中loader执行顺序：从右到左，从下到上 依次执行
          // 创建style标签，将js中的样式资源插入进行，添加到head中生效
          'style-loader',
          // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 将less文件编译成css文件
          // 需要下载 less-loader和less
          'less-loader'
        ]
      }, {
        // 处理css 中的背景图片
        // 处理不了 html 中的图片 需使用 html-loader
        test: /\.(png|jpg|jif)$/,
        loader: 'url-loader',
        options: {
          // 图片小于8 k,就会被base64 处理
          // 一般 8-12 k  为最佳
          // 能减少请求，但是 体积会变大

          limit: 8 * 1024,
          // 解决：关闭url-loader Es6模块化，使用commomjs 解析
          // 解决：打包名称过长，重命名
          // 取 图片哈希值 10 位， [ext]:使用原来扩展名
          name: '[hash:10].[ext]',
          // 输出到指定文件夹
          outputPath: 'images'
        }
      }, {
        // 处理 html 的图片 
        // 
        test: /\.html$/,
        loader: 'html-loader'
      }, {
        // 处理其他资源 例如：字体文件 .svg .ttf .woff ...
        // 
        // test:/\.html$/,
        // 排除的
        exclude: /\.(css|less|js|html|png|jpg|jif)/,
        loader: 'file-loader'
      }
    ]
  },
  // plugins的配置
  plugins: [
    // 详细plugins的配置
    new htmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  // 模式
  mode: 'development', // 开发模式
  // mode: 'production'

  // 非 核心概念
  // 开发服务器 devServer:自动化（自动编译、自动打开浏览器，自动刷新浏览器）
  // 特点:只会在内存中编译打包，不会有任何输出
  // 启动devServer指令为：npx webpack serve(webapck cli 5 使用 webpack-dev-server的启动命令，使用 npx webpack-dev-server 命令会报错)
  devServer: {
    // 运行的目录
    contentBase: resolve(__dirname, 'built'),
    // 启动 gzip 压缩，体积更小，运行更快
    compress: true,
    // 端口号
    port: 3000,
    open: true,
  }

}
