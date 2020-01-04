一个是初始化，一个是组件状态更新

组件状态更新，通知编译器，得到render函数，渲染一颗新的VNode树，与旧树Diff(patch)之后，得到差异部分
render函数通过watcher与数据联系到一起


【无状态的组件】
虚拟DOM触发机制：通过VNode实现一个【无状态的组件】，当**组件状态发生更新**时，触发Virtual DOM数据变化，
     然后通过Virtual DOM和真实DOM对比，对真实DOM更新

在watcher触发下，它可以根据最新的数据重新编译模板，并最终重绘UI