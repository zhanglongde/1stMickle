'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiply = multiply;
/**
 * Created by zhanglongde on 2016/7/27.
 */

// profile.js
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

exports.firstName = firstName;
exports.lastName = lastName;
exports.year = year;
function multiply(x, y) {
  return x * y;
}

function v1() {}
function v2() {}

exports.stream1 = v1;
exports.stream2 = v2;
exports.steamLatestVersion = v2;
var foo = exports.foo = 'bar';
setTimeout(function () {
  return exports.foo = foo = 'baz';
}, 500);
