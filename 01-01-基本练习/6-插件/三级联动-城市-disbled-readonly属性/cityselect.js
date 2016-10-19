$(function () {
    console.log("city select init...");
    var current_user = MyTool.getCurrentUser();
    if (current_user === null)
        return;
    var type = current_user.user_type;

    if (type === '1' || type === '4') { //person or admin
        $("#person_city_select").citySelect({
            url: "/assets/data/city.min.js"
            , prov: "浙江"
            , city: "杭州"
            , dist: "拱墅区"
            , nodata: "none"
            , required:true
        });
    } else if ((type === '2') || (type === '3')) {
        $("#corp_city_select").citySelect({
            url: "/assets/data/city.min.js"
            , prov: "浙江"
            , city: "杭州"
            , dist: "拱墅区"
            , nodata: "none"
            , required:true
        });
    } else {
        console.log("imnormal user type!");
    }

});