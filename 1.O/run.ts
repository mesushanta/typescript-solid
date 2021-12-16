import {Animal} from "./ts/animal";
import {Zoo} from "./ts/zoo";

let target=<HTMLElement>document.querySelector("#target");

let zoo = new Zoo();
let cat = new Animal('cat', 'meow');
let dog = new Animal('dog', 'bhaw');
let donkey = new Animal('donkey', 'Eeyaawn');

zoo.addAnimal(cat);
zoo.addAnimal(dog);
zoo.addAnimal(donkey);

zoo.animals.forEach((animal: object) => {
    target.innerHTML += (animal.name + ": " + animal.sound + "<br>");
})



