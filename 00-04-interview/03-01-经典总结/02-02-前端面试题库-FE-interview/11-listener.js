/**
 * Created by zhanglongde on 2016/8/13.
 */

(function () {
    var addListener;
    if(window.addEventListener){
          console.log('Not IE8');
          addListener = function(el,type,listener,useCapture){
              el.addEventListener(type,listener,useCapture);
              return listener;
          }
    }else if(window.attachEvent){  //IE8以下，包括IE8
          console.log('IE8');
    }


}());
