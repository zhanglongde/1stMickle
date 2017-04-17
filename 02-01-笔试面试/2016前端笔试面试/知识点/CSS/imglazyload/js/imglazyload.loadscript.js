/** 
 * imglazyload(include loadScript) v1.2 for jQuery
 * Author : chenmnkken@gmail.com
 * Url : http://stylechen.com/rewrite-documentwrite.html
 * Url : http://stylechen.com/imglazyload2.html
 * Date : 2012-04-02
 */
(function( $ ){

$.fn.imglazyload = function( options ){

	var o = $.extend({
				attr		:   'lazy-src', // String		  存放图片真实地址的属性
				container 	: 	window,	    // DOM / Selector 默认的容器为window，可自定义容器
				event 		: 	'scroll',   // String  		  触发事件类型，默认为window.onscroll事件				
				fadeIn      :   false,      // Boolean        是否使用jQuery的fadeIn效果来显示				
				threshold 	: 	0,		    // Number 		  触发距离
				vertical 	: 	true,	    // Boolean		  是否纵向滚动，false为横向滚动
				loadScript  :   false		// Boolean        使用textarea存放图片广告需要依赖$.famsg.loadScript和$.famsg.loadQueue方法
			}, options ),

		event = o.event,
		vertical = o.vertical,
		container = $( o.container ),
		threshold = o.threshold,
		isLoadScript = o.loadScript,
		
		elems = $.makeArray( $(this) ),	// 将jQuery对象转换成DOM数组便于操作
		
		dataName = 'imglazyload_offset', 
		
		OFFSET = vertical ? 'top' : 'left',
		SCROLL = vertical ? 'scrollTop' : 'scrollLeft',		
		
		winSize = vertical ? container.height() : container.width(),
		scrollCoord = container[ SCROLL ](),
		docSize = winSize + scrollCoord,
		loadQueue = [];
	
	// 入列
	var queue = function( data ){
		loadQueue.push( data );
		if( loadQueue[0] !== 'runing' ){
			dequeue();
		}
	};
		
	// 出列	
	var dequeue = function(){
		var fn = loadQueue.shift();
		if( fn === 'runing' ){
			fn = loadQueue.shift();
		}
		
		if( fn ){
			loadQueue.unshift( 'runing' );
			fn();
		}
	};
	
	/**
	 * 重写document.write实现无阻塞加载script
	 * @param { DOM Object } textarea元素
	 */
	var loadScript = function( elem ){
		var url = elem.value.match( /src="([\s\S]*?)"/i )[1],
			parent = elem.parentNode,
			docWrite = document.write,	// 缓存原生的document.write
			script = document.createElement( 'script' ), // 创建一个新script来加载
			head = document.head || 
				document.getElementsByTagName( 'head' )[0] || 
				document.documentElement;
		
		// 重写document.write
		document.write = function( text ){
			parent.innerHTML = text;
		};

		script.type = 'text/javascript';
		script.src = url;
		
		script.onerror = script.onload = script.onreadystatechange = function( e ){
			e = e || window.event;
			if( !script.readyState || 
			/loaded|complete/.test(script.readyState) ||
			e === 'error'
			){
				// 恢复原生的document.write
				document.write = docWrite;
				head.removeChild( script );
				
				head = 			
				parent = 
				elem =
				script = 
				script.onerror = 
				script.onload = 
				script.onreadystatechange = null;
				dequeue();
			}
		}
		
		// 加载script
		head.insertBefore( script, head.firstChild );
	};
	
	
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
			
			if( !isLoadScript ){
				lazySrc = $elem.attr( o.attr );
				
				if( !lazySrc || elem.src === lazySrc ){
					continue;
				}
			}
			// 先从缓存获取offset值，缓存中没有才获取计算值,
			// 将计算值缓存，避免重复获取引起的reflow
			coord = $elem.data( dataName );
			
			if( coord === undefined ){
				coord = isLoadScript ? $elem.parent().offset()[ OFFSET ] : $elem.offset()[ OFFSET ];
				$elem.data( dataName, coord );
			}

			isTrigger = isCustom || trigger[ event ]( coord );			

			if( isTrigger ){
				// textarea存放的图片的加载
				if( isLoadScript ){
					(function( elem ){
						queue(function(){
							loadScript( elem );
						});
					})( elem );
				}
				// 正常的图片加载
				else{
					elem.src = lazySrc;
					if( o.fadeIn ){
						$elem.hide().fadeIn();
					}
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

		elem = $elem = null;
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