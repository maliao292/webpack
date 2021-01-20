# wepack

---git
 git branch  查看分支

 git status 查看 新增和修改的文件

 git diff(可+文件名) 查看修改/新增的内容

 git add .(或者是文件名)  提交文件

 git commit -m '提交备注'

 git log 查看提交信息

 git show cd5b06b0859da21260d7d358ed7cc7b78285c3b3(类似ID 可在 git log 获取) 
 git push (origin master(分支名)) 提交到托管平台

 git checkout （必须）+文件名（可加 .） 反悔 

 git fetch 拉取所有分支

 git merge fz(非当前分支名称，需要合并到当前的分支 名称)


 git pull (origin master(分支名)) 获取最新代码
 
   git checkout -b （必须）+ 分支名称 新增分支
 
  git checkout （必须）+ 分支名称 切换分支
 
 
 ### webpack 配置
1. 初始化 npm init -y
2. 安装 cnpm install webpack wepack-cli -D

## webpack.config.js
### webpack 配置文件，只是webpack干哪些活，运行 webpack时 会记载 里面的配置

### 所有的构建工具都是机遇nodejs 平台运行，默认采用 commonjs

# webpack 五个核心概念
### Entry
### OutPut
### Loader
### Plugins
### Mode


## Plugins: 
  ### 1.下载 2.引入 3.使用
  ```
  html-webpack-plugin :
  下载 cnpm i html-webpack-plugin -D
  引入 const htmlWebpackPlugin = require('html-webpack-plugin')
  使用 new htmlWebpackPlugin()
  ```
```
webpack5使用html-webpack-plugin时会报错The 'compilation' argument must be an instance of Compilation，解决办法是把该插件的安装方法从npm i html-webpack-plugin -D改为npm i  html-webpack-plugin@next  -D
```

# 错误解决
```
webpack5使用html-webpack-plugin时会报错
The 'compilation' argument must be an instance of Compilation，
解决办法是把该插件的安装方法从
npm i html-webpack-plugin -D
改为
npm i  html-webpack-plugin@next  -D
```


## 提取css 成单独文件
### 插件: mini-css-extract-plugin

## css兼容性
```
postcss-loader 
postcss-preset-env（帮助postcss找到package.json中browserslist里面的配置，通过配置加载指定的css的兼容性）

```

# 压缩css 插件：optimize-css-assets-webpack-plugin


# esLint js 语法检查 eslint-loader
## eslint-loader 依赖 eslint 库 ，npm i eslint-loader eslint
## @babel/preset-env 基本的js兼容性问题
## @babel/polyfill 全部兼容性 但是文件太大
## 按需加载 corejs


# js 和 html 压缩
## 将mode改为 'production' 即可


# 热模块替换 HMR: hot module replacement
```
作用：一个模块发生变化，只会重新打包这个模块
样式文件可以使用 HMR 功能，style-loader 内部实现了~
js 默认不能使用 HMR
解决：
html 默认不能使用 HMR ，同时 HTML不能热更新
解决：
修改entry: ['./src/index.js', './src/index.html'],

```


# source-map 
1. devtool:'source-map '


# 优化
## oneOf
1. 以下loader 只会匹配一个
2. 不能两个loader 同时处理同一个文件

## 缓存
### babel 缓存
1. options=> cacheDirectory:true
2. 让第二次 打包更快
### 文件资源缓存 
1. 修改文件名 对生成 文件名添加hash值 例如：filename: 'css/built.[hash:10].css'
  1. 问题：但是会影响其他未改变模块
2. chunkhash：根据chunk生成的hash值。如果打包来源于同一个chunk,那么hash值就一样。
  1. 问题：因为css是js中被引入的，所以属于同一个chunk
3. contenthash: 根据文件内容生成hash.不同文件生成不同hash。例如：filename: 'css/built.[contenthash:10].css'


## tree shaking 树摇 ，去掉 未引用的代码
1. 使用方法
  1. 必须使用 ES6 模块化语法
  2. 开启 production 环境
2. package.json "sideEffects":false
  1. 所有代码没有副作用，都可以 tree shaking
  2. 问题：可能会把css / @bable/polyfill 文件 干掉，不会被打包
  3. 解决 "sideEffects":[*.css]

## 代码分割 
1. 多入口
    1. ```
    entry: {
      // [, './src/index.html']
      main: './src/index.js',
      test: './src/test.js',
    },
    output: {
      filename: 'js/[name].[hash:10].js',
      path: resolve(__dirname, 'build')
    }```
2. 

  1. ```  optimization:{
    splitChunks:{
      chunks:'all'
    }
  }```
  2. 可以将node_modules 中代码单独打包一个chunk 最终输出
  3. 自动分析多入口chunk 中，有没有公共文件。如果有会单独打包

3. 通过js 代码，让某个文件被单独打包 同样适用 js 懒加载，
  ```
    import('./test').then(res=>{

    })


 ## 离线访问
 ### PWA 插件

 ## 忽略 包名

 ## dll  