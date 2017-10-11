function PageChange(){
    var html = document.documentElement;
    var windowWidth = html.clientWidth;
    console.log(windowWidth)
    //      html.style.fontSize = windowWidth/6.4+'px' // iphone5
    // html.style.fontSize = windowWidth/7.5+'px' // iphone6
    html.style.fontSize = windowWidth/4.14+'px'  // iphone6 plus
}
(function() {
    document.addEventListener('DOMContentLoaded', PageChange)
    document.addEventListener('resize', PageChange)
})();
