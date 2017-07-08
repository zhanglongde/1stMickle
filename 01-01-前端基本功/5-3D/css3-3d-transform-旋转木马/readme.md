# css3-3d-transform
仅需关键代码50行实现一个3D类似旋转木马的图片浏览功能

##代码示意
```html

<!DOCTYPE html>
<html>
<head>
    <title>Css3-3d-transform__实现图片旋转木马3D效果</title>
</head>
<style>
#doc{
	height: 600px;
	position: relative;
	overflow: hidden;
	background-color: #ddd;
}

#stage{
	width: 1000px;
	margin: 100px auto 0 auto;
	height: 400px;
	-webkit-perspective: 800px;
	   -moz-perspective: 800px;
            perspective: 800px;
	
	-webkit-transition: top .5s;

	position: relative;
}

#container{
	position: absolute;
	width: 128px;
	height: 72px;
	left: 50%;
	top:50%;
	margin-left: -64px;
	margin-top: -36px;
	cursor: pointer;

	-webkit-transition: -webkit-transform 1s;
	   -moz-transition: -moz-transform 1s;
	        transition: transform 1s;
	
	-webkit-transform-style: preserve-3d;
	   -moz-transform-style: preserve-3d;
	        transform-style: preserve-3d;
}

.piece{
	width: 128px;
	overflow: hidden;
	box-shadow: 0 1px 3px rgba(0,0,0,.5);
	-webkit-transition: opacity 1s, -webkit-transform 1s;
       -moz-transition: opacity 1s, -moz-transform 1s;
            transition: opacity 1s, transform 1s;
			
	position: absolute;
	bottom: 0;
}
</style>
<body>
	<div id="doc">
		<div id="stage">
			<div id="container">
				<!--此处可上传自己的图片-->
				<img src="../static/images/1.png" class='piece' style="-webkit-transform: rotateY(0deg) translateZ(196px);">
				<img src="../static/images/2.png" class='piece' style="-webkit-transform: rotateY(60deg) translateZ(196px);">
				<img src="../static/images/3.png" class='piece' style="-webkit-transform: rotateY(120deg) translateZ(196px);">
				<img src="../static/images/1.png" class='piece' style="-webkit-transform: rotateY(180deg) translateZ(196px);">
				<img src="../static/images/2.png" class='piece' style="-webkit-transform: rotateY(240deg) translateZ(196px);">
				<img src="../static/images/4.png" class='piece' style="-webkit-transform: rotateY(300deg) translateZ(196px);">
			</div>
		</div>
	</div>
</body>

<script>
	(function(){
		var indexPiece = 0,
			rotateDeg = 0,
			eleContainer = document.getElementById('container');

		// alert('start');
		eleContainer.addEventListener("click",function(){
			// alert('in');
			rotateDeg = 60*++indexPiece;
			eleContainer.style.transform = "rotateY("+rotateDeg+"deg)";
		})
	})();
</script>
</html>
```


