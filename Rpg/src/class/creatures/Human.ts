// src/class/creatures/Human.ts
import { Race } from "../../interface/Race.js";

export class Human implements Race {
    raceName: string;
    description: string;

    constructor() {
        this.raceName = "Human";
        this.description = "Un bouffeur de Champignons.";
    }

    specialAbility() {
        console.log("Human special ability activated!");
    }
}