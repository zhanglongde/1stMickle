/**
 * Created by zhanglongde on 2016/8/3.
 */

(function(){
    var lowerCaseOnly =  /^[a-z]+$/;
    console.log([lowerCaseOnly.test(null), lowerCaseOnly.test()]);


    console.log(lowerCaseOnly.test('zhangldP'));
})();
