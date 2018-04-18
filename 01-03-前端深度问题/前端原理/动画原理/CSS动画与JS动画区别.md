动画的基本原理是一致的
CSS动画：【内置的CSS3动画属性】通过transition animation动画帧操纵属性实现
JS动画：【时间维度操纵属性】通过合理时间内属性的连续变化，以达到肉眼视觉暂留的连贯性
        现在，也可以直接通过JS操纵CSS3动画
        时间维度指：setTimeout setInterval rAF


CSS无法实现的动画  多多物效控手事
                 多物体动画 多动画
                 物理效果：摩擦力、回弹、惯性
                 控制：暂停 回放
                 与手势、滚动结合的动效
                 事件支持：CSS动画事件支持TransitionEnd、AnimationEnd

JS动画 GC造成卡顿：在动画的过程中会不断调用js，消耗内存，一段时间之后触发GC，如果GC时间超出frame budget，动画会卡顿
       结合rAF


结论：
如果动画只是简单的状态切换，不需要中间过程控制，在这种情况下，css动画是优选方案。