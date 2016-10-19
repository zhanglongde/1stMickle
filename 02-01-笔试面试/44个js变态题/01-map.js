/**
 * Created by zhanglongde on 2016/7/31.
 */

(function(){
    //常规map方法
    var numbers = [1,2,3,4,5,4,3,2,1];
    var mapResult = numbers.map(function(item, index, array){
        return item * 2;
    });
    console.log(mapResult); //[2,4,6,8,10,8,6,4,2]




    var o = ['1','2','3'].map(parseInt);
    var m = ['1','2','3'].map(function(x,index,array){
        console.log(index);
        console.log(array);
        return parseInt(x)
    });

    console.log(o);
    console.log(m);

    //console.log(parseInt('3',8))
})();


