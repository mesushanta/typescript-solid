"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car_1 = require("./car");
var musicToggleElement = document.querySelector('#music-toggle');
var musicSliderElement = document.querySelector('#music-slider');
var engineToggleElement = document.querySelector('#engine-toggle');
var addFuelForm = document.querySelector('#add-fuel-form');
var addFuelInput = document.querySelector('#add-fuel-input');
var fuelLevelElement = document.querySelector('#fuel-level');
var milesElement = document.querySelector('#miles-value');
var audioElement = document.querySelector('#car-music');
var car = new car_1.Car(100);
musicToggleElement.addEventListener('click', function () {
    if (car._music.level === 0) {
        car._music.turnOn();
        musicSliderElement.value = car._music.level.toString();
        musicToggleElement.innerText = 'Turn music off';
        return;
    }
    musicToggleElement.innerText = 'Turn music on';
    car._music.turnOff();
});
//I use input instead of change, because then the value changes when I move the mouse, not only on release
musicSliderElement.addEventListener('input', function (event) {
    var target = (event.target);
    car._music.level = target.value;
    audioElement.volume = car._music.level / 100;
    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = car._music.level ? 'Turn music off' : 'Turn music on';
});
engineToggleElement.addEventListener('click', function () {
    if (car._engine.status) {
        car._engine.turnOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    car._engine.turnOn();
});
addFuelForm.addEventListener('submit', function (event) {
    event.preventDefault();
    car.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car._fuel.toString();
});
setInterval(function () {
    car.drive();
    milesElement.innerText = (car.miles);
    fuelLevelElement.innerText = car._fuel.toString();
    if (car._music.level === 0) {
        audioElement.pause();
    }
    else {
        audioElement.play();
    }
}, 1000);
