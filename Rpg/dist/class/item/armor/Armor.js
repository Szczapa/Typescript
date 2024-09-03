import { Items } from "../Items.js";
export class Armor extends Items {
    constructor(name, description, armor, grade, armorType) {
        super(name, grade, description);
        this.armor = armor;
        this.armorType = armorType.armorType;
    }
}
Armor.armors = [];
