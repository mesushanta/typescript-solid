import {Gas} from "./ts/gas";
import {Oven} from "./ts/oven";

class Restaurant{
    private _name : string;
    private _gas : Gas;

    constructor(name : string, gas : Gas) {
        this._name = name;
        this._gas = gas;
    }

    public prepare(item : string) {
        this._gas.lightGas();
        this._gas.cook(item);
        this._gas.extinguishGas();
    }
}


let bakery = new Restaurant("Bakery",new Oven());
bakery.prepare("cookies");