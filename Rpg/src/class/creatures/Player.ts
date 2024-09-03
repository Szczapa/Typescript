import { Creatures } from "./Creatures.js";
import { Race } from "../../interface/Race.js";
import { Weapons } from "../item/weapon/Weapons.js";
import { Armor } from "../item/armor/Armor.js";

export class Player extends Creatures {
    constructor(
        pseudo: string,
        hp: number,
        level: number,
        enemy: boolean,
        race: Race,
        strength: number,
        dexterity: number,
        constitution: number,
        intelligence: number,
        wisdom: number,
        charisma: number,
        luck: number,
        speed: number,
        weapons: Weapons[],
        armor: Armor[]
    ) {
        super(
            pseudo,
            hp,
            level,
            enemy,
            race,
            strength,
            dexterity,
            constitution,
            intelligence,
            wisdom,
            charisma,
            luck,
            speed,
            weapons,
            armor
        );
    }

    useSpecialAbility() {
        this.race.specialAbility();
    }
}
