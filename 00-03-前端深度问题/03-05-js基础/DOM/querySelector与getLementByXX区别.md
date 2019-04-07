querySelector属于W3C的Selector API,getElementByXX属于W3C的DOM规范
1.返回值?
getElementByXX 返回live NodeList,引用
querySelector  返回static NodeList,快照

2.实时更新
getElementByXX 动态
querySelector  静态

3.匹配元素
dom.querySelector('div div'),匹配的范围包括dom自身

4.参数
querySelector参数是一个选择符，可以嵌套
getElementByXX参数只能是单一的tagName className id