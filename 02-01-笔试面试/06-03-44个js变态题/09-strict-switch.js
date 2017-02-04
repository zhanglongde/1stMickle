/**
 * Created by zhanglongde on 2016/7/31.
 */

(function(){
    function showCase(value) {
        switch(value) {
            case 'A':
                console.log('Case A');
                break;
            case 'B':
                console.log('Case B');
                break;
            case undefined:
                console.log('undefined');
                break;
            default:
                console.log('Do not know!');
        }
    }
    showCase(new String('A'));
    console.log(typeof new String('A'));
    console.log(typeof 'A')
})();


//基本包装类型 new出来的都是object
//区别于基本数据类型
(function(){
    console.log(typeof new String('A'));
    console.log(typeof new Number(1));
    console.log(typeof new Boolean(true));
})();
