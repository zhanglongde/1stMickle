/**
 * Created by zhanglongde on 2016/6/9.
 */

$(function(){
    console.log($("#2").text());

    //返回与该模式匹配的第一个元素
    var t1 =document.querySelector("#t2");
    console.log(t1);


    var s = document.querySelectorAll(".s");
    console.dir(s);

    for(var i;i< s.length;i++){
        console.dir(s[i]);
    }

    for(var j in s){//对象最好用for in
        console.dir(s[j]);
    }

    //IE兼容forEach方法
});