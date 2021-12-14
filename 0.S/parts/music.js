"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Music = void 0;
var Music = /** @class */ (function () {
    function Music() {
        this._musicLevel = 0;
        this._oldMusicLevel = 50;
    }
    Object.defineProperty(Music.prototype, "level", {
        get: function () {
            return this._musicLevel;
        },
        set: function (value) {
            this._musicLevel = value;
            this._oldMusicLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    Music.prototype.turnOn = function () {
        this._musicLevel = this._oldMusicLevel;
    };
    Music.prototype.turnOff = function () {
        this._musicLevel = 0;
    };
    return Music;
}());
exports.Music = Music;
