/**
 * Created by zhanglongde on 2016/6/5.
 */
$(function(){
    function getData1(){
        var result;
        $.ajax({
            //url : 'http://www.sky-soft.co:3009/api/certificate',
            //url : 'http://localhost:3000/api/dummy/BasicInfo/GetBankInfo',
            url : 'http://localhost:3000/api/dummy/Product/GetProductSeries',
            async : false,
            type:'post',
            success: function(data){
                console.log("success");
                result = data;
            },
            error:function(data){
                console.log("error");
                result = data;
            }
        });
        return result;
    }


    $('.btn1').click(function(){
        console.log("click");
        $('.loadingicon').show();
        var data = getData1();
        $('.loadingicon').hide();
        //alert(data);
        console.log(data);
    });


    $('.btn2').click(function(){
        $('.loadingicon').show();
        setTimeout(function(){
            $.ajax({
                //url : 'http://www.sky-soft.co:3009/api/certificate',
                //url : 'http://localhost:3009/api/dummy/BasicInfo/GetBankInfo',
                url : 'http://localhost:3000/api/dummy/Product/GetProductSeries',
                async : false,
                type:'post',
                success: function(data){
                    $('.loadingicon').hide();
                    console.log("success:"+data);
                },
                error:function(data){
                    $('.loadingicon').hide();
                    console.log("error:"+data);
                }
            });
        }, 0);
    });

    var send_before = function(){
        layer.load();
    };
    var succ_func = function(data){
        layer.closeAll('loading');
        console.log("done:"+data);
        console.dir(data);
    };
    var error_func = function(data){
        layer.closeAll('loading');
        console.log("fail:"+data);
        console.dir(data);
    };
    var timeout_func = function(data){
        layer.closeAll('loading');
        console.log("timeout2:"+data);
        console.dir(data);
    };


    var get_promise = function (url,type,timeout){
        var defer = $.Deferred();
        $.ajax({
            url :url,
            type:type,
            timeout:timeout,
            success: function(data){
                //console.log("success:"+data);
                defer.resolve(data);
            },
            error:function(data){
                if(data.statusText === "timeout"){
                    //console.log("timeout1:"+data);
                    defer.reject(data);
                }else{
                    //console.log("error:"+data);
                    defer.reject(data);
                }
            }
        });
        return defer.promise();
    };

    var defer_promise = function(ctrl){
        var params = {
            type:"post",
            timeout:11000,
            send_before:send_before,
            succ_func:succ_func,
            error_func:error_func,
            timeout_func:timeout_func
        };
        $.extend(params,ctrl);
        console.dir(params);
        params.send_before();
        var promise = get_promise(params.url,params.type,params.timeout);
        $.when(promise)
            .done(function(data){
                params.succ_func(data)
            })
            .fail(function(data){
                if(data.statusText === "timeout"){
                    params.timeout_func(data);
                }
                else{
                    params.error_func(data);
                }
            });
    };

    var defer_promise_event = function(event){
        //var params = event.data;
        var params = {
            type:"post",
            timeout:11000,
            send_before:send_before,
            succ_func:succ_func,
            error_func:error_func,
            timeout_func:timeout_func
        };
        $.extend(params,event.data);
        console.dir(params);
        params.send_before();
        var promise = get_promise(params.url,params.type,params.timeout);
        $.when(promise)
            .done(function(data){
                params.succ_func(data)
            })
            .fail(function(data){
                if(data.statusText === "timeout"){
                    params.timeout_func(data);
                }
                else{
                    params.error_func(data);
                }
            });
    };
    var url1 = 'http://localhost:3000/api/dummy/Product/GetProductSeries2';
    var url2 = 'http://localhost:3000/api/dummy/Product/GetProductSeries';
    var type = "post";
    var timeout1=11500;
    var timeout2=8000;

    var target_func = function(){
        defer_promise({url:url2,timeout:timeout2});
    };

    $('.btn3').on("click",{url:url1,type:type,timeout:timeout1,send_before:send_before,succ_func:succ_func,error_func:error_func,timeout_func:timeout_func},defer_promise_event);
    $('.btn4').on("click",{url:url2,type:type,timeout:timeout1,send_before:send_before,succ_func:succ_func,error_func:error_func,timeout_func:timeout_func},defer_promise_event);
    $('.btn5').on("click",{url:url2,type:type,timeout:timeout2,send_before:send_before,succ_func:succ_func,error_func:error_func,timeout_func:timeout_func},defer_promise_event);
    $('.btn6').on("click",{url:url2},defer_promise_event);
    $('.btn7').on("click",target_func);
});

