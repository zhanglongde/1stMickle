// 对一维数组，根据 type 类型分组成二维数组

function groupList(list) {
    if (!Array.isArray(list) || list.length === 0) { return []; }

    var validItems = getValidItems(list);
    var result = {};

    validItems.forEach(function (item) {
        if (result.hasOwnProperty(item.type)) {
            result[item.type].push(item.content);
        } else {
            result[item.type] = [];
            result[item.type].push(item.content);
        }
    });

    return jsonResultGenerator(result);
}

function getValidItems(json) {
    return json.filter(function (element) {
        return isPureObject(element) && element.type && element.content;
    });
}

function isPureObject(item) {
    return Object.prototype.toString.call(item).slice(8, -1) === 'Object' && item !== null ? true : false;
}

function jsonResultGenerator(obj) {
    var result = [];

    Object.keys(obj).forEach(function (key) {
        result.push({ type: key, contents: obj[key] });
    });

    return result;
}

// test
var input = [null, 2, "test", undefined, {
    "type": "product",
    "content": "product1"
},  {
    "type": "product",
    "content": "product2"
},  {
    "type": "tag",
    "content": "tag1"
}, {
    "type": "product",
    "content": "product3"
}, {
    "type": "tag",
    "content": "tag2"
}];

console.log(JSON.stringify(groupList(input)));