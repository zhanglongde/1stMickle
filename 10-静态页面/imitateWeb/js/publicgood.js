/**
 * Created by MMY on 2015/12/2.
 */
var doc = document;
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