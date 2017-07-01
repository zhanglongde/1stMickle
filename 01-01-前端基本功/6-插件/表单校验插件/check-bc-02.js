/**
 * Created by zhanglongde on 2016/6/3.
 */
(function(){
    var tool = {};
    tool.verify_empty = function(str){
        if(str === ''){
            return true;
        }
        else{
            return false;
        }
    };
    tool.verify_phone = function (phone) {
        phone = tool.trim(phone);
        var reg = /^1[3|5|7|8|][0-9]{9}$/;
        return reg.test(phone);
    };
    tool.verify_phonecode = function (phone_code) {
        phone_code = tool.trim(phone_code);
        var reg = /^[0-9]{6}$/;
        return reg.test(phone_code);
    };
    tool.finance_amount = function(num){
        var reg = /(^\d+$)/;　　//非负整数（正整数 + 0）
        return reg.test(num); //str为你要判断的字符 执行返回结果 true 或 false
    };

    window.MyTool = tool;
})();
(function(){
    var show_error = function(container){
        $(container).text('');
    };

    var check = {
        "empty":"MyTool.verify_empty",
        "phone_number":"MyTool.verify_phone_number",
        "phone_code":"MyTool.verify_phone_code",
        "finance_amount":"tool.finance_amount "
    };

    var message = {
    };

    var proms = {
        "finance_quick":{
            "user_name":{"MyTool.verify_empty":"*姓名不能为空",
                "container":"#user_name_container .error-content"},
            "the_amount":{"MyTool.verify_empty":"*用款金额不能为空", "MyTool.finance_amount":"*不可输入小数点、负数","container":"#the_amount_container .error-content"},
            "user_mobile":{"MyTool.verify_empty":"*手机号码不能为空", "MyTool.verify_phone_number":"*请输入正确的手机号码","exit":"*此号码已被注册，请登录！","container":"#user_mobile_container .error-content"},
            "user_checkcode":{"MyTool.verify_empty":"*验证码不能为空", "MyTool.verify_phone_code":"*请输入正确的手机验证码","container":"#user_checkcode_container .error-content"}
        }
    };

    message.Msg = function(ctrl){
        if((ctrl.scope === "login") || (ctrl.scope === "register") || (ctrl.scope === "finance_quick"))
        {
            var errors = [];
            if ($.inArray(proms[ctrl.scope][ctrl.id],errors) === -1) {
                errors.push(proms[ctrl.scope][ctrl.id][ctrl.func]);
            }
            if (errors.length > 0) {
                //$(proms[ctrl.scope][ctrl.str]["container"]).show();
                console.log($(proms[ctrl.scope][ctrl.id]["container"]).attr("id"));
                $(proms[ctrl.scope][ctrl.id]["container"]).text(errors[0]);
            }
        }
        else if((ctrl[scope]  === "update_phone")){
            message.PhoneToastr(proms[ctrl.scope][ctrl.id][ctrl.func]);
        }
        else
        {
            toastr.error(proms[ctrl.scope][ctrl.id][ctrl.func]);
        }
    };

    message.MyValidate = function(ctrl){
        for(var key in proms[ctrl.scope][ctrl.id]){

            var func_str = key;
            var error_prom = proms[ctrl.scope][ctrl.id][key];
            console.log(func_str);
            console.log(typeof func_str);
            if(func_str !== "container"  || (func_str !== "exit")){

            }
            else
            {
                var func = eval(func_str);
                if(func() === true){

                }
            }

            //console.log(error_prom);
            //func();
        }
    };

    window.MyMessage = message;
})();

(function(){
    var validate ={};
    validate.check_1 = function(scope, class_name,event,trigger){
        $(class_name).on(event, function () {
            $(this).each(function () {
                var str_id = $(this).attr("id");
                var user_str = $(this).val();
                var ctrl = {
                    "scope":"finance_quick",
                    "id":str_id
                    //"func":"empty"
                };
                //console.log("--------------------------------------MyValidate");
                MyMessage.MyValidate(ctrl);

                $(".error-content").text('');
            });
        });
    };

    window.MyValidate = validate;
})();

$(function(){
    //$("#blurtest input").on("blur",{count:1},validate);//blur 事件不冒泡
    MyValidate.check_1("finance_quick","#blurtest input","blur");
});


