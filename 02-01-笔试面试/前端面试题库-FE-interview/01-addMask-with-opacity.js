/**
 * Created by zhanglongde on 2016/8/5.
 */

//    请用原生js实现一个函数,给页面制定的任意一个元素添加一个透明遮罩(透
//    明度可变,默认0.2),使这个区域点击无效,要求兼容IE8+及各主流浏览器,遮
//    罩层效果如下图所示:
function addMask(elem,opacity){
    opacity = opacity || 0.2;

    var rect = elem.getBoundingClientRect();
//        var rect = elem.getClientRects()[0];
    var style = getComputedStyle(elem,null);

    var mask = document.createElement('div');
    mask.style.position = 'absolute';
    var marginLeft = parseFloat(style.marginLeft);
    mask.style.left = (elem.offsetLeft - marginLeft)+'px';
    var marginTop = parseFloat(style.marginTop);
    mask.style.top = (elem.offsetTop - marginTop) + 'px';

    mask.style.zIndex = 9999;
    mask.style.opacity = '' + opacity;
    mask.style.backgroundColor = '#000';

    mask.style.width = (parseFloat(style.marginLeft) +
        parseFloat(style.marginRight) + rect.width) + 'px';
    mask.style.height = (parseFloat(style.marginTop) +
        parseFloat(style.marginBottom) + rect.height) + 'px';

    elem.parentNode.appendChild(mask);
};

var target = document.getElementById('mask-layer');

//    addMask(target,0.5);
//
//    target.addEventListener('click',function(){
//        console.log('click');
//    },false);

var btnTrigger = document.getElementById('btn-add-mask');

btnTrigger.addEventListener('click',function(e){
    e.stopPropagation();

    addMask(target,0.5);

    target.addEventListener('click',function(){
        console.log('click');
    },false);
},false);


//      事件委托，绑定在body上
//    var bd = document.getElementsByTagName('body');
//
//    for(var i = 0;i<bd.length;i++){
//        bd[i].addEventListener('click',function(e){
////            console.log('body click');
//            if(e.target == btnTrigger){
//                console.log(e.target);
//            }
//            else if(e.target == document.body){
//                console.log("origin");
//            }
//
//        },false);
//    }
