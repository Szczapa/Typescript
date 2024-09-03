import {Items} from "../Items.js";
import {WeaponType} from "../../../interface/WeaponType.js";

export class Weapons  extends  Items {
    static weapons: Weapons[] = [];

    weaponType: string;
    damage: number;
    doubleHanded: boolean;


    constructor(itemName: string, description: string, grade: string, weaponType: WeaponType, damage: number, doubleHanded: boolean) {
        super(itemName, description, grade);
        this.weaponType = weaponType.weaponType;
        this.damage = damage + (weaponType.weaponDamage || 0);
        this.doubleHanded = doubleHanded;
    }

    getAllWeapons() {
        return Weapons.weapons;
    }


}






