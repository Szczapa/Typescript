import {WeaponType} from "../../../interface/WeaponType";

export class Bow implements WeaponType {

    weaponType: string;
    description: string;

    constructor() {
        this.weaponType = "Bow";
        this.description = "A ranged weapon";
    }

    specialAbility() {
        console.log("Shtoung , Plock")
    }
}