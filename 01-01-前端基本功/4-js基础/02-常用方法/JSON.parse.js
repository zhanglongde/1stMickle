/**
 * Created by zhanglongde on 2016/8/10.
 */

(function () {
//obj中的relaeseDate对象序列化之后成了有效的json串
    var obj = {
        title : '对象的标题',
        type : 'primitive' ,
        releaseDate : new Date('2012-03-1')
    };
//转化为json串
    var o = JSON.stringify(obj);
    console.log(o);

//在parsedO中还原为一个Date对象(会基于相应的值创建一个新的Date对象，结果parsedO.releaseDate属性中保存了一个Date对象)
    var parsedO = JSON.parse(o,function(k,v){
        if(k == 'releaseDate'){
            return new Date(v);
        }else{
            return v;
        }
    });
}());
