new操作都做了什么
1.生成一个新的简单的Object
2.prototype等设置到这个对象上  Object.prototype = xxx
3.执行构造函数，this指向这个新对象 Object.constructor(), this = Object
4.返回这个新对象