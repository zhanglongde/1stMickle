1.挂载卸载过程
componentWillMount
componentDidMount

2.数据更新过程
componentWillReceiveProps(nextProps) 外部传入props时调用，用于触发内部方法，比如reload等
shouldComponentUpdate(nextProps,nenxtState) return false阻止后续生命周期
componentWillUpdate(nenxtProps,nextState) render函数之前
render
componentDidUpdate(nextProps,nextState) render之后

3.卸载过程
componentWillUnmount

React16
componentDidCatch