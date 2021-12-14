import {Music} from "./parts/music";
import {Engine} from "./parts/engine";

export class Car {

    private _music : Music;
    private _engine: Engine;
    private _fuel : number = 0;
    private _miles : number = 0;

    private readonly MAXIMUM_FUEL_CAPACITY: number;
    private readonly FUEL_MILEAGE: number = 10;

    constructor(MAXIMUM_FUEL_CAPACITY: number) {
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
        this._music = new Music();
        this._engine = new Engine();
    }

    get fuel(): number {
        return this._fuel;
    }

    addFuel(fuel : number) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }

    get miles(): number {
        return this._miles;
    }

    drive() {
        if(this._engine.status === false || this._fuel <= 0) {
            return;
        }
        this._fuel -= 1;
        this._miles += this.FUEL_MILEAGE;
    }
}