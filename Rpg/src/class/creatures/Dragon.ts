import {Creatures} from "./Creatures.js";
import {Race} from "../../interface/Race.js";

export class Dragon implements Race{

    raceName: string;
    description: string;
    strengthBonus: number;
    constitutionBonus: number;
    speedBonus: number;

    constructor() {
        this.raceName = "Dragon";
        this.description = "Un dragon, c'est un peu comme un lézard, mais en plus gros.";
        this.strengthBonus = 2;
        this.constitutionBonus = 2;
        this.speedBonus = 1;
    }


    specialAbility(): void {
        console.log("Holala un briquet géant !");
    }
}


