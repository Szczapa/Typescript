import { Items } from "../Items.js";
export class Weapons extends Items {
    constructor(itemName, description, grade, weaponType, damage, doubleHanded) {
        super(itemName, description, grade);
        this.weaponType = weaponType.weaponType;
        this.damage = damage + (weaponType.weaponDamage || 0);
        this.doubleHanded = doubleHanded;
    }
    getAllWeapons() {
        return Weapons.weapons;
    }
}
Weapons.weapons = [];
