https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841
decorator本质上就是一个高阶函数，它接收一个函数作为参数，然后返回一个新函数
使用装饰器可以极大地简化代码，避免每个函数(比如日志、路由、性能检测)编写重复性代码。
实现自动发布事件


修饰器 es7
1.类的修饰
    1.1修饰器的作用
        修饰器是一个函数，用来修改类的行为;
        为类添加静态属性等
    1.2修饰器的使用
        @后面紧跟一个函数声明的方法名
        @后面可以跟一个函数调用，该函数调用返回一个闭包
        参数
        参数1：所要修饰的目标对象
        参数2：所要修饰的属性名
        参数3：所要修饰的属性的描述对象
    1.3修饰器的原理
        修饰器对类的行为的改变，使代码编译时发生，而不是在运行时。
    1.4实践
        react结合redux开发
        class MyReactComponent extends React.Component {}
        export default connect(mapStateToProps,mapDispatchToProps)(MyReactComponent)
        装饰器改为
        @connect(mapStateToProps,mapDispatchToProps)
        export default class MyReactComponent extends React.Component{}
2.方法的修饰
  2.1记录方法的开始执行和结束执行
  2.2为运算过程提供额外的缓存能力
  2.3标记方法为deprecated readonly
  2.4注释 类型检查 日志
  2.5修饰对象属性:数据属性 访问器属性
     对类的字段做修饰
  2.6保证架构一致性，特别是开发大型类库
     外层修饰器先执行
3.为什么修饰器不能用于函数？
    修饰器只能用于类和类的方法，不能用于函数，因为存在函数提升。
4.core-decorators.js
    core-decorators.js是一个第三库，提供了几个常见的修饰器
    @read-only
    @deprecated
5.装饰器设计模式
    在不侵入原有代码的情况下，为代码增加一些额外的功能
6.装饰器实例
    function readonly(target,key,descriptor){
      descriptor.writable = false
      return descriptor
    }
    class Cat{
      @readonly
      meow(){return `${thi.name}says meow`}
    }
