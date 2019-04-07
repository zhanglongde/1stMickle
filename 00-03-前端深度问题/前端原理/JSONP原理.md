[JSON原理](https://tonghuashuo.github.io/blog/jsonp.html)
JSON with Padding，这里的 Padding 指的就是包裹在 JSON 外层的回调函数
服务端返回的是字符串，字符串的内容是一个函数调用，实参即为JSON
我们可以在前端先定义好函数，当然函数定义由前端决定
当带有JSONP字符串通过script标签动态添加到页面中时，即执行了前端定义的函数


AJAX 无法跨域是受到“**同源政策**”的限制，但是**带有src属性的标签**（例如 <script>、<img>、<iframe>）是不受该政策限制的，
因此我们可以通过**向页面中动态添加<script>标签来完成对跨域资源的访问**，这也是 JSONP 方案最核心的原理。

通常我们使用<script>都是引用的静态资源（主要是 js 文件），其实它也可以用来引用动态资源（php、jsp、aspx等），
后台服务被访问后返回一个“JavaScript函数调用”形式的字符串，由于是字符串，因此在后台的时候不会起到任何作用，
但到了前台，放入<script>标签之内，就成了一个合法的 JavaScript 函数调用，实参是我们真正需要的数据，被调用的回调函数也已经实现了，因此就会顺利的被调用。




jQuery AJAX
JSONP不是AJAX，jQuery封装得更像AJAX
跨域的问题是在 AJAX 中遇到的，受惯性思维影响我们自然首先会从 AJAX 的角度去寻求解决方案，
因此 jQuery 才把 JSONP 封装到了$.ajax()的配置项中