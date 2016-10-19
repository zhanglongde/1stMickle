/**
 * Created by zhanglongde on 2016/7/31.
 */

(function(){
    //常规reduce用法
    var values = [1,2,3,4,5];
    var sum = values.reduce(function(prev, cur, index, array){
        return prev + cur;
    });
    console.log(sum); //15

    var result = [ [3,2,1].reduce(Math.pow),[].reduce(Math.pow) ];

    console.log(result);
})();
