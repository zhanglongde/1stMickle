
this指执行上下文
this指向函数的拥有者


es6之前
函数调用上下文
调用函数的对象，即函数内部的this指的是：调用函数那个点之前的对象，
如果没有、自执行函数或者嵌套函数，则this指向window
DOM事件回调函数中的this指向该DOM对象

es6
箭头函数绑定的是静态作用域

改变this指向
call apply bind

通过this可以访问到原型对象上的属性

new操作都做了什么？
创建新对象
原型
new指向