/**
 * Created by zhanglongde on 2016/7/31.
 */

(function(){
    function isOdd(num) {
        return num % 2 == 1;
    }
    function isEven(num) {
        return num % 2 == 0;
    }
    function isSane(num) {
        return isEven(num) || isOdd(num);
    }
    var values = [7, 4, '13', -9, Infinity];
    var result = values.map(isSane);
    console.log(result);
})();


(function(){
    //余数的正负号随第一个操作数
    console.log(-9 % 2);
    console.log(Number(Infinity));
    console.log(Infinity % 2);
})();
