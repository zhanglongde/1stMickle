http://imhjm.com/article/59a23be97dd03248a2e8d583
https://medium.com/webpack/webpack-3-official-release-15fd2dd8f07b

1.Scope Hoisting
模块数组是一个个独立的函数，然后闭包引用webpack主函数的相应内容，每个模块都是独立的，然后带来的结果是在浏览器中执行速度变慢
webpack3借鉴了Closure Compiler和RoolupJS这两个工具，链接所有比报道一个闭包里，
放入一个函数，让执行速度更快，并且整体代码体积也会有所缩小

该特性只支持ES Modules,是不支持CommonJs和AMD
2.Magic Comments
支持用注释的方式指定chunk的名称
import(/* webpackChunkName: "my-chunk-name" */ 'module');