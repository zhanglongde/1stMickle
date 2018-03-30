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

### 三个层次比较 ###
总体上分层比较，不同节点替换，跨层级节点不回溯，直接删除，再创建
组件先进行类型比较，再进行组件内部的DOM树比较
列表比较基于作为唯一标识的key，进行就地复用




