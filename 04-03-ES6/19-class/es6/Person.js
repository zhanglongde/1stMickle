/**
 * Created by zhanglongde on 2016/9/4.
 */

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    say(){
        return `我是${this.name},我今年${this.age}岁了。`;
    }
}

export default Person;