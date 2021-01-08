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
## @babel/polyfill
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

