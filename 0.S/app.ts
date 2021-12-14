import {Car} from "./car";

const musicToggleElement = <HTMLElement>document.querySelector('#music-toggle');
const musicSliderElement = <HTMLInputElement>document.querySelector('#music-slider');
const engineToggleElement = <HTMLInputElement>document.querySelector('#engine-toggle');
const addFuelForm = document.querySelector('#add-fuel-form');
const addFuelInput = <HTMLFormElement>document.querySelector('#add-fuel-input');
const fuelLevelElement = <HTMLElement>document.querySelector('#fuel-level');
const milesElement = <HTMLElement>document.querySelector('#miles-value');
const audioElement = <HTMLAudioElement>document.querySelector('#car-music');

let car = new Car(100);

musicToggleElement.addEventListener('click', () => {
    if(car._music.level === 0) {
        car._music.turnOn();
        musicSliderElement.value = car._music.level.toString();
        musicToggleElement.innerText = 'Turn music off';
        return;
    }
    musicToggleElement.innerText = 'Turn music on';
    car._music.turnOff();
});

//I use input instead of change, because then the value changes when I move the mouse, not only on release
musicSliderElement.addEventListener('input', (event) => {
    let target = <HTMLFormElement>(event.target);

    car._music.level = target.value;
    audioElement.volume = car._music.level / 100;

    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = car._music.level ? 'Turn music off' : 'Turn music on';
});

engineToggleElement.addEventListener('click', () => {
    if(car._engine.status) {
        car._engine.turnOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    car._engine.turnOn();
});

addFuelForm.addEventListener('submit', (event) => {
    event.preventDefault();
    car.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car._fuel.toString();
});

setInterval(() => {
    car.drive();

    milesElement.innerText = <string><unknown>(car.miles);
    fuelLevelElement.innerText = car._fuel.toString();

    if(car._music.level === 0) {
        audioElement.pause();
    } else {
        audioElement.play();
    }

}, 1000);