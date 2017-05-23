共同点
1. 虚拟DOM
2. 响应式与组件化
3. 配套路由与状态管理


不同点
1. Vue虚拟DOM fork自snabbdom
2. Vue组件无需声明，实例化
3. 组件更新 
   React手动跟踪： react的一个组件的state发生变化，将触发从跟组件开始整个组件树的重新渲染
        为了避免不必要的重新渲染，必须到处安装shouldComponentUpdate和使用不可变数据结构
   Vue组件渲染自动跟踪
4. redux比vuex复杂很多，当然可以使用mobx