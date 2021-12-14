export class Music {
    private _musicLevel : number = 0;
    private _oldMusicLevel : number = 50;

    get level(): number {
        return this._musicLevel;
    }

    set level(value: number) {
        this._musicLevel = value;
        this._oldMusicLevel = value;
    }

    turnOn() {
        this._musicLevel = this._oldMusicLevel;
    }

    turnOff() {
        this._musicLevel = 0;
    }
}