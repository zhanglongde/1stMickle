/**
 * Created by zhanglongde on 2016/6/6.
 */

(function($){
    var Log = function(){
        var args = Array.prototype.slice.call(arguments);
        //args.unshift("----------------------------------------------------\n");
        console.trace();

        console.log.apply(console,args);

    };
    window.Log = Log;
    $.Log = Log;
})(jQuery);
