provider用于把store置于context

http://www.jianshu.com/p/2501a9703d13
https://www.robinwieruch.de/react-provider-pattern-context/

provider包裹在跟组件外层，使所有子组件都能拿到state
provider接受store作为props,然后通过context往下传


通过context传递属性的方式可以大量减少通过Props逐层传递属性的方式，可以减少组件之间的依赖关系