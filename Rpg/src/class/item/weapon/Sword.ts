import {WeaponType} from "../../../interface/WeaponType.js";

export class Sword implements WeaponType {
    weaponType: string;
    description: string;

    constructor() {
        this.weaponType = "Sword";
        this.description = "A melee weapon";
    }

    specialAbility() {
        console.log("Swuuush , Clang, cling")
    }
}