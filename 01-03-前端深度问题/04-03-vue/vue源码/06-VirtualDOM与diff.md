VNode
虚拟DOM关键点：虚拟DOM的数据结构（JavaScript树） DOM比较算法 Patch
       两个阶段：编译（Vue compiler或者Vue-loader完成） 运行


修改视图
patch
sameVnode
patchVnode
updateChildren
  在遍历中，如果存在key，并且满足sameVnode，会将该DOM节点进行复用，否则则会创建一个新的DOM节点。
DOM操作
  Vue为平台做了一层适配层，
  虚拟DOM进行操作真实DOM节点们，只需要调用适配层的接口，而内部实现则不需要关心


[渲染层：虚拟DOM树](https://etianqq.gitbooks.io/vue2/content/virtualdom.html)





## 我的理解 ##
### 基于两个前提 ###
降低时间复杂度，又提高渲染效率
1.相同类型的组件具有相似的树形结构
2.同层节点可以通过唯一标识符key区分

### 三个层次比较 ###
总体上分层比较，
1.数据发生变化，diff算法只会比较同一层级节点=》这样就避免比较该节点的子节点，较少回溯消耗
  不同类型节点替换，跨层级节点不回溯，直接删除，再创建
  节点类型相同，则会重新设置该节点的属性，从而实现节点更新
2.组件先进行类型比较，再进行组件内部的DOM树比较【类型比较=>元素比较】
3.列表比较基于作为唯一标识的key，进行就地复用




