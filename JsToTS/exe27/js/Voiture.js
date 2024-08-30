export default class Voiture {
    constructor(brand, model, speed) {
        this.brand = brand;
        this.model = model;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
    }
    turn() {
        this.speed -= 5;
    }
    displaySpeed() {
        return `The ${this.brand} ${this.model} is running at ${this.speed} km/h`;
    }
}
