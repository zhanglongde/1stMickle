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
        修饰器对类的行为的改变，是代码编译时发生，而不是在运行时。
    1.4实践
        react结合redux开发
        class MyReactComponent extends React.Component {}
        export default connect(mapStateToProps,mapDispatchToProps)(MyReactComponent)
        装饰器改为为
        @connect(mapStateToProps,mapDispatchToProps)
        export default class MyReactComponent extends React.Component{}
2.方法的修饰
注释 类型检查 日志
外层修饰器先执行
3.为什么修饰器不能用于函数？
修饰器只能用于类和类的方法，不能用于函数，因为存在函数提升。
4.core-decorators.js
core-decorators.js是一个第三库，提供了几个常见的修饰器