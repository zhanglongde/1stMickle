# css filter effect #
----------

<p style="font-size:12px;border:0;border-left:3px solid #ddd;background:transparent;line-height:20px;padding:10px;color:#999;">之前项目开发中遇到要把图片模糊的需求，于是google了一把，采用了`filter-blur`来做，后发现`filter`是个好家伙啊，能处理很多图片特效，不仅仅是blur(敢情浏览器是想把自己做成图片处理器了)。再于是从Mozilla的[web技术文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter%E6%BB%A4%E9%95%9C)（尝试翻译成了中文，英文不好请别拍砖）上进一步了解了下filter这个css3新内容，注意此filter非CSS1里的filter属性，而是filter-effects，对应的[W3C规范](http://www.w3.org/TR/filter-effects/)。</p>

## 初探filter特效之灰度 ##
废话不多说，先甩个图来看下效果：

 ![](https://raw.githubusercontent.com/lzf0402/css-filter/master/demo/show1.png)

上图展示的是filter**众多效果中的一种**，即灰度滤镜效果。左边的图是原图，右边的图设置了`filter：grayscale(1)`这一属性（目前还需要加浏览器前缀来使用，关于浏览器支持度[戳这里](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter%E6%BB%A4%E9%95%9C#Browser_compatibility)），如你所见，图片变成了一张灰度图像。这一功能是否立马触动了你的脑洞，在某些举国悲痛的日子里，需要全站一夜变灰以示哀悼的，就可以用这个属性轻松实现啦。当然，你不得不考虑兼容性，那么问题来了，兼容技术哪家强？

**CSS兼容：**

	.gray { 
	    -webkit-filter: grayscale(100%);
	    -moz-filter: grayscale(100%);
	    -ms-filter: grayscale(100%);
	    -o-filter: grayscale(100%);
	    filter: grayscale(100%);
	    filter: gray; /* IE6\7\8\9 */
	}
css的兼容方式，已基本能兼容绝大多数浏览器了。只是像IE10这种，向上不支持`grayscale`这个新的属性值，向下又抛弃了兼容旧的`filter`，那这种情况，就需要尝试用JS来兼容啦~

**JS兼容：**

	// 引入james大神的灰度处理脚本
	<script src="http://james.padolsey.com/demos/grayscale/grayscale.js"></script>
	// 调用grayscale方法处理图片
	grayscale(imgNodes); //or 处理整个文档：grayscale(document.body)

实现原理：获取图像的base64数据并对每个像素进行灰度转换;如果是整页处理，会把整个页面生成一张灰度图作为body的background-image。

关于灰度滤镜，想了解更多，可以阅[此文](http://www.zhangxinxu.com/wordpress/2012/08/%E5%B0%8Ftip-%E4%BD%BF%E7%94%A8css%E5%B0%86%E5%9B%BE%E7%89%87%E8%BD%AC%E6%8D%A2%E6%88%90%E9%BB%91%E7%99%BD%E7%9A%84/)。

## 认识filter ##
CSS滤镜属性，可以在元素呈现之前，为元素的渲染提供一些效果，如模糊、颜色转移之类的。滤镜常用于调整图像、背景、边框的渲染。目前`Filter Effects Module`还只是W3C的一个草案，浏览器还不完全支持，在使用时需要加浏览器前缀。


#### filter语法 ####
	
	/* 设置滤镜函数（可多个，空格分开） */
	filter: <filter-function> [<filter-function>]* | none
	/* 引入定义了filter效果的svg资源，且可设置特定id的效果 */
	filter: url(svg-url#element-id)

以上的语法，展示了设置filter属性的方式。 filter标准定义了一些已实现预设效果的函数（如`grayscale`、`blur`等）。你也可以自定义特效，将设置了SVG滤镜的xml文件，用URL引入，且可以包含一个锚点来指定一个具体的滤镜效果。filter属性**默认值**为none,可应用于图像和容器元素，没有继承性。


- 预置的滤镜函数（filter-function）有：

		<filter-function> = <blur()> | <brightness()> | <contrast()> | <drop-shadow()>
		| <grayscale()> | <hue-rotate()> | <invert()> | <opacity()> | <sepia()> | <saturate()>

	filter属性可接受多个滤镜函数，展示多个滤镜叠加后的效果。

- URL函数引入svg滤镜

	SVG滤镜资源（[SVG Filter Sources](http://www.w3.org/TR/filter-effects-1/#FilterElement)）是指以xml文件格式定义的svg滤镜效果集，可以通过URL引入并且通过锚点（#element-id）指定具体的一个滤镜元素。如：

        <?xml version="1.0" encoding="utf-8"?>
    	<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    	<svg version="1.1" 
	     xmlns="http://www.w3.org/2000/svg"
	     xmlns:xlink="http://www.w3.org/1999/xlink"
	     xmlns:ev="http://www.w3.org/2001/xml-events" 
	     baseProfile="full">	 
	    	<defs>
				<!-- 此处定义滤镜 -->
		    	<filter id="blur">
					<feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur"/>
      				<feOffset in="blur" dx="4" dy="4" result="offsetBlur"/>
		    	</filter>
	    	</defs>
    	</svg>
想要应用此svg文件中定义的滤镜效果，只需url引入该文件（可设#blur锚点）作为filter属性的值就可以了。其中`feGaussianBlur`、`feOffset`称之为**filter primitive**（去W3C[了解更多](http://www.w3.org/TR/filter-effects-1/#FilterElement)的滤镜图元）。

## 更多filter特效 ##
除了上面所述的`grayscale`，灰度滤镜外，还有很多预设的滤镜特效，即`filter-function`，一起来了解下~

- blur()

	给图像设置高斯模糊。参数值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起， 所以值越大越模糊；如果没有设定值，则默认是0；这个参数可设置css长度值，但不接受百分比值。

		filter: blur(5px);
		<!-- 对应的filter primitive -->
		<feGaussianBlur in="SourceGraphic" stdDeviation="5"/>

 	![](https://raw.githubusercontent.com/lzf0402/css-filter/master/demo/show2.png)

	高斯模糊还是它的应用场景的，许多设计师追求的**毛玻璃**效果就可以靠它来实现了。结合css3的transition（or animation)或者js动态改变style.**webkitFilter**的值，就可以实现从清晰到模糊的一些交互效果。

- brightness()
	
	给图片应用一种线性乘法，使其看起来更亮或更暗。如果值是0%，图像会全黑。值是100%，则图像无变化。其他的值对应线性乘数效果。值超过100%也是可以的，图像会比原来更亮。如果没有设定值，默认是1。

		filter: brightness(0.5);
		<!-- 对应的filter primitive -->
		<feComponentTransfer>
	        <feFuncR type="linear" slope="[amount]"/>
	        <feFuncG type="linear" slope="[amount]"/>
	        <feFuncB type="linear" slope="[amount]"/>
	    </feComponentTransfer>	
 	![](https://raw.githubusercontent.com/lzf0402/css-filter/master/demo/show3.png)
	
	上述代码可以使图片比原来暗50%，如果参数设为2或200%，则会比原来亮1倍。

- invert()
	反转输入图像。值定义转换的比例。值100%代表完全反转。值为0%则图像无变化。值在0%和100%之间，则是效果的线性乘子。 若值未设置，值默认是0。

		filter: invert(100%);
 	![](https://raw.githubusercontent.com/lzf0402/css-filter/master/demo/show4.png)

- opacity()
	转化图像的透明程度。值定义转换的比例。值为0%则是完全透明，值为100%则图像无变化。值在0%和100%之间，则是效果的线性乘子，也相当于图像样本乘以数量。 若值未设置，值默认是1。该函数与已有的opacity属性很相似，不同之处在于通过filter，一些浏览器为了提升性能会提供硬件加速。

		filter: opacity(20%);
 	![](https://raw.githubusercontent.com/lzf0402/css-filter/master/demo/show5.png)

- 其他

	除了以上的滤镜效果外，还有`contrast()`【调整图像对比度】、drop-shadow()【设置图像阴影】、hue-rotate()【给图像应用色相旋转】、saturate()【转换图像饱和度】、sepia()【将图像转换为深褐色】，可以在此[查看完整demo](http://sandbox.runjs.cn/show/ichzytmc)。

- 复合函数

	你可以组合任意数量的函数来控制渲染。下面的例子同时调整了图像的对比度和亮度：

		filter: contrast(175%) brightness(3%);
 

【参考资料】

- [http://www.w3.org/TR/filter-effects-1/](http://www.w3.org/TR/filter-effects-1/)
- [http://www.zhangxinxu.com/wordpress/2013/11/%E5%B0%8Ftip-%E4%BD%BF%E7%94%A8css%E5%B0%86%E5%9B%BE%E7%89%87%E8%BD%AC%E6%8D%A2%E6%88%90%E6%A8%A1%E7%B3%8A%E6%AF%9B%E7%8E%BB%E7%92%83%E6%95%88%E6%9E%9C/](http://www.zhangxinxu.com/wordpress/2013/11/%E5%B0%8Ftip-%E4%BD%BF%E7%94%A8css%E5%B0%86%E5%9B%BE%E7%89%87%E8%BD%AC%E6%8D%A2%E6%88%90%E6%A8%A1%E7%B3%8A%E6%AF%9B%E7%8E%BB%E7%92%83%E6%95%88%E6%9E%9C/)
- [http://css-tricks.com/almanac/properties/f/filter/](http://css-tricks.com/almanac/properties/f/filter/)
- [http://www.w3cplus.com/css3/ten-effects-with-css3-filter](http://www.w3cplus.com/css3/ten-effects-with-css3-filter)