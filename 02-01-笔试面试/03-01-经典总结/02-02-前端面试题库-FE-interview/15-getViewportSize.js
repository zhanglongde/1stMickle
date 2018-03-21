/**
 * Created by zhanglongde on 2016/8/13.
 */
//完成函数getViewportSize返回指定窗口的视口尺寸

(function () {
    /**
     * 查询指定窗口的视口尺寸，如果不指定窗口，查询当前窗口尺寸
     **/

    w = w || window;

    //IE9
    if('innerHeight' in w){
        return {
            width:w.innerWidth, //包含滚动条，window独有属性
            height:w.innerHeight
        }
    }

    var d = w.document;
    //IE8及以下浏览器在标准模式下
    if(document.compatMode === 'CSS1Compat'){
        return {
            width:d.documentElement.clientWidth,//可视宽度  document.documentElement为文档元素，包括body
            height:d.documentElement.clientHeight
        };
    }

    //IE及以下浏览器在怪癖模式下
    return {
        width:d.body.clientWidth,
        height:d.body.clientHeiht
    }
}());
