/**
 * Created by zhanglongde on 2016/7/27.
 */

import {lastName as surname} from './profile';

foo();

//import {foo} from 'profile'


//import {area,circumference} from './circle';

//console.log('圆面积：' + area(4));
//console.log('圆周长：' + circumference(14));


import * as circle from './circle';

console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));