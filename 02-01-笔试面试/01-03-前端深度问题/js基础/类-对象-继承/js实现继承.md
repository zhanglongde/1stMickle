1.原型链
子类的原型对象赋值以基类的实例
2.构造函数
function Sub(){
  Base.apply(this,arguments)
}
3.组合式 
object.create 只能继承带有原型的对象
4.ES6语法糖
class Sub extends Base {
  constructor(props){
    super(props)
  }
}