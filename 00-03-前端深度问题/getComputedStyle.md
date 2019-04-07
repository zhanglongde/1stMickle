
## 一般用法 ##
getComputedStyle会获取当前元素所有最终使用的CSS属性值（最终计算后的结果），
通过window.getComputedStyle等价于document.defaultView.getComputedStyle调用

## 用法注意点 ##
window.getComputedStyle(elem, null).getPropertyValue("height")可能的值为100px，
而且，就算是css上写的是inherit，getComputedStyle也会把它最终计算出来的。
不过注意，如果元素的背景色透明，那么getComputedStyle获取出来的就是透明的这个背景（因为透明本身也是有效的），而不会是父节点的背景。
所以它不一定是最终显示的颜色。

## 回流 ##
getComputedStyle会获取当前元素所有最终使用的CSS属性值，window.和document.defaultView.等价...
getComputedStyle会引起回流，因为它需要获取祖先节点的一些信息进行计算（譬如宽高等），所以用的时候慎用，回流会引起性能问题。
然后合适的话会将话题引导回流，重绘，浏览器渲染原理等等。
当然也可以列举一些其它会引发回流的操作，如offsetXXX，scrollXXX，clientXXX，currentStyle等等

## getComputedStyle ##
getComputedStyle的top getBoundingRect().top offsetTop三者区别