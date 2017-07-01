/**
 * Created by zhanglongde on 2016/6/6.
 */

(function($){
    $.fn.bankSelect = function(settings){
        var bank =[{
            "city_bank":"请选择银行",
            "branch_bank":[{"option":"请选择支行"}]
        },{
            "city_bank":"杭州银行",
            "branch_bank":[{"option":"官巷口支行"}]
        }, {
            "city_bank":"工商银行",
            "branch_bank":[{"option":"拱宸桥支行"},{"option":"拱墅区支行"}]
        }];

        if(this.length<1){//无法获取父容器，查找指定DOM和默认DOM
            console.log(this.length);
            settings = $.extend({
                city_bank:"#citybank_select",
                branch_bank:"#branchbank_select"
            },settings);

            var city_bank_obj = $(settings.city_bank);
            var branch_bank_obj = $(settings.branch_bank);
            console.log(city_bank_obj);
            console.log(branch_bank_obj);
            if((city_bank_obj<1) || (branch_bank_obj<1))//无法获取目标DOM，直接返回
            {
                console.log("can not inin plugin");
                return;
            }
        }else{//获得父容器，直接按照input顺序查找
            console.log("get from parent container");
            var city_bank_obj = $(this).children("select:eq(0)");
            var branch_bank_obj = $(this).children("select:eq(1)");
        }

        var load_city_bank = function(){
            city_bank_obj.empty();
            var options = '';
            for(var i = 0 ; i<bank.length; i++){
                options += '<option value="'+bank[i].city_bank+'">'+ bank[i].city_bank+'</option>';
            }
            city_bank_obj.html(options);
        };

        var load_branch_bank = function(){
            branch_bank_obj.empty();
            var def_option = bank[0].branch_bank[0].option;
            var options = '<option value="'+def_option+'">'+def_option+'</option>';
            branch_bank_obj.html(options);
        };

        var change_branch_bank = function(){
            var city_bank_id = city_bank_obj.get(0).selectedIndex;
            branch_bank_obj.empty();
            var options = '';
            var branch_bank = bank[city_bank_id].branch_bank;
            for(var i = 0 ; i<branch_bank.length; i++){
                options += '<option value="'+branch_bank[i].option+'">'+ branch_bank[i].option +'</option>';
            }
            branch_bank_obj.html(options);
        };

        var init = function(){
            load_city_bank();
            load_branch_bank();
            city_bank_obj.on("change",change_branch_bank);
        };

        init();
    };
})(jQuery);
