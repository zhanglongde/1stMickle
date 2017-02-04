/**
 * Created by zhanglongde on 2016/8/1.
 */

//在 js 中 1.1, 1., .1 都是合法的数字. 那么在解析 3.toString 的时候这个 .
//    到底是属于这个数字还是函数调用呢? 只能是数字, 因为3.合法啊!
(function(){
    console.log(1.1);
    console.log(1.);
    console.log(.1);  //这一点与CSS比较相似

    console.log(3..toString());
    //console.log(3.toString())
    //console.log(3...toString())
}());
