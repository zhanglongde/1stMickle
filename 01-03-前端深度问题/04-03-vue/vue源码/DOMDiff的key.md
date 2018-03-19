http://www.vinsongeek.com/2017/12/01/vue2-0%E4%B8%AD-key%E7%9A%84%E8%A7%A3%E6%9E%90/

借助元素的key值来判断该元素是新建创建的还是被移动而来的元素

key只有在一些特定情况下才会有优化，比如组件顺序发生变化，react会将dom节点重新排序和不是重新生成dom节点
Vue:基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素