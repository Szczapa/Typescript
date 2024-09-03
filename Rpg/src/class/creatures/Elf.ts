// src/class/creatures/Elf.ts
import { Race } from "../../interface/Race.js";

export class Elf implements Race {
    raceName: string;
    description: string;
    strengthBonus: number;
    constitutionBonus: number;
    speedBonus: number;

    constructor() {
        this.raceName = "Elf";
        this.description = "Des Abrutis aux oreilles pointues";
        this.strengthBonus = -1;
        this.constitutionBonus = -1;
        this.speedBonus = 2;
    }

    specialAbility() {
        console.log("Elf special ability activated!");
    }
}