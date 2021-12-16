import {User} from "./ts/user";
import {Admin} from "./ts/admin";

const passwordElement = <HTMLInputElement>document.querySelector('#password');
const typePasswordElement = <HTMLInputElement>document.querySelector('#typePassword');
const typeGoogleElement = <HTMLInputElement>document.querySelector('#typeGoogle');
const typeFacebookElement = <HTMLInputElement>document.querySelector('#typeFacebook');
const loginAsAdminElement = <HTMLInputElement>document.querySelector('#loginAsAdmin');
const resetPasswordElement = <HTMLAnchorElement>document.querySelector('#resetPassword');

let guest = new User("user", 'secret_token_fb', 'secret_token_google');
let admin = new Admin("admin");

document.querySelector('#login-form').addEventListener('submit', (event) => {
    event.preventDefault();

    let user = loginAsAdminElement.checked ? admin : guest;

    debugger;
    console.log(user);

    let auth = false;
    switch(true) {
        case typePasswordElement.checked:
            auth = user.checkPassword(passwordElement.value);
            break;
        case typeGoogleElement.checked:
            if(user=== guest){
                auth = user.checkGoogleLogin('secret_token_google');
            }
            break;
        case typeFacebookElement.checked:
            debugger;
            if(user=== guest){
                auth = user.getFacebookLogin('secret_token_fb');
            }
            break;
    }

    if(auth) {
        alert('login success');
    } else {
        alert('login failed');
    }
});

resetPasswordElement.addEventListener('click', (event) => {
    event.preventDefault();

    let user = loginAsAdminElement.checked ? admin : guest;
    user.resetPassword();
});