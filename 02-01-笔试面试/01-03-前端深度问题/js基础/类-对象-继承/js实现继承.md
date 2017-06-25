1.原型链
子类的原型对象赋值以基类的实例
2.构造函数
function Sub(){
  Base.apply(this,arguments)
}
3.组合式
实例继承:子类实例 = Object.create(子类实例)
类式继承: 子类.prototype = Object.create(基类.prototype),如果基类构造函数带有参数，则必须在子类构造函数中调用:Base.apply(this,arguments)
4.拷贝式继承
Object.assign({},基类对象，子类对象)
5.ES6语法糖
class Sub extends Base {
  constructor(props){
    super(props)
  }
}


构造函数.prototype
实例.__proto__
实例.constructor