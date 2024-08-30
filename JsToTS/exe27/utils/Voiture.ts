export default class Voiture {

    brand: string;
    model: string;
    speed: number;

    constructor(brand: string, model: string, speed: number) {
        this.brand = brand;
        this.model = model;
        this.speed = speed;        
    }

    accelerate() {
        this.speed += 10;
    }

    turn(){
        this.speed -= 5;
    }   

    displaySpeed(): string {
       return `The ${this.brand} ${this.model} is running at ${this.speed} km/h`;
    }
}