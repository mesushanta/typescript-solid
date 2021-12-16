export class Animal {
    private _name: string;
    private _sound: string;

    public constructor(name: string, sound: string) {
        this._name = name;
        this._sound = sound;
    }

    get name() {
        return this._name;
    }
    get sound() {
        return this._sound;
    }
}