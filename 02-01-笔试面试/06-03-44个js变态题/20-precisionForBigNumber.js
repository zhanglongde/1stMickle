/**
 * Created by zhanglongde on 2016/8/1.
 */

//Lack of precision for numbers in JavaScript affects both small and big numbers
(function(){
    var a = 111111111111111110000,
        b = 1111;
    console.log(a + b);
}());
