/**
 * Created by zhanglongde on 2016/6/6.
 */
(function($){
    $.fn.FormValidator = function(ctrl){
        //$.Validator = {};
        var form_rules = {};//检验规则
        var form_error = {};//错误错误处理
        var form_messages = {};//核心对象

        //var form_rules = $.Validator.form_rules;
        //$.Validator.Hints = form_messages.hints;

//---------------回显控制-----------------------------------------------------------------------------------------
        var Log = function(){
            var args = Array.prototype.slice.call(arguments);
            //console.trace();
            //console.log.apply(console,args);
        };

        var Dir = function(){
            var args = Array.prototype.slice.call(arguments);
            //console.trace();
            //console.dir.apply(console,args);
        };
//---------------默认项策略配置--------------------------------------------------------------------------------------------------------------
        if(this.length<1){//无法获取父容器，采取默认的父容器名称
            Log("can not get form container");
            ctrl.scope = "form_container";
        }
        else{
            ctrl.scope = $(this).attr("id");
        }
        //如果不定义检验范围，则默认为容器下面的所有input元素（不包括忽略规则中的元素）
        if(ctrl.form_group == undefined){
            ctrl.form_group = "#"+ctrl.scope+" input";
        }
//---------------检验规则，如果已经定义则直接引用，如form_rules.xx=MyToo.xx;-----------------------------------------------------------------------------------------
        //检验规则名称与检验方法的映射关系
        var RulesMap = {
            "empty":"form_rules.verify_empty",
            "phone_number":"form_rules.verify_phone_number",
            "phone_code":"form_rules.verify_phone_code",
            "finance_amount":"form_rules.finance_amount "
        };

        form_rules.verify_empty = function(str){
            Log("----------form_rules.verify_empty");
            if(str === '' || str === undefined){
                return false;
            }
            else{
                return true;
            }
        };
        form_rules.verify_phone_number = function (phone) {
            //phone = tool.trim(phone);
            var reg = /^1[3|5|7|8|][0-9]{9}$/;
            return reg.test(phone);
        };
        form_rules.verify_phone_code = function (phone_code) {
            //phone_code = tool.trim(phone_code);
            var reg = /^[0-9]{6}$/;
            return reg.test(phone_code);
        };
        form_rules.finance_amount = function(num){
            var reg = /(^\d+$)/;　　//非负整数（正整数 + 0）
            return reg.test(num); //str为你要判断的字符 执行返回结果 true 或 false
        };

        form_rules.form_neglect = function (obj) {
            if($(obj).hasClass("form-neglect") || $(obj).attr("type")=="hidden"){
                return true;//需要忽略该项，不做检验
            }
            return false;
        };

        form_rules.toString = function()
        {
            return "form_rules";
        };

//---------------错误显示方法、容器FormError-----------------------------------------------------------------------------------------
        form_error.clear_error = function(container){
            $(container).text('');
        };
        form_error.show_error = function(container,str){
            $(container).text(str);
        };

        form_error.toString = function(){
            return "form_error";
        };
//---------------检验提示FormMessages   核心-----------------------------------------------------------------------------------------
        form_messages.hints = {//改为hints
            "test_container":{
                "test1":{//label
                    "verify_empty":"*测试项不能为空",
                    "container":"#test_container .error-label",
                    "show_error":"show_error",
                    "clear_error":"clear_error"
                }
            },
            "form_container":{
                "user_name":{//label
                    "verify_empty":"*姓名不能为空",
                    "container":"#user_name_container .error-content",
                    "show_error":"show_error",
                    "clear_error":"clear_error"
                },
                "the_amount":{
                    "verify_empty":"*用款金额不能为空",
                    "finance_amount":"*不可输入小数点、负数",
                    "container":"#the_amount_container .error-content",
                    "show_error":"show_error",
                    "clear_error":"clear_error"
                },
                "user_mobile":{
                    "verify_empty":"*手机号码不能为空",
                    "verify_phone_number":"*请输入正确的手机号码",
                    "exit":"*此号码已被注册，请登录！",
                    "container":"#user_mobile_container .error-content",
                    "show_error":"show_error",
                    "clear_error":"clear_error"
                },
                "user_checkcode":{
                    "verify_empty":"*验证码不能为空",
                    "verify_phone_code":"*请输入正确的手机验证码",
                    "container":"#user_checkcode_container .error-content",
                    "show_error":"show_error",
                    "clear_error":"clear_error"
                }
            }
        };

        var proms = form_messages.hints;
        form_messages.Msg = function(params){
            Log("----------form_messages.Msg start");
            //var proms = form_messages.hints;
            if(params.scope == undefined){
                return;
            }
            //if((params.scope === "login") || (params.scope === "register") || (params.scope === "form_container"))
            {
                var errors = [];
                if ($.inArray(proms[params.scope][params.id],errors) === -1) {
                    errors.push(proms[params.scope][params.id][params.func]);
                }
                if (errors.length > 0) {
                    var show_error_name = form_error.toString()+"."+proms[params.scope][params.id]["show_error"];
                    var show_error = eval(show_error_name);
                    show_error(proms[params.scope][params.id]["container"],errors[0]);
                    if(params.focus == 1){
                        //Log(params.focus);
                        $("#"+params.id).focus();
                    }
                }
            }
        };

//---------------检验单项--------------------------------------------------------------------------------------------
        var check_item = function(scope,id_str,trigger,focus){
            Log("----------check_item");
            var params = {
                "scope":scope,
                "id":id_str,
                "func":"",
                "trigger":trigger,
                "focus":focus
            };
            //search the check item
            for(var func_str in proms[scope][id_str]){
                //跳过非检验规则的项
                if(func_str === "container"  || (func_str === "show_error") || (func_str === "clear_error")){
                }
                else
                {
                    //查找规则名与检验方法的映射
                    var function_name = form_rules.toString()+"."+func_str;
                    //switch string into check function
                    var func = eval(function_name);
                    //get value of the checked form control
                    var val = $("#"+id_str).val();
                    var return_val = func(val);
                    //the item needs to show error promote
                    if(return_val === false){//检验不通过
                        params.func = func_str;
                        form_messages.Msg(params);
                        return false;
                    }
                    else{//检验通过，执行回调

                    }
                }
            }
            //clear_error  该项检验通过，清除错误提示
            //$(proms[params.scope][params.id]["container"]).text("");
            var clear_error_name = form_error.toString()+"."+proms[params.scope][params.id]["clear_error"];
            var clear_error_func = eval(clear_error_name);
            clear_error_func(proms[params.scope][params.id]["container"]);
            return true;
        };

//------------------绑定事件   回调函数-----------------------------------------------------------------------------------------------------
        var click_callback = function(event){
            Log("----------click_callback");
            var ctrl = event.data.params;

            for(var id_str in proms[ctrl.scope]){
                Log(id_str);
                if(!form_rules.form_neglect("#"+id_str)){//忽略规则
                    var ret = check_item(ctrl.scope,id_str,ctrl.trigger,1);
                    if(ret === false){
                        break;
                    }
                }
            }
        };

        var blur_callback = function (event) {
            Log("----------blur_callback");
            var ctrl = event.data.params;
            //bind event for every form control

            $(this).each(function () {
                var id_str = $(this).attr("id");
                if(!form_rules.form_neglect("#"+id_str)){//忽略规则
                    check_item(ctrl.scope,id_str,ctrl.trigger,0);
                }
            });
        };
//------------------绑定事件   策略-----------------------------------------------------------------------------------------------------
        var check = function(ctrl) {
            if (ctrl.event === "click") {
                Dir(ctrl);
                $(ctrl.trigger).on(ctrl.event,{params: ctrl}, click_callback);
            }
            else if (ctrl.event === "blur")
            {
                Dir(ctrl);
                $(ctrl.form_group).on(ctrl.event, {params: ctrl}, blur_callback);
            }else{
                Log("change event!");
            }
        };

        if(ctrl.trigger == undefined){
            ctrl.event = "blur";
            check(ctrl);
        }else{
            ctrl.event = "blur";
            check(ctrl);
            ctrl.event = "click";
            check(ctrl);
        }

        //$.Validator = {};
        //$.Validator.FormRules = form_rules;
        //$.Validator.Hints = form_messages.hints;
    };
    //
    //$.Test = {
    //    test1:function(){
    //        console.log("test1");
    //    }
    //};
})(jQuery);

