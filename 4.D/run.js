"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var oven_1 = require("./ts/oven");
var Restaurant = /** @class */ (function () {
    function Restaurant(name, gas) {
        this._name = name;
        this._gas = gas;
    }
    Restaurant.prototype.prepare = function (item) {
        this._gas.lightGas();
        this._gas.cook(item);
        this._gas.extinguishGas();
    };
    return Restaurant;
}());
var bakery = new Restaurant("Bakery", new oven_1.Oven());
bakery.prepare("cookies");
