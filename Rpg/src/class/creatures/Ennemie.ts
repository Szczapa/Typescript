// src/class/creatures/Player.ts
import {Creatures} from "./Creatures.js";

export class Ennemie extends Creatures {

    SelectRandomEnnemie(){
        let random = Math.floor(Math.random() * Creatures.creatures.length);
        return Creatures.creatures[random];
    }
}



