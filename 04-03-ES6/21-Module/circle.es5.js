"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.area = area;
exports.circumference = circumference;
/**
 * Created by zhanglongde on 2016/7/27.
 */

function area(radius) {
    return Math.PI * radius * radius;
}

function circumference(radius) {
    return 2 * Math.PI * radius;
}
