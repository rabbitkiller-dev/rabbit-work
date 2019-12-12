"use strict";
exports.__esModule = true;
// 声明一个装饰器，第三个参数是 "成员的属性描述符"，如果代码输出目标版本(target)小于 ES5 返回值会被忽略。
function validate() {
    return function (target, propertyKey, descriptor) {
        // 保存原来的方法
        var method = descriptor.value;
        // 重写原来的方法
        descriptor.value = function (newValue) {
            // 检查是否是空字符串
            if (!newValue) {
                throw Error('name is invalid');
            }
            else {
                // 否则调用原来的方法
                method();
            }
        };
    };
}
exports.validate = validate;
function validate2(target, propertyKey, descriptor) {
    // 保存原来的方法
    var method = descriptor.value;
    // 重写原来的方法
    descriptor.value = function (newValue) {
        // 检查是否是空字符串
        if (!newValue) {
            throw Error('name is invalid');
        }
        else {
            // 否则调用原来的方法
            method();
        }
    };
}
exports.validate2 = validate2;
