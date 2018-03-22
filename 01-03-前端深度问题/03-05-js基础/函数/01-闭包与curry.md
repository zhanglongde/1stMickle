闭包定义
有权访问另一函数作用域内变量的函数
具体而言，就是function return function,由于作用域链的原因，内层函数可以访问到外层函数的变量，
         内层函数即所谓的闭包
注意闭包函数内部的this

闭包应用
避免全局作用域污染
bind
模拟权限
高阶函数
curry
设计模式
    迭代模式
    模块模式
    缓存代理 记忆函数
            https://juejin.im/post/59bce30e6fb9a00a424755e9?utm_source=gold_browser_extension
模块化 形成local作用域
webpack bundle.js 每一个模块最外层都有一些特殊的闭包包装
        webpack3.0 Scope Hoisting 作用域提升