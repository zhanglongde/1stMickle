/**
 * Created by zhanglongde on 2016/8/4.
 */

(function(){

    function Car(model,year,miles){
        this.model = model;
        this.year = year;
        this.miles = miles;
    }

    //多个Car对象实例可以共享同一个原型
    Car.prototype.output = function(){
        return this.model+"走了"+this.miles+"公里";
    };

    var tom = new Car("大叔",2009,2000);
    var dudu = new Car("dudu",2010,5000);

    console.log(tom.output());
    console.log(dudu.output());
})();
