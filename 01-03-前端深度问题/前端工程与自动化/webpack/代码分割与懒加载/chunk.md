chunk是webpack使用code splitting后的产物，也就是按需加载的分块，装载了不同的module
chunk依赖运行时manifest

chunk三种类型
1.entry chunk
  包含运行时需要的函数，如webpackJsonP,__webpack_require__等
2.initial chunk
  初始化时完成加载
  由CommonChunkPlugin生成
3.normal chunk
  应用运行时动态加载模块，如webpackJsonP