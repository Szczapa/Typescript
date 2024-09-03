import { Armor } from "../item/armor/Armor.js";
import { Weapons } from "../item/weapon/Weapons.js";
import { Race } from "../../interface/Race.js";

export class Creatures {
    static creatures: Creatures[] = [];

    pseudo: string;
    hp: number;
    xp: number;
    level: number;
    enemy: boolean;
    armor: Armor[];
    weapon: Weapons[];
    speed: number;
    strength: number;
    intelligence: number;
    dexterity: number;
    constitution: number;
    wisdom: number;
    charisma: number;
    luck: number;
    race: Race;

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
        this.pseudo = pseudo;
        this.hp = hp;
        this.xp = 0;
        this.level = level;
        this.enemy = enemy;
        this.armor = armor;
        this.weapon = weapons;
        this.race = race;


        this.strength = strength + (race.strengthBonus || 0);
        this.dexterity = dexterity + (race.dexterityBonus || 0);
        this.constitution = constitution + (race.constitutionBonus || 0);
        this.intelligence = intelligence + (race.intelligenceBonus || 0);
        this.wisdom = wisdom + (race.wisdomBonus || 0);
        this.charisma = charisma + (race.charismaBonus || 0);
        this.luck = luck;
        this.speed = speed + (race.speedBonus || 0);
    }

    getAllCreatures() {
        return Creatures.creatures;
    }
}
