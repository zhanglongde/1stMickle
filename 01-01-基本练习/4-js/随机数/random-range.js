/**
 * Created by zhanglongde on 2016/8/10.
 */

(function () {
    var arr = [0,1,2,3,4,5,6,7,8,9];
    var target = [];
    var range = 10; //随机数产生的范围 （0,10）

    for(var i = 0; i<10; i++,range--){
        var index = parseInt(Math.random()*range);  //随机出一个数组arr的下标
        target[i] = arr[index];
        arr.splice(index,1); //splice不同于slice,直接修改元素
    }

    //console.log(target);
    target[10]='C';
    target[11]='=';

    $.each($('.col'),function(index,value){
        $(this).text(target[index]);
    });
}());


(function(){

})();
