new操作都做了什么
传入参数：构造函数，初始化参数列表
1.new Object()

构造属性访问规则：
2.设置新对象实例的__proto__为构造函数的原型对象  Object.__proto__ = Constructor.prototype
3.执行构造函数，Constructor.apply(Object,arguments)

4.返回这个新对象