import {WeaponType} from "../../../interface/WeaponType.js";

export class Axe implements WeaponType {
    weaponType: string;
    description: string;

    constructor() {
        this.weaponType = "Axe";
        this.description = "A melee weapon";
    }

    specialAbility() {
        console.log("Scroutch")
    }
}