webpack2的happypack,
        基于多线程并行Uglify和利用缓存实现按需uglify


将多字节转换为单字节
去掉调试代码
tree-shaking DCE


如何自己实现uglifyJS
https://juejin.im/entry/58e4c7a3b123db15eb7c794a
处理当前plugin的chunk
开启多个worker进程,对chunk.files的uglify任务分不到多个worker进程中，完成后通知主进程进行统一处理
文件缓存，缓存文件名的hash和文件内容的hash