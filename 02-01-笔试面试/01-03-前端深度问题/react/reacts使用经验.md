自定义组件首字母大写

shouldComponentUpdate需要做优化，否则会渲染组件树

componentWillReceiveProps


改变style 不能只操作某个属性，必须整个对象赋值，否则会报错

在componentWillUpdate里setState
没有在componentWillUnmount里取消事件监听


Return跟要返回的 dom，之间不能隔行！！！！！！！！
隔行不报错。但是会渲染空白




对于变化的值用state，非变化的值用props
所谓的非变化的值，可以是初始化的值，如给ul的数组等
props会默认缓存，可以好好使用
不要像这样去修改props， this.props.temp = xxx，要么用getDefaultProps去定义，要么在jsx里赋值，像例子里的写法不友好，应该默认props不可修改
不要像这样修改state， this.state.temp = xxx, 应该在 this.setState里去修改
有对数据的操作，如一些业务逻辑，可以放在componentDidMount里，因为它在render之后
尽量细化，微化组件，并且使用组合的方式使用react，可以最大程度发挥它的性能，使用它的diff算法。
使用ES6 去书写react ， 可以省很多的事，比如用箭头 => 
暂时想到这么多~







