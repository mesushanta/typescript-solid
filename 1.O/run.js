"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("./ts/animal");
var zoo_1 = require("./ts/zoo");
var target = document.querySelector("#target");
var zoo = new zoo_1.Zoo();
var cat = new animal_1.Animal('cat', 'meow');
var dog = new animal_1.Animal('dog', 'bhaw');
var donkey = new animal_1.Animal('donkey', 'Eeyaawn');
zoo.addAnimal(cat);
zoo.addAnimal(dog);
zoo.addAnimal(donkey);
zoo.animals.forEach(function (animal) {
    target.innerHTML += (animal.name + ": " + animal.sound + "<br>");
});
