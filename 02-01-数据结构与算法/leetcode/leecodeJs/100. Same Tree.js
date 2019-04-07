
  // 判断两个树是否相同
  // 相同的条件是树的结构和对应节点的值相等
  // 感觉与树相关的题都是用递归解决啊

var isSameTree = function(p, q) {
    if(p === null && q === null){
      return true;
    }

    if (p && q && p.val === q.val){
      if (isSameTree(p.left, q.left) && isSameTree(p.right, q.right)){
        return true;
      }
    }
    return false;
  };