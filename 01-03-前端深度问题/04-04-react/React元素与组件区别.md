React元素
React元素不是真实的DOM元素，它仅仅是js的普通对象，没办法直接调用DOM原生API
React.createElement()和React.cloneElement()
要尽量避免DOM操作，即便要进行DOM操作，也应该使用React提供的接口ref和getDOMNode()

React组件
三种构建组件的方式:React.createClass、ES6 class和无状态函数


元素与组件的区别
组件是由元素构成的。
1.数据结构
元素数据结构是普通对象
组件数据结构是类或纯函数
2.this.props.children
被元素嵌套的元素会以属性 children 的方式传入该元素的组件
render () {
  var child = this.props.children
  return <div>{ React.cloneElement(child, {tip: 'right way!'}) }<div>
}
3.用户组件
用户以属性方式传入自定义组件，这个属性传入的是React元素，非React组件
