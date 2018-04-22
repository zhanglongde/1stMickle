场景分析

布局样式
容器
mask 遮住非选中项
indicator 楼层定位
content-list
列表Item：图文混排结构

配置
value

行为

局部实现
拖拽 start设置起始位置 move样式跟随 end交互结束判断是否需要惯性滚动
滚动 动画或不动画
楼层定位 通过滚动值计算出滚动项
        设置选中样式类
惯性滚动 速度低至阈值时，直接楼层定位
        运动框架 start stop rAF
                step verify complete
触底反弹/回弹

方案

优化