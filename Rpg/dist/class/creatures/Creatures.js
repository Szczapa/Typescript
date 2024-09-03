export class Creatures {
    constructor(pseudo, hp, level, enemy, race, strength, dexterity, constitution, intelligence, wisdom, charisma, luck, speed, weapons, armor) {
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
Creatures.creatures = [];
