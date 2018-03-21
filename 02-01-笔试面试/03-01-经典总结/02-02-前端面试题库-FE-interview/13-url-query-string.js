/**
 * Created by zhanglongde on 2016/8/13.
 */

//编写一个函数接受url中query string为参数,返回解析后的Object,query
//string使用application/x-www-form-urlencoded编码


/**
 * 解析query string转换为对象，一个key有多个值时生成数组
 *
 * @param {String} query 需要解析的query字符串，开头可以是?，
 * 按照application/x-www-form-urlencoded编码
 * @return {Object} 参数解析后的对象*/
(function () {
   function parseQuery(query){
       var result = {};

       //如果不是字符串，返回空对象
       if(typeof query !== 'string'){
           return result;
       }

       //去掉字符串开头可能带的？
       if(query.charAt(0) === '?'){
           query = query.substring(1);
       }

       var pairs = query.split('&');
       var pair;
       var key,value;
       var i,len;

       for(i=0,len=pairs.length;i<len;++i){
           pair = pairs[i].split('=');
           // application/x-www-form-urlencoded编码会将' '转换为+
           key = decodeURIComponent(pair[0]).replace(/\+/g,' ');
           value = decodeURIComponent(pair[1]).replace(/\+/g,' ');

           //如果是新key,直接添加
           if(!(key in result)){
               result[key] = value;
           }
           //如果key已经出现一次以上，直接向数组添加value
           //else if(isArray(result[key])){
           else if(Array.isArray(result[key])){
               result[key].push(value);
           }
           //key第二次出现，将结果改为数组
           else{
               //var arr = [result[key]];
               //arr.push(value);
               //result[key] = arr;
               result[key] = [result[key]].concat([value]);
           }
       }

       return result;
   }

    function isArray(arg){
        if(arg && typeof arg === 'object'){
            return Object.prototype.toString.call(arg) === '[object Array]';
        }
        return false;
    }

    console.log(parseQuery('sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&a=5&a=9'));
}());
