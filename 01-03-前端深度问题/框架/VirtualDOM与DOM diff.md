why Virtual DOM?
js对象模拟DOM模型，便于进行DOM diff，以减少真实DOM操作，
从而减少页面重新渲染时重绘重排
how Virtual DOM?
tagName children property

Why DOM diff?
计算出Virtual DOM中真正变化的部分，然后只针对该部分进行原生ＤＯＭ操作，并重新渲染整个页面
How DOM diff?
tree diff
  分层比较，跨层忽略不计
  一次遍历，完成整棵DOM树比较
  仅比较同一父节点下的所有子节点（同层级节点才会比较，不同层级删除重建，以避免回溯）
  跨层操作，直接创建删除，没有移动
component diff
  通过组件类比较树形结构相似性
  同一类型组件，按照tree diff
  不同类型组件，替换整个组件下的所有子节点
element diff
  同层比较，插入删除移动三种操作
  key作为同层级节点的唯一标识符
  提取节点顺序移动的差异，而不是比较同索引的节点