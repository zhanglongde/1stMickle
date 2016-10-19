/**
 * Created by zhanglongde on 2016/8/12.
 */

$(function(){
    $(".product-item").hover(function(){
        var _this = $(this).find(".product-item-dropdown");
        var _drop = $(this).find(".product-item-dropdown-content");
//                console.log(_this.text());
        _drop.css('top','-200px');
        _this.removeClass('hidden');
        _drop.animate({top:'0'},600);
    },function(){
        var _this = $(this).find(".product-item-dropdown");
        var _drop = $(this).find(".product-item-dropdown-content");
        _drop.animate({top:'-200px'},600,function(){
            _this.addClass('hidden');

        });
    });
});