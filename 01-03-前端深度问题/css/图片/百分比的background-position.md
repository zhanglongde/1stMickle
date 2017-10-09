https://github.com/riskers/blog/issues/9


任何CSS属性值为percent时，都需要根据某个参考值进行计算，搞明白这个参考值是什么，理解就容易多了:
Percentages: refer to size of background positioning area minus size of background image
标准规定：background-position:perenct的参考值为: (容器宽度 - 背景图片宽度).
一个简单例子： 容器宽度400px, 图片宽度100px, 当background-position-x为10%时，意味着背景图片左上角位于容器左上角 (400-100)*10% = 30px 处， 也就是说背景图片的(0, 0) 坐标需要与容器(30px,0)坐标重合。
