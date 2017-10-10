BFC
块级格式上下文
隔离的独立容器，容器内的元素不会影响到外面元素，反之亦然。
区别于普通的块框

形成
    body元素
    dof display:inline-block,table-cell,table-caption
    paf

应用
    布局：阻止元素被浮动元素覆盖而产生文字环绕效果
    解决margin折叠
    清除浮动:计算BFC高度时，浮动元素也参与计算
渲染规则
    隔离容器
    一一垂直放置
    垂直距离margin定
    靠边相接 子元素margin-box与包含块border-box相接
    去除环绕效果
    计算BFC高度


IFC
非替换内联元素 font-size=>line-height
替换内联元素 实际宽高/width height
vertical-align一致性 默认baseline
