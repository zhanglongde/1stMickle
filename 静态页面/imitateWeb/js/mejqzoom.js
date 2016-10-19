$(function() {
	var isState=false;
	//鼠标在图片上移动时，显示遮罩层区域的细节图
	$(".imgbox").mousemove(function(event) {
		var imgstate=$("#showbigimg").css("display");
		if(imgstate==="none"){//如果高清图没有显示就执行细节图显示，否则不执行任何操作
			$(".bigbox").show();
			//计算百分比
			var sx = event.pageX, //鼠标在页面上的位置
					sy = event.pageY,
					ox = $(this).offset().left, //小图在页面上的偏移量
					oy = $(this).offset().top,
					cWidth = sx - ox, //鼠标在小图上的宽高
					cHeight = sy - oy,
					simgwidth = $("#smallimg").width(), //小图片的宽高
					simgheight = $("#smallimg").height(),
			//大图片的宽高
					bimgwidth = $("#bimg").width(),
					bimgheight = $("#bimg").height(),
			//大图片显示区域的大小的一半
					boxwidth = $(".bigbox").width() / 2,
					boxheight = $(".bigbox").height() / 2,
			////得出鼠标位置占图片大小的百分比
					x = (cWidth / simgwidth).toFixed(2),
					y = (cHeight / simgheight).toFixed(2),
			//细节大图全部显示时临界百分比，即细节大图在显示区域的上下左右的距离不能小于大图显示区域宽或高的一半
			//鼠标在小图左侧移动时，全部显示细节大图时的最小宽占比
					minpercx = ((boxwidth + 2) / bimgwidth).toFixed(2), //+2,是边框的大小
			//鼠标在小图上侧移动时，全部显示细节大图时的最小高占比
					minpercy = ((boxheight + 2) / bimgheight).toFixed(2),
			//鼠标在小图右侧移动时，全部显示细节大图时的最大宽占比
					maxpercx = 1 - minpercx,
			//鼠标在小图下侧移动时，全部显示细节大图时的最大高占比
					maxpercy = 1 - minpercy,
			//遮罩层的大小的一半
					layerwidth = $("#layer").width() / 2,
					layerheight = $("#layer").height() / 2,
					bx, by; //保存大图显示中心位置坐标
			//$("#preview-img").width() * x小于等于250
			if (x <= minpercx) {
				x = minpercx;
			} else if (x >= maxpercx) { //$("#preview-img").width() * x大于等于（1280-250=1030）
				x = maxpercx;
			}
			if (y <= minpercy) { //$("#preview-img").height() * y小于等于250
				y = minpercy;
			} else if (y >= maxpercy) { //$("#preview-img").height() * y大于等于（800-250=550）
				y = maxpercy;
			}
			//鼠标在小图上的位置，距离上下左右不能小于遮罩层宽或高的一半
			if (cWidth < layerwidth) {
				cWidth = layerwidth;
			} else if (cWidth > (simgwidth - layerwidth)) {
				cWidth = simgwidth - layerwidth;
			}
			if (cHeight < layerheight) {
				cHeight = layerheight;
			} else if (cHeight > (simgheight - layerheight)) {
				cHeight = simgheight - layerheight;
			}
			//遮罩层显示的位置
			$("#layer").css('top', (cHeight - layerheight) + "px");
			$("#layer").css('left', (cWidth - layerwidth) + "px");
			$("#layer").css('visibility', "visible");
			//计算细节大图正好显示在显示区域中心时的坐标
			bx = -(bimgwidth * x - boxwidth);
			by = -(bimgheight * y - boxheight);
			$("#bimg").css('top', by + 'px');
			$("#bimg").css('left', bx + 'px');
		}
	});
	//鼠标移出图片区域，隐藏大图和遮罩层
	$(".imgbox").mouseout(function() {
		$("#layer").css('visibility', 'hidden');
		$(".bigbox").hide();
	});
	//鼠标悬浮于缩略图之上时，在上方显示对应的图片
	$(".imglist").mouseover(function() {
		$(this).addClass("selected").siblings().removeClass("selected");
		var srcValue = $(this).find(".simg").attr("src");
		$("#smallimg").attr("src", srcValue.replace("small", "mid"));
		$("#bimg").attr("src", srcValue.replace("_small", ""));
	});
	//点击大图显示高清图
	$("#layer").click(function(event){
       var srcvalue=$("#smallimg").attr("src");
		$("#showbigimg").attr("src",srcvalue);
		$("#showbigimg").css("display","block");
		event.stopPropagation();
	});
	//鼠标移出高清大图时，isState=true;
	$("#showbigimg").mouseout(function(){
		isState=true;
	});
	//鼠标在高清大图上时，isState=false;
	$("#showbigimg").mouseover(function(){
		isState=false;
	});
	//点击高清图之外的地方，关闭高清图
	$(document).click(function(){
		var showvalue=$("#smallimg").css("display");
		if(showvalue!= "none" && isState){
			$("#showbigimg").css("display","none");
		}
	});
});