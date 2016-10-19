/**
 * Created by zhanglongde on 2016/7/12.
 */

var _onload = window.onload;

window.onload = function(){
    if(_onload){
        _onload();
    }
    console.log(2);
};