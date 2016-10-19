/**
 * Created by zhanglongde on 2016/8/10.
 */

(function () {
   var obj = {
       'prop1':'1',
       'prop2':'2',
       'prop3':'3'
   };
    
    var sp = ['prop1','prop2'];
    var str = JSON.stringify(obj,sp);
    
    console.log(str);
}());
