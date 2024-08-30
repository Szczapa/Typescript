import Voiture from "./Voiture.js";
let car = new Voiture("BMW", "Serie 1", 80);
let car2 = new Voiture("Mercedes", "GLB", 100);
const element = document.getElementById("result");
let run = (vehicle, accNb, turnNb) => {
    for (let i = 0; i < accNb; i++) {
        vehicle.accelerate();
        element.innerHTML += `<p>${vehicle.displaySpeed()}</p>`;
    }
    for (let i = 0; i < turnNb; i++) {
        vehicle.turn();
        element.innerHTML += `<p>${vehicle.displaySpeed()}</p>`;
    }
};
// Example usage
run(car, 3, 0);
run(car2, 2, 2);
