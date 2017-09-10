https://github.com/riskers/blog/issues/2

圣杯布局 两栏/三栏
等高布局
居中
选项卡
负margin加宽元素


1.盒子大小content+padding+border+正margin
  负margin不会影响盒子大小

2.定位布局/浮动布局
无论正负，margin-right,margin-bottom也是有效的
3.非定位布局/浮动布局
margin为正时，默认margin-top,margin-left有效
             设置text-align:right，display:inline-block或者行内元素,margin-right有效
             margin-bottom了？相对父容器无效，相对兄弟元素有效
margin为负时，margin-top margin-left以容器边缘为界，盒子将被拉进指定的方向
             margin-left margin-right将后续的元素拖拉进来
             超出部分截断，overflow:hidden
             超出部分不会影响其他元素布局？

3.无论是否正常流
margin-right margin-bottom都会对兄弟元素产生影响
当text-align:right,右边没有兄弟元素，margin-right相对于父元素（匿名兄弟元素？）；右边有兄弟元素，margin-right相对于兄弟元素

4.增加宽度
若width没有被设置，设定负margin-left/right会将元素拖向对应的方向，并增加宽度，此时的margin的作用就像padding一样


left、top不论正负自己动，right、bottom不论正负别的元素动！正的向外，负的向内！
脱离文档流或者设置text-align:right除外