/**
 * Created by zhanglongde on 2016/6/6.
 */

/**
 * Created by zhanglongde on 2016/6/3.
 */
(function(){
    var Log = function(){
        var args = Array.prototype.slice.call(arguments);
        args.unshift("----------------------------------------------------\n");

        console.log.apply(console,args)
    };
    window.Log = Log;
})();
(function(){
    var tool = {};
    tool.verify_empty = function(str){

        if(str === '' || str === undefined){
            return false;
        }
        else{
            return true;
        }
    };
    tool.verify_phone_number = function (phone) {
        //phone = tool.trim(phone);
        var reg = /^1[3|5|7|8|][0-9]{9}$/;
        return reg.test(phone);
    };
    tool.verify_phone_code = function (phone_code) {
        //phone_code = tool.trim(phone_code);
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


    var check = {
        "empty":"MyTool.verify_empty",
        "phone_number":"MyTool.verify_phone_number",
        "phone_code":"MyTool.verify_phone_code",
        "finance_amount":"tool.finance_amount "
    };

    var message = {
    };

    message.clear_error = function(container){
        $(container).text('');
    };
    message.show_error = function(container,str){
        $(container).text(str);
    };

    var proms = {
        "finance_quick":{
            "user_name":{
                "MyTool.verify_empty":"*姓名不能为空",
                "container":"#user_name_container .error-content",
                "show_error":"message.show_error",
                "clear_error":"message.clear_error"
            },
            "the_amount":{
                "MyTool.verify_empty":"*用款金额不能为空",
                "MyTool.finance_amount":"*不可输入小数点、负数",
                "container":"#the_amount_container .error-content",
                "show_error":"message.show_error",
                "clear_error":"message.clear_error"
            },
            "user_mobile":{
                "MyTool.verify_empty":"*手机号码不能为空",
                "MyTool.verify_phone_number":"*请输入正确的手机号码",
                "exit":"*此号码已被注册，请登录！",
                "container":"#user_mobile_container .error-content",
                "show_error":"message.show_error",
                "clear_error":"message.clear_error"
            },
            "user_checkcode":{
                "MyTool.verify_empty":"*验证码不能为空",
                "MyTool.verify_phone_code":"*请输入正确的手机验证码",
                "container":"#user_checkcode_container .error-content",
                "show_error":"message.show_error",
                "clear_error":"message.clear_error"
            }
        }
    };

    message.Msg = function(params){
        if((params.scope === "login") || (params.scope === "register") || (params.scope === "finance_quick"))
        {
            var errors = [];
            if ($.inArray(proms[params.scope][params.id],errors) === -1) {
                errors.push(proms[params.scope][params.id][params.func]);
            }
            if (errors.length > 0) {
                var show_error = eval(proms[params.scope][params.id]["show_error"]);
                show_error(proms[params.scope][params.id]["container"],errors[0]);
                if(params.focus == 1){
                    $("#"+params.id).focus();
                }
            }
        }
        else if((params.scope  === "update_phone")){
            message.PhoneToastr(proms[params.scope][params.id][params.func]);
        }
        else
        {
            toastr.error(proms[params.scope][params.id][params.func]);
        }
    };

    window.Proms = proms;
    window.MyMessage = message;
})();

(function(){
    var validate ={};
    var proms = Proms;

    var check_item = function(scope,id_str,trigger,focus){
        var params = {
            "scope":scope,
            "id":id_str,
            "func":"",
            "trigger":trigger,
            "focus":focus
        };
        //search the check item
        for(var func_str in proms[scope][id_str]){
            //var error_prom = proms[ctrl.scope][id_str][func_str];
            Log(func_str);
            if(func_str === "container"  || (func_str === "exit") || (func_str === "show_error") || (func_str === "clear_error")){

            }
            else
            {
                //switch string into check function
                var func = eval(func_str);
                //get value of the checked form control
                var val = $("#"+id_str).val();
                var return_val = func(val);
                console.log(return_val);
                //the item needs to show error promote
                if(return_val === false){
                    params.func = func_str;
                    MyMessage.Msg(params);
                    return false;
                }
                else{

                }
            }
        }
        //clear_error
        $(proms[params.scope][params.id]["container"]).text("");
        return true;
    };

    var click_callback = function(event){
        var ctrl = event.data.params;

        for(var id_str in proms[ctrl.scope]){
            //Log(id_str);
            var ret = check_item(ctrl.scope,id_str,ctrl.trigger,1);
            if(ret === false){
                break;
            }
        }
    };

    var blur_callback = function (event) {
        var ctrl = event.data.params;
        //Log(ctrl);
        //Log(ctrl.scope);
        //bind event for every form control

        $(this).each(function () {
            var id_str = $(this).attr("id");
            //Log(id_str);
            //Log(proms[ctrl.scope][id_str]);
            check_item(ctrl.scope,id_str,ctrl.trigger,0);
        });
    };

    validate.check = function(ctrl) {
        if (ctrl.event === "click") {
            $(ctrl.trigger).on(ctrl.event,{params: ctrl}, click_callback);
        }
        else//ctrl.event === "blur"
        {
            $(ctrl.form_group).on(ctrl.event, {params: ctrl}, blur_callback);
        }
    };

    window.MyValidate = validate;
})();

$(function(){
    var params_blur ={
        "scope":"finance_quick",
        "form_group":"#blurtest input",
        "event":"blur",
        "trigger":""
    };
    var params_click ={
        "scope":"finance_quick",
        "form_group":"#blurtest input",
        "event":"click",
        "trigger":"#commit"
    };

    MyValidate.check(params_blur);
    MyValidate.check(params_click);

    //为proms增加新的校验项  exit  noexit same
});



