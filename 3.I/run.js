"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./ts/user");
var admin_1 = require("./ts/admin");
var passwordElement = document.querySelector('#password');
var typePasswordElement = document.querySelector('#typePassword');
var typeGoogleElement = document.querySelector('#typeGoogle');
var typeFacebookElement = document.querySelector('#typeFacebook');
var loginAsAdminElement = document.querySelector('#loginAsAdmin');
var resetPasswordElement = document.querySelector('#resetPassword');
var guest = new user_1.User("user", 'secret_token_fb', 'secret_token_google');
var admin = new admin_1.Admin("admin");
document.querySelector('#login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var user = loginAsAdminElement.checked ? admin : guest;
    debugger;
    console.log(user);
    var auth = false;
    switch (true) {
        case typePasswordElement.checked:
            auth = user.checkPassword(passwordElement.value);
            break;
        case typeGoogleElement.checked:
            if (user === guest) {
                auth = user.checkGoogleLogin('secret_token_google');
            }
            break;
        case typeFacebookElement.checked:
            debugger;
            if (user === guest) {
                auth = user.getFacebookLogin('secret_token_fb');
            }
            break;
    }
    if (auth) {
        alert('login success');
    }
    else {
        alert('login failed');
    }
});
resetPasswordElement.addEventListener('click', function (event) {
    event.preventDefault();
    var user = loginAsAdminElement.checked ? admin : guest;
    user.resetPassword();
});
