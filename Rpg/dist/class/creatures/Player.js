import { Creatures } from "./Creatures.js";
export class Player extends Creatures {
    constructor(pseudo, hp, level, enemy, race, strength, dexterity, constitution, intelligence, wisdom, charisma, luck, speed, weapons, armor) {
        super(pseudo, hp, level, enemy, race, strength, dexterity, constitution, intelligence, wisdom, charisma, luck, speed, weapons, armor);
    }
    useSpecialAbility() {
        this.race.specialAbility();
    }
}
