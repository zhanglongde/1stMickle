/**
 * Created by zhanglongde on 2016/8/3.
 */

(function(){
    // 如果格式错误 构造函数返回的仍是一个Date 的实例 Invalid Date.
    var a = new Date("epoch")
    console.log(a);


    var now = new Date();
    console.log(now);


    var someDate = new Date(Date.parse("May 25, 2004"));
    console.log(someDate);

    var otherDate = new Date("May 25,2016");
    var aDate = new Date(8/3/2016);
    console.log(otherDate);
    console.log(aDate);
})();