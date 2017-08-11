https://segmentfault.com/a/1190000006087638

1.减少冗余代码
2.压缩只用于生产阶段，开发阶段不需要压缩
  区分开发与生产环境配置:definePlugin
3.多线程 缓存
  缓存原理 只重新压缩改变的
  webpack2中使用happypack,happypack是一个webpack插件，用来实现多线程打包，它默认使用使用缓存
4.排除第三方类库 externals:第三方类库直接使用CDN，不进入输出文件
                         告知webpack XX模块不需要打包
5.webpackDllPlugin 动态链接库
6.如果你的开发环境是chrome等现代浏览器，原生就已经支持ES6的大部分特性，就可以在开发时去掉大部分的preset和plugin，
  只保留babel-preset-react等浏览器无法支持的预设，以提升编译速度，上线时再加上剩余的babel转换。
7.编写插件改进uglifyJSPlugin
  https://juejin.im/entry/58e4c7a3b123db15eb7c794a
