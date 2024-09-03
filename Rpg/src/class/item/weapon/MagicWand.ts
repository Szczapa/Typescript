import {WeaponType} from "../../../interface/WeaponType.js";

export class MagicWand implements WeaponType {
    weaponType: string;
    description: string;

    constructor() {
        this.weaponType = "Magic Wand";
        this.description = "A magic weapon";
    }

    specialAbility() {
        console.log("WZZZZZZZzz")
    }
}