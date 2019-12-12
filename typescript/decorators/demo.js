"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var class_decorators_1 = require("./class-decorators");
var function_decorators_1 = require("./function-decorators");
function par(a, b, c) {
    console.log('par');
    console.log(a);
    console.log(b);
    console.log(c);
}
var Demo = /** @class */ (function () {
    function Demo() {
        this.name = 'weizhihua';
    }
    Demo.prototype.changeName = function (name) {
        console.log('changeName', name);
        this.name = name;
    };
    __decorate([
        function_decorators_1.validate()
    ], Demo.prototype, "changeName");
    Demo = __decorate([
        class_decorators_1.ClassDecorator()
    ], Demo);
    return Demo;
}());
exports.Demo = Demo;
var demo = new Demo();
demo.changeName('weizhihua');
