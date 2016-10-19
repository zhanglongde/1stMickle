/**
 * Created by zhanglongde on 2016/8/3.
 */

//在取属性名称的时候尽量避免保留字. 如果使用的话请加引号
(function(){
    //IE8不支持
    var a = {class: "Animal", name: 'Fido'};

    console.log(a['class']);
    console.log(a.class);
})();
