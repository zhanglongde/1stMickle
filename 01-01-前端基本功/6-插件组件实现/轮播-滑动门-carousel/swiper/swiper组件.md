定位方案
transform方案 元素本身位置不变，index变化，index*宽度


props
样式属性
图片数组
是否自动开始


翻页
改变translateX,布局不变
通过位置数组 当前index 以及元素宽度，计算出个元素的translateX

如何循环
DOM元素本身不变，对应的位置数组_position在变换


自动播放
setTimeout递归嵌套

侧滑
手势changedTouches
touchstart 设置起始点
touchmove 跟随
touchend 水平方向移动的距离，达到阈值，则前进或者后退，否则撤销touchmove动作


