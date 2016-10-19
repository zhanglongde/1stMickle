'use strict';

var _profile = require('./profile');

var _circle = require('./circle');

var circle = _interopRequireWildcard(_circle);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

foo();

//import {foo} from 'profile'


//import {area,circumference} from './circle';

//console.log('圆面积：' + area(4));
//console.log('圆周长：' + circumference(14));


/**
 * Created by zhanglongde on 2016/7/27.
 */

console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));
