/**
 * Created by MMY on 2015/11/25.
 */
var doc = document;
//商品图片显示
var goods = function () {
    var showimg = doc.getElementById("showbigimg"),
        bigimg = doc.getElementById("bigimg"),
        isState = true,//记录鼠标是否在大图上(注意变量不要和函数名重名)
        bigimgs = doc.getElementById("bigimgs"),
        imgdiv = bigimgs.getElementsByTagName("ul")[0],
        imgwidth = bigimgs.getElementsByTagName("img")[0].offsetWidth,
        smallimgs = doc.getElementById("smallimgs"),
        smallLis = smallimgs.getElementsByTagName("li"),
        len = smallLis.length;
    //阻止事件冒泡
    function stopBubble(e) {
        //一般用在鼠标或键盘事件上
        if (e && e.stopPropagation) {
            //W3C取消冒泡事件
            e.stopPropagation();
        } else {
            //IE取消冒泡事件
            e.cancelBubble = true;
        }
    }

    //点击大图显示高清图
    function shoubigimg(event) {
        var e = event || window.event,
            target = e.target || e.srcElement;
        if (target.tagName.toLowerCase() === "img") {
            //显示大图片
            bigimg.src = target.src;
            showimg.style.display = "block";
            stopBubble(e);
        }
    }

    //点击高清图外的区域隐藏图片
    function hiddenimg() {
        if (showimg.style.display != "none" && isState) {
            showimg.style.display = "none";
        }
    }

    //鼠标在高清图上时，isState=false;鼠标在高清图外时，isState=true
    function isout(event) {
        var e = event || window.event,
            type = e.type;
        switch (type) {
            case "mouseover":
                isState = false;
                break;
            case "mouseout":
                isState = true;
        }
    }

    //小图切换大图
    function smallToBig(event) {
        var e = event || window.event,
            target = e.target || e.srcElement,
            tagName = target.tagName.toLowerCase(),
            count = parseInt(target.getAttribute("data-count"));
        currleft = imgwidth * (-count);
        if (tagName === "img") {
            imgdiv.style.left = currleft + "px";
            for (var i = 0; i < len; i++) {
                if (i === count) {
                    smallLis[i].style.borderColor = "#cc6688";
                }
                else {
                    smallLis[i].style.borderColor = "transparent";
                }
            }
        }

    }

    return {
        showimg: shoubigimg,
        hiddenimg: hiddenimg,
        isout: isout,
        smallToBig: smallToBig
    }
}();
//选择尺寸
function selectSize(event) {
    var e = event || window.event,
        target = e.target || e.srcElement,
        pelem = doc.getElementById("size");
    selectSizeorColor(pelem, target);
}
//选择颜色
function selectColor(event) {
    var e = event || window.event,
        target = e.target || e.srcElement,
        pelem = doc.getElementById("color");
    selectSizeorColor(pelem, target);
}
//选择尺寸或颜色
function selectSizeorColor(pelem, elem) {
    var ps = pelem.getElementsByTagName("p");
    len = ps.length;
    for (var i = 0; i < len; i++) {
        ps[i].className = "block";
    }
    elem.className += " blockactive";
}
var check = function () {
    var detail = doc.getElementById("imgtxt"),
        goodname = detail.getElementsByTagName("h2")[0].innerHTML,
        goodprice = detail.getElementsByClassName("price")[0].innerHTML,
        goodsize = doc.getElementById("size"),
        goodcolor = doc.getElementById("color"),
        selectsize, selectcolor,count;
    //验证是否选择
    function validateNull() {
        var ssize = goodsize.getElementsByClassName("blockactive")[0],
            scolor = goodcolor.getElementsByClassName("blockactive")[0];
        if (ssize === undefined || scolor === undefined) {
            alert("请选择尺码或颜色。");
            return false;
        }
        else {
            selectsize = ssize.innerHTML;
            selectcolor = scolor.innerHTML;
            count = doc.getElementById("num").value;
            return true;
        }

    }

    //立即购买
    function buygood() {
        var isselect = validateNull();
        if (isselect) {
            var str = "您购买了如下商品：\n商品名称：" + goodname + "\n商品价格：" + goodprice + "\n商品尺码：" + selectsize + "\n商品颜色：" + selectcolor + "\n商品数量：" + count;
            alert(str);
        }
        else {
            return false;
        }

    }

//加入购物车
    function addgood() {
        var isselect = validateNull();
        if (isselect) {
            var str = "您加入购物车商品如下：\n商品名称：" + goodname + "\n商品价格：" + goodprice + "\n商品尺码：" + selectsize + "\n商品颜色：" + selectcolor + "\n商品数量：" + count;
            alert(str);
        }
        else {
            return false;
        }
    }

    return {
        buy: buygood,
        add: addgood
    }
}();
//上下切换图片
var turnimgs = function () {
    var div = doc.getElementById("rgood"),
        divheight = div.offsetHeight,
        ul = div.getElementsByTagName("ul")[0],
        lis = div.getElementsByTagName("li"),
        len = lis.length,
        varytop = 0,
        page, totalheight;
    if (len % 4 == 0) {
        page = len / 4;
    }
    else {
        page =Math.ceil(len/4);
    }
    totalheight = divheight * (page - 1) * (-1);
    function nextimgs() {
        if (varytop > totalheight) {
            varytop -= divheight;

        }
        else {
            varytop = 0;
        }
        ul.style.top = varytop + "px";
    }

    function previmgs() {
        if (varytop < 0) {
            varytop += divheight;

        }
        else {
            varytop = totalheight;
        }
        ul.style.top = varytop + "px";
    }

    return {
        prev: previmgs,
        next: nextimgs
    }

}();
//点击大图显示高清图
doc.getElementById("bigimgs").addEventListener("click", goods.showimg, false);
//高清图消失
doc.addEventListener("mousedown", goods.hiddenimg, false);
//记录鼠标的状态，用于让大图消失的功能
doc.getElementById("showbigimg").addEventListener("mouseover", goods.isout, false);
doc.getElementById("showbigimg").addEventListener("mouseout", goods.isout, false);
//点击小图显示大图
doc.getElementById("smallimgs").addEventListener("mouseover", goods.smallToBig, false);
//选择尺码
doc.getElementById("size").addEventListener("click", selectSize, false);
//选择颜色
doc.getElementById("color").addEventListener("click", selectColor, false);
//立即购买
doc.getElementById("btnbuy").addEventListener("click", check.buy, false);
//加入购物车
doc.getElementById("btnadd").addEventListener("click", check.add, false);
//上箭头
doc.getElementById("arrtop").addEventListener("click", turnimgs.prev, false);
//下箭头
doc.getElementById("arrbot").addEventListener("click", turnimgs.next, false);