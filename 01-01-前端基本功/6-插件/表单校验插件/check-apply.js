/**
 * Created by zhanglongde on 2016/6/26.
 */

$(function(){
    //为proms增加新的校验项  exit  noexit same
    //$.Validator.form_rules.exit = function(){
    //    Log("exit test ----------------------------------------------------------");
    //    return false;
    //};
    //
    ////增加校验项
    //$.Validator.hints["form_container"]["user_mobile"]["exit"]="*此号码已被注册，请登录！";
    //
    $("#form_container").FormValidator({
        "scope":"form_container",
        "form_group":"#form_container input",
        "trigger":"#form_submit"
    });

    //$.Test.test2 = 1;
    //console.dir($.Test);
    //console.dir($.Validator);

    var cb = $("#test_container").FormValidator({
        "scope":"test-container",
        "form_group":"#test_container input",
        "trigger":"#form_submit_test"
    });

    console.dir(cb);
});
