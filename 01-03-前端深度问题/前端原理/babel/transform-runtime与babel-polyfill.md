https://segmentfault.com/a/1190000009065987
https://github.com/lmk123/blog/issues/46

transform-runtime插件之所以产生的原因：所有的这些辅助（垫片）将会引用babel-runtime来避免编译时重复。
runtime将会编译到你的build中。

另一个目的是，这个转换器为你的代码创建了一个沙盒环境。
如果你使用babel-polyfill并且把它内置提供promise,set,map这样的对象或功能，他们将会污染全局环境。





babel-polyfill，它的做法比较暴力，就是将全局对象通通污染一遍，这样做的坏处有几点：
可能会增加很多根本没有用到的polyfill；
可能会污染子模块的局部作用域，严重的或许会导致冲突；

但是，这样做也有好处，如果你的运行环境比较low，
比如说Android一些老机子，而你有需要大量使用Promise、Object.assign、Array.find之类的全局对象或者其所属方法，
那么使用babel-polyfill，绝对是一劳永逸。