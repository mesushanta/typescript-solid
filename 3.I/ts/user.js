"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(password, facebookToken, googleToken) {
        this._password = password;
        this._facebookToken = facebookToken;
        this._googleToken = googleToken;
    }
    User.prototype.checkGoogleLogin = function (token) {
        return (token === this._googleToken);
    };
    User.prototype.setGoogleToken = function (token) {
        this._googleToken = token;
    };
    User.prototype.getFacebookLogin = function (token) {
        return (token === this._facebookToken);
    };
    User.prototype.setFacebookToken = function (token) {
        this._facebookToken = token;
    };
    User.prototype.checkPassword = function (password) {
        return (password === this._password);
    };
    User.prototype.resetPassword = function () {
        this._password = prompt('What is your new password?');
    };
    return User;
}());
exports.User = User;
