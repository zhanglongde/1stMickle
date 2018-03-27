https://segmentfault.com/a/1190000003931773
前提：页面元素的布局尺寸全都以设计稿为基准等比例设置

转换工具
sublime 插件
cli px2rem
webpack loader plugin结合postcss

1.媒体查询穷举
  移动端设计稿一般两倍像素，640/64

2.动态计算 resize初始化也会计算
window.addEventListener('resize',function(){
   document.documentElement.style.fontSize = xxx
})

（1）
为什么通过js计算font-size计算font-size?
通过媒体查询设置html的font-size,并不能完成适配所有手机屏幕宽度类型

如何计算？当initial-scale=1.0，font-size=手机deviceWidth跟设计稿的比例值的100倍
取当前viewport的deviceWidth与设计稿的宽的比例值
比如我们的设计稿尺寸都是640px,iphone5的deviceWidth是320px,
那么计算出来的font-size=320/640=0.5
不方便计算，而且有些浏览器不兼容字体小于12px的字号
放大100倍，最终font-size=320/640*100=50px

几种常见屏幕宽度对于设计稿相应的font-size值
deviceWidth=320,font-size=320/6.4  iphone5
deviceWidth=375,font-size=375/6.4  iphone6/7
deviceWidth=414,font-size=414/6.4  iphone6+/7+
deviceWidth=500,font-size=500/6.4
(function() {
   document.addEventListener('DOMContentLoaded', function(){
     var html = document.documentElement;
     var windowWidth = html.clientWidth;
     html.style.fontSize = windowWidth/6.4+'px'
   })
})();


（2）那么页面元素该如何设置宽高、边距...

例如：一个设计稿宽高为140px的图标，左边距为50px，那么它的css应该这样写

.icon {
width: 1.4rem; /* 像素换算rem：140px / 100 = 1.4rem */
height: 1.4rem;
margin: 0 0 0 .5rem;
}
（3）其他元素的字体大小该如何设置？
@media screen and (max-width: 320px) {
body{font-size: 14px;}
}
@media screen and (min-width: 321px) and (max-width: 413px) {
body{font-size: 16px;}
}
@media screen and (min-width: 414px) and (max-width: 639px) {
body{font-size: 17px;}
}
@media screen and (min-width: 640px) {
body{font-size: 18px;}
}
总结：如果网页没有用到特殊的点阵字体，字体单位使用rem，如果用到了点阵字体，字体需要通过媒体查询设置几种固定大小的字体
     在正常情况下，系统自带的字体都是矢量字体，所以使用rem为单位是没有问题的，除非你的网页需要用到特殊的点阵字体。


















/**
 * [以iPhone6的设计稿为例js动态设置文档 rem 值]
 * @param  {[type]} currClientWidth [当前客户端的宽度]
 * @param  {[type]} fontValue [计算后的 fontvalue值]
 * @return {[type]}     [description]
 */
<script>
    var currClientWidth, fontValue,originWidth;
    //originWidth用来设置设计稿原型的屏幕宽度（这里是以 Iphone 6为原型的设计稿）
    originWidth=375;
    __resize();

    //注册 resize事件
    window.addEventListener('resize', __resize, false);

    function __resize() {
        currClientWidth = document.documentElement.clientWidth;
        //这里是设置屏幕的最大和最小值时候给一个默认值
        if (currClientWidth > 640) currClientWidth = 640;
        if (currClientWidth < 320) currClientWidth = 320;
        //
        fontValue = ((62.5 * currClientWidth) /originWidth).toFixed(2);
        document.documentElement.style.fontSize = fontValue + '%';
    }
    </script>