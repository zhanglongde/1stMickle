构建时预渲染技术
构建时预渲染技术主要实现方式：在编译完成后，启动一个Web Server来运行整个网站，再开启多个无头浏览器去请求所有项目的路由，
当被请求的网页渲染到第一个有意义的渲染时主动抛出一个事件，改事件由无头浏览器截获，
无头浏览器截获后将此事的页面HTML内容保存下来生成一个HTML，最终发布这个HTML
此HTML中包含FMP所需要的所有CSS及DOM结构


