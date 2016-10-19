/**
 * Created by zhanglongde on 2016/8/5.
 */

(function () {
    //var a = [1,2,3];
    //a.forEach(index,function(index){
    //    console.log(index);
    //} );

    function deepClone(obj){
        var _toString = Object.prototype.toString;

        //递归终结条件
        //null,undefined,non-object,function
        if(!obj || typeof obj != 'object'){
            return;
        }

        //DOM Node

        //Date

        //RegExp

        var result = Array.isArray(obj) ? [] :
            obj.constructor ? new obj.constructor():{};

        for(var key in obj){
            result[key] = deepClone(obj[key]);
        }

        return result;
    }

    function A(){
        this.a = a;
    }
    var a = {
        name:'qiu',
        birth:new Date(),
        pattern:/qiu/gim,
        container:document.body,
        hobbys:['book',new Date(),/aaa/gim,111]
    };

    var c = new A();
    var b = deepClone(c);
    console.log(c.a === b.a);
    console.log(c,b);

}());
