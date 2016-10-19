/**
 * Created by zhanglongde on 2016/8/4.
 */

(function(){
    function Car(model, year, miles) {
        if (!(this instanceof Car)) {
            console.log("new");
            return new Car(model, year, miles);
        }
        this.model = model;
        this.year = year;
        this.miles = miles;
        this.output = function () {
            return this.model + "走了" + this.miles + "公里";
        }
    }

    var tom = new Car("大叔", 2009, 20000);
    var dudu = Car("Dudu", 2010, 5000);

    console.log(typeof tom); // "object"
    console.log(tom.output()); // "大叔走了20000公里"
    console.log(typeof dudu); // "object"
    console.log(dudu.output()); // "Dudu走了5000公里"


    console.log("--------------------------------------");
    Car();
})();
