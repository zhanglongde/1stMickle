减少不必要的渲染
1.should判断变化
  should为true也不一定渲染，还要取决于React DOM diff
2.减少 render inline function
3.state>store
  跟页面无关的不要放state
4.第三方 immutable
5.无状态组件 pureComponent
6.bind提前绑定



反例
1.兜底
xxx || []
[]每一次渲染都是新的实例
2.render中
  bind(this)
  回调函数
都是新的实例