/**
 * Created by zhanglongde on 2016/8/1.
 */

//both objects get converted to strings and in both cases the resulting string is "2"
(function(){
    //24
    (function(){

        console.log(2 == [[[2]]])

        console.log('2' == [[[2]]])
    }());
}());
