// src/class/creatures/Orc.ts
import { Race } from "../../interface/Race.js";

export class Orc implements Race {
    raceName: string;
    description: string;
    strengthBonus: number;
    constitutionBonus: number;
    speedBonus: number;

    constructor() {
        this.raceName = "Orc";
        this.description = "C'est vert et moche.";
        this.strengthBonus = 2;
        this.constitutionBonus = 1;
        this.speedBonus = -1;
    }

    specialAbility() {
        console.log("Orc special ability activated!");
    }
}
