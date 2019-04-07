/**
 * Created by zhanglongde on 2016/7/31.
 */

(function(){
    function showCase2(value) {
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
    showCase2(String('A'));
})();
