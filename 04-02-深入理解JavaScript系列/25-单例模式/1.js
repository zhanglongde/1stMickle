/**
 * Created by zhanglongde on 2016/8/4.
 */
(function(){
    var Singleton = (function(){
        var instantiated;

        function init(){
//            这里定义单例代码
            return {
                publicMethod:function(){
                    console.log('hello world');
                },
                publicProperty:'test'
            }
        }

        return {
            getInstance:function(){
                console.log(instantiated);
                if(!instantiated){
                    instantiated = init();
                }
                return instantiated;
            }
        };

    })();

//    Singleton.getInstance().publicMethod();
//    Singleton.getInstance().publicMethod();
//    console.log(Singleton.instantiated);  //函数名也访问不了，通过闭包可以访问：说明：var变量在内存中还存在
    console.log(Singleton.getInstance());
})();
