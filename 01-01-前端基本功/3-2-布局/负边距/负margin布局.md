https://github.com/riskers/blog/issues/2

圣杯布局 两栏/三栏
等高布局
居中
选项卡
负margin加宽元素


无论正负，定位布局/浮动布局，margin-right,margin-bottom有效
         非定位布局/浮动布局，设置text-align:right，display:inline-block或者行内元素,margin-right有效
         非定位布局/浮动布局，margin-bottom了？相对父容器无效，相对兄弟元素有效
margin为正时，默认margin-top,margin-left有效
margin为负时，以容器边缘为界，逐渐偏离容器
             超出部分截断，overflow:hidden
             超出部分不会影响其他元素布局？