import {Items} from "../Items.js";
import {ArmorType} from "../../../interface/ArmorType.js";

export class Armor extends Items {
    static armors: Armor[] = [];
    armorType: string;
    armor: number;
    constructor(name: string,description: string , armor: number,grade: string,armorType: ArmorType) {
        super(name,grade,description);
        this.armor = armor;
        this.armorType = armorType.armorType;
    }
}



