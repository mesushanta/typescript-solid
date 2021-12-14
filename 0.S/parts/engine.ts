export class Engine {
    private _engineStatus: boolean = false;

    get status(): boolean {
        return this._engineStatus;
    }

    turnOn() {
        this._engineStatus = true;
    }

    turnOff() {
        this._engineStatus = false;
    }
}