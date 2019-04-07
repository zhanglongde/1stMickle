https://doc.webpack-china.org/guides/code-splitting

三种常用的代码分离方法
1.入口起点【entry chunk】：使用entry选项手动分离代码（js自执行函数）
缺点：
不同的chunk会包含同一个重复的模块
不灵活，无法动态分割核心应用逻辑
2.防止重复【initial chunk】：使用CommonsChunkPlugin去重和分离chunk（借助webpack运行时manifest）
相应的插件和loader
ExtractTextPlugin
bundle-loader 用来分割代码，懒加载分割后的代码
promise-loader 类似于bundle-loader
3.动态导入【normal chunk】：通过模块的内联函数调用来分离代码(借助模块化运行时)
  3.1 import import返回一个Promise
  webpack将import()看做一个分割点并将其请求的module打包为一个独立的chunk。
  getComponent().then(component => {
    ocument.body.appendChild(component);
  })
  最近版本的chrome已经支持import动态模块
  当调用 ES6 模块的 import() 方法（引入模块）时，必须指向模块的 .default 值，因为它才是 promise 被处理后返回的实际的 module 对象。
  3.2 require.ensure
  打包的时候会把这块代码独立打包成一个文件
  http://cnodejs.org/topic/586823335eac96bb04d3e305

Webpack 大法之 Code Splitting
https://zhuanlan.zhihu.com/p/26710831
