"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(name, sound) {
        this._name = name;
        this._sound = sound;
    }
    Object.defineProperty(Animal.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "sound", {
        get: function () {
            return this._sound;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
exports.Animal = Animal;
