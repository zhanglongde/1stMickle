https://juejin.im/post/599798fcf265da247157e589?utm_source=gold_browser_extension
内部状态
三个状态：data isLoading error


加载时机
最佳获取数据的地方是生命周期函数componentDidMount()
组件已经调用render方法渲染完毕
当获取来的数据通过setState方法存储到本地state时，会再次渲染组件一次


加载转轮
在render方法中使用React条件渲染方法加载指示器或者已处理完的数据

错误处理
条件渲染
catch块处理异常
注意：
原生的fetch API不会对每个错误状态代码使用catch块。例如，当发生404错误时，不会进入catch块中，但是你可以通过抛出异常迫使其进入catch

抽象数据获取部分
1.分裂获取部分与状态逻辑成高阶组件
const withFetching = (url) => (Comp) =>
  class WithFetching extends Component{获取部分的逻辑实现}
2.定义无状态App组件
3.高阶组件包裹无状态APP组件
const AppWithFetch = withFetching(API + DEFAULT_QUERY)(App);