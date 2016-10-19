// by zhangxinxu  welcome to visit my personal website http://www.zhangxinxu.com/
// 任意锚点平滑跳转插件
// 2010-07-15 v1.0
(function($){
	$.fn.zxxAnchor = function(options){
		var defaults = {
			ieFreshFix: true,
			anchorSmooth: true,
			anchortag: "anchor",
			animateTime: 1000
		};
		var sets = $.extend({}, defaults, options || {});
		//修复IE下刷新锚点失效的问题
		if(sets.ieFreshFix){
			var url = window.location.toString();
			var id = url.split("#")[1];
			if(id){
				var t = $("#"+id).offset().top;
				$(window).scrollTop(t);
			}	
		}
		//点击锚点跳转
		$(this).each(function(){
			$(this).click(function(){
				var aim = $(this).attr(sets.anchortag).replace(/#/g,"");	//跳转对象id
				var pos = $("#"+aim).offset().top;
				if(sets.anchorSmooth){
					//平滑
					$("html,body").animate({scrollTop: pos}, sets.animateTime);	
				}else{
					$(window).scrollTop(pos);
				}
				return false;				   
			});	
		});
	};
})(jQuery);