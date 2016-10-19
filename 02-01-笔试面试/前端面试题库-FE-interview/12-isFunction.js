/**
 * Created by zhanglongde on 2016/8/13.
 */
//如何判断一个对象是否为函数

/**
 * 判断对象是否为函数，如果当前运行环境对可调用对象（如正则表达式）
 * 的typeof返回'function'，采用通用方法，否则采用优化方法
 *
 * @param {Any} arg 需要检测是否为函数的对象
 * @return {boolean} 如果参数是函数，返回true，否则false
 */

(function () {
   function isFunction(arg){
       if(arg){
           if(typeof (/./) !== 'function'){
               console.log('old');
               return typeof arg === 'function';
           }else{
               console.log('good');
               return Object.prototype.toString.call(arg) == '[object function]';
           }
       }
   }
    
    var is = isFunction(isFunction);
    console.log(is);
    console.log(isFunction({}));

    //console.log(typeof (/./));

    function test(){
        this.ifunc = function isFunction(arg){
            if(arg){
                console.log(typeof (/./));
                if(typeof (/./) !== 'function'){
                    console.log('old');
                    return typeof arg === 'function';
                }else{
                    console.log('good');
                    return Object.prototype.toString.call(arg) == '[object function]';
                }
            }
        };
        //return ifunc;
    }
    var _i = new test();
    _i.ifunc(isFunction);
}());
