"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
require("reflect-metadata");
function vi(a, b) {
    console.log(a);
    console.log(b);
}
function linux(a) {
}
function par(a, b, c) {
}
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    __decorate([
        vi
    ], Demo.prototype, "name");
    __decorate([
        __param(0, par)
    ], Demo.prototype, "setName");
    Demo = __decorate([
        linux
    ], Demo);
    return Demo;
}());
exports.Demo = Demo;
var demo = new Demo();
// console.log(Reflect.getMetadataKeys(demo));
