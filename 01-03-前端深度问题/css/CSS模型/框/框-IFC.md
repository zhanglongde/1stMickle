https://zhuanlan.zhihu.com/p/25808995

当line-height小于font-size，出现什么情况？
font-size通过line-height间接影响IFC
line-height默认值normal 1或者1.2
line-height可能值：
1）数值  1.2
2）长度  1.2em
3）百分比  120%
都是相对于font-size，只允许正值
line-height:1 就是一个很糟糕的实践


深入理解 CSS：字体度量、line-height 和 vertical-align
font-size 相同，font-family 不同，得到的 span 元素的高度也不同？
font-size:100px 对应的文字在不同字体里的高度是不一样的！那么 line-height 会随着文字大小的改变而改变吗？
normal 真的表示 1 或者 1.2 吗？
vertical-align 又是如何被 line-height 影响的呢？


字体度量
ascender、descender、capital height、x-height


line-box
当 p 元素出现在屏幕上时，它可能包含了多行内容，每行内容由多个内联元素组成（内联标签或者是包含文本的匿名内联元素），每一行都叫做一个 line-box。
line-box 的高度是由它所有子元素的高度计算得出的。浏览器会计算这一行里每个子元素的高度，再得出 line-box 的高度（具体来说就是从子元素的最高点到最低点的高度），
所以默认情况下，一个 line-box 总是有足够的高度来容纳它的子元素
line-box难点
line-box 的难点在于我们看不见它，而且不能用 CSS 控制它。


元素高度
每个 HTML 元素实际上都是由多个 line-box 的容器，如果你知道每个 line-box 的高度，那么你就知道了整个元素的高度。


content-area 的高度是由字体度量定义的
virtual-area 的高度就是 line-height，这个高度用于计算 line-box 的高度
leading
virtual-area 和 content-area 高度的差异叫做 leading。leading 的一半会被加到 content-area 顶部，另一半会被加到底部。
因此 content-area 总是处于 virtual-area 的中间。
与height的关系
如果你将其 height 设置为 auto 的话，那么其高度的取值就是 line-height，其 content-area 的取值也是 line-height。


strut
看不见的字符，看得见的影响。
浏览器认为每个 line-box 的起始位置都有一个宽度为 0 的字符（CSS 文档将其称为 strut），并将其纳入 line-box 的高度的计算中。











IFC 真的很难懂
所有的内联元素都有两个高度
    基于字体度量的 content-area
    virtual-area（也就是 line-height ）
    这两个高度你都无法看到
line-height: normal 是基于字体度量计算出来的
line-height: n (n=1,2,3…) 可能得出一个比 virtual-area 还要矮的 content-area
vertical-align 不靠谱
line-box 的高度的受其子元素的 line-height 和 vertical-align 的影响
我们无法轻易的用 CSS 来控制字体度量
