1.媒体查询穷举

2.动态计算 resize初始化也会计算
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