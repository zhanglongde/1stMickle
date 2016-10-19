/**
 * Created by zhanglongde on 2016/9/1.
 */

var vm = new Vue({
    el:'#cart-app',
    computed:{price:function(){
        var price = 0;
        for(var i = 0;i<this.data.length;i++){
            var self = this.data[i];
            price += self.price*self.count;
        }
        return price;
    }},
    data:{
        data:data,
        name:'',
        address:'',
        selectedCommodity:'',
        isPayMoney:false
    },
    methods:{
        add:function(index){
            var count = data[index].count;

            if(count+1 > 10) return false;
            data[index].count++;
        },
        sub:function(index){
            //console.log(index);
            var count = data[index].count;

            if(count-1 < 1) return false;
            data[index].count--;
        },
        remove:function(index){
            //console.log(index);
            data.splice(index,1);
        },
        payMoney:function(){
            this.isPayMoney = !this.isPayMoney;
        },
        searchCommodity:function(){ //也可以考虑过滤器做法
            //console.log(this.selectedCommodity);
            var sc = this.selectedCommodity;
            if(!sc) {
                console.log('illeagal selectedCommodity...');
                return false;
            }

            for(var i = 0,LEN = data.length;i<LEN;i++){
                var item = data[i].name;
                if(sc && (item.indexOf(sc)<0)){
                    //搜索不到，删除该项
                    data.splice(i,1);
                    LEN--;//注意长度也会递减，否则会报错
                    i--;
                }
            }
        }
    }
});