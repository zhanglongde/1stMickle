https://doc.webpack-china.org/guides/build-performance
https://github.com/chenchunyong/webpack-dllPlugin
https://juejin.im/entry/57a6dee4a633bd00604d0e73
https://github.com/superpig/blog/issues/6
DllPlugin
动态链接库（dll）
抽离第三方库文件，比如vendor.dll.js,降低构建时间（省去该部分编译时间）
只要第三方包不升级，vendor包通过Hash值能够充分利用浏览器缓存


与CommonsChunkPlugin
1.CommonsChunkPlugin对于不同入口下的common部分没提取出来
2.CommonsChunkPlugin插件来做的话，存在每次打包打到第三方库的vendor的hash也会改变，这样每次发版hash变了，客服端强缓存就失效了
3.CommonsChunk每次构建时都需要执行一次，耗时，DllPlugin把第三方库的构建前置了，提高了构建效率