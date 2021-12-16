import {AdminAuth} from "./adminAuth";
import {FacebookAuth} from "./facebookAuth";
import {GoogleAuth} from "./googleAuth";

export class User implements AdminAuth., FacebookAuth, GoogleAuth{
    private _password : string;
    private _facebookToken : string;
    private _googleToken : string;

    constructor(password: string, facebookToken: string, googleToken: string) {
        this._password = password;
        this._facebookToken = facebookToken;
        this._googleToken = googleToken;
    }

    checkGoogleLogin(token) {

        return (token === this._googleToken);
    }

    setGoogleToken(token : string) {
        this._googleToken = token;
    }

    getFacebookLogin(token) {
        return (token === this._facebookToken);
    }

    setFacebookToken(token : string) {
        this._facebookToken = token;
    }

    checkPassword(password: string) : boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}