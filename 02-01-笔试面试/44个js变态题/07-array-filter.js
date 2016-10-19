/**
 * Created by zhanglongde on 2016/7/31.
 */


(function(){
    var ary = [0,1,2];
    ary[10] = 10;
    var rst = ary.filter(function(x) { return x === undefined;});
    console.log(rst);
})();

//filter 常规用法
(function(){
    var numbers = [1,2,3,4,5,4,3,2,1];
    var filterResult = numbers.filter(function(item, index, array){
        return (item > 2);
    });
    console.log(filterResult); //[3,4,5,4,3]
})();


//稀疏数组
(function(){
    //var a = new Array(3);
    //var  a = [,,];
    var a = [];
    a[10] = 3;

    a.forEach(function(x,i){
        console.log(i+"."+x);
    });
})();


//密集数组
(function(){
    var  a = [undefined,undefined,undefined];
    a.forEach(function(x,i){
        console.log(i+"."+x);
    });
})();


