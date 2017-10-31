https://juejin.im/post/59f5a49951882561a209bd37?utm_source=gold_browser_extension

font-size line-height vertical-align之间的关系
line-height的数字和font-size大小相关
vertical-align的百分比值和line-height值相关


常见问题
img+span垂直对齐问题
不同fonts-size或者line-height的span+span



vertical-align
默认值baseline
作用在inline元素和table-cell（table table-cell+vertical-align inline-block实现居中）元素身上

何为baseline?
基线：小写字母'x'的下边缘所在的那条线；

inline-block基线
The baseline of an 'inline-block' is the baseline of its last line box in the normal flow, unless it has either no in-flow line boxes or if its 'overflow' property has a computed value other than 'visible', in which case the baseline is the bottom margin edge.
‘inline-block’元素的基线是标准流中最后一个line box（行盒）的基线，
除非这个line box里面既没有in-flow line boxes(行内框)或者本身'overflow'属性的计算值不是'visible',
这种情况下基线是该元素margin底边缘。




line-height
默认值normal,介于1.0~1.2，各浏览器实现不同
如果一个元素没设置height,那么其最终高度一定是由line-height决定的

inline元素的高度由line-height决定，并非文字内容撑开
只是line-height默认为normal(1.0~1.2,而font-size又可以继承)




