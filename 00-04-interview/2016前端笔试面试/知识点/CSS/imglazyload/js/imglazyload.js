/** 
 * imglazyload v1.1 for jQuery
 * Author : chenmnkken@gmail.com
 * Url : http://stylechen.com/imglazyload2.html
 * Date : 2012-03-29
 */
(function( $ ){

$.fn.imglazyload = function( options ){

	var o = $.extend({
				attr		:   'lazy-src', // String		  存放图片真实地址的属性
				container 	: 	window,	    // DOM / Selector 默认的容器为window，可自定义容器
				event 		: 	'scroll',   // String  		  触发事件类型，默认为window.onscroll事件				
				fadeIn      :   false,      // Boolean        是否使用jQuery的fadeIn效果来显示				
				threshold 	: 	0,		    // Number 		  触发距离
				vertical 	: 	true	    // Boolean		  是否纵向滚动，false为横向滚动
			}, options ),

		event = o.event,
		vertical = o.vertical,
		container = $( o.container ),
		threshold = o.threshold,	
		elems = $.makeArray( $(this) ),	// 将jQuery对象转换成DOM数组便于操作
		
		dataName = 'imglazyload_offset', 
		
		OFFSET = vertical ? 'top' : 'left',
		SCROLL = vertical ? 'scrollTop' : 'scrollLeft',		
		
		winSize = vertical ? container.height() : container.width(),
		scrollCoord = container[ SCROLL ](),
		docSize = winSize + scrollCoord;
			
	// 延迟加载的触发器	
	var trigger = {

		init : function( coord ){
			return coord >= scrollCoord && coord <= ( docSize + threshold );
		},

		scroll : function( coord ){
			var scrollCoord = container[ SCROLL ]();
			return coord >= scrollCoord && coord <= ( winSize + scrollCoord + threshold );
		},
		
		resize : function( coord ){
			var scrollCoord = container[ SCROLL ](),
				winSize = vertical ? container.height() : container.width();
			return coord >= scrollCoord && coord <= ( winSize + scrollCoord + threshold );
		}
	};
		
	var loader = function( triggerElem, event ){
		var i = 0,
			isCustom = false,
			isTrigger, coord, elem, $elem, lazySrc;
				
		// 自定义事件只要触发即可，无需再判断
		if( event ){
			if( event !== 'scroll' && event !== 'resize' ){
				isCustom = true;
			}
		}
		else{
			event = 'init';
		}
					
		for( ; i < elems.length; i++ ){	
			isTrigger = false;
			elem = elems[i];
			$elem = $( elem );
			lazySrc = $elem.attr( o.attr );
			
			if( !lazySrc || elem.src === lazySrc ){
				continue;
			}
			// 先从缓存获取offset值，缓存中没有才获取计算值,
			// 将计算值缓存，避免重复获取引起的reflow
			coord = $elem.data( dataName );
			
			if( coord === undefined ){
				coord = $elem.offset()[ OFFSET ];
				$elem.data( dataName, coord );
			}

			isTrigger = isCustom || trigger[ event ]( coord );			

			if( isTrigger ){
				// 加载图片
				elem.src = lazySrc;
				if( o.fadeIn ){
					$elem.hide().fadeIn();
				}
				// 移除缓存
				$elem.removeData( dataName );
				// 从DOM数组中移除该DOM
				elems.splice( i--, 1 );
			}
		}
		
		// 所有的图片加载完后卸载触发事件
		if( !elems.length ){
			if( triggerElem ){
				triggerElem.unbind( event, fire );
			}
			else{
				container.unbind( o.event, fire );
			}
			$( window ).unbind( 'resize', fire );
			elems = null;
		}
		
	};
	
	var	fire = function( e ){
		loader( $(this), e.type );
	};
	
	// 绑定事件
	container = event === 'scroll' ? container : $( this );	
	container.bind( event, fire );
	$( window ).bind( 'resize', fire );
	
	// 初始化
	loader();
	
	return this;
};

})( jQuery );

// 2012-03-29 修复特殊场景下无法卸载事件的BUG