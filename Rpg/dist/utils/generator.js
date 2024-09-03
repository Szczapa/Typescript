// src/utils/generator.ts
import { Creatures } from "../class/creatures/Creatures";
import { Elf } from "../class/creatures/Elf";
import { Orc } from "../class/creatures/Orc";
import { Human } from "../class/creatures/Human";
import { Dragon } from "../class/creatures/Dragon";
import { Player } from "../class/creatures/Player";
import { Weapons } from "../class/item/weapon/Weapons";
import { Sword } from "../class/item/weapon/Sword";
import { Axe } from "../class/item/weapon/Axe";
import { Bow } from "../class/item/weapon/Bow";
import { MagicWand } from "../class/item/weapon/MagicWand";
const orcNames = ["Grom", "Thrall", "Durotan", "Garrosh", "Kargath", "Kilrogg", "Gul'dan", "Blackhand", "Ner'zhul", "Orgrim", "Rend", "Maim", "Zuluhed"];
const elfNames = ["Legolas", "Thranduil", "Elrond", "Galadriel", "Arwen", "Celeborn", "Haldir", "Glorfindel", "Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Saruman", "Radagast"];
const humanNames = ["Jacky", "Robert", "Dédé", "Micheline", "Huguette", "Lucienne"];
const dragonNames = ["Smaug", "Drogon", "Rhaegal", "Viserion", "Balerion", "Vhagar", "Meraxes", "Caraxes", "Sunfyre", "Tessarion", "Vermax", "Arrax", "Meleys", "Dreamfyre", "Grey Ghost", "Shrykos", "Morghul", "Stormcloud", "Seasmoke", "Silverwing", "Vermithor", "Cannibal", "Sheepstealer", "Moondancer", "Tyraxes", "Shadowflame", "Ghiscar", "Valryon", "Syrax", "Tyraxes"];
const swordNames = ["Excalibur", "Sting", "Anduril", "Glamdring", "Orcrist", "Narsil", "Herugrim", "Gurthang", "Anglachel", "Sting", "Gurthang", "Glamdring", "Herugrim", "Narsil", "Orcrist", "Anduril", "Excalibur"];
const axeNames = ["Black Cleaver", "Black Cleaver 2", "Black Cleaver 3", "Black Cleaver 4", "Black Cleaver 5", "Black Cleaver 6", "Black Cleaver 7", "Black Cleaver 8", "Black Cleaver 9", "Black Cleaver 10"];
const bowNames = ["Bow", "Bow 2", "Bow 3", "Bow 4", "Bow 5", "Bow 6", "Bow 7", "Bow 8", "Bow 9", "Bow 10"];
const magicNames = ["Magic Wand", "Magic Wand 2", "Magic Wand 3", "Magic Wand 4", "Magic Wand 5", "Magic Wand 6", "Magic Wand 7", "Magic Wand 8", "Magic Wand 9", "Magic Wand 10"];
const getRandomNameAndRace = () => {
    const randomRace = Math.floor(Math.random() * 4) + 1;
    switch (randomRace) {
        case 1:
            return { pseudo: orcNames[Math.floor(Math.random() * orcNames.length)], race: new Orc() };
        case 2:
            return { pseudo: elfNames[Math.floor(Math.random() * elfNames.length)], race: new Elf() };
        case 3:
            return { pseudo: humanNames[Math.floor(Math.random() * humanNames.length)], race: new Human() };
        default:
            return { pseudo: dragonNames[Math.floor(Math.random() * dragonNames.length)], race: new Dragon() };
    }
};
const getRandomNameandType = () => {
    const randomWeapon = Math.floor(Math.random() * 4) + 1;
    switch (randomWeapon) {
        case 1:
            return { itemName: swordNames[Math.floor(Math.random() * swordNames.length)], weaponType: new Sword() };
        case 2:
            return { itemName: axeNames[Math.floor(Math.random() * axeNames.length)], weaponType: new Axe() };
        case 3:
            return { itemName: bowNames[Math.floor(Math.random() * bowNames.length)], weaponType: new Bow() };
        default:
            return { itemName: magicNames[Math.floor(Math.random() * magicNames.length)], weaponType: new MagicWand() };
    }
};
const RandomStats = () => Math.floor(Math.random() * 10) + 1;
const RandomEnemy = () => Math.random() < 0.5;
const RandomGrade = () => Math.random() < 0.5 ? "Common" : "Rare";
const RandomBasedDamage = () => Math.floor(Math.random() * 10) + 1;
const generateCharacter = (isPlayer = false) => {
    const { pseudo, race } = getRandomNameAndRace();
    const hp = 10;
    const level = 1;
    const enemy = !isPlayer && RandomEnemy();
    const speed = RandomStats();
    const strength = RandomStats();
    const intelligence = RandomStats();
    const dexterity = RandomStats();
    const constitution = RandomStats();
    const wisdom = RandomStats();
    const charisma = RandomStats();
    const luck = RandomStats();
    const weapons = [generateWeapon()];
    const armors = [];
    if (isPlayer) {
        return new Player(pseudo, hp, level, false, race, strength, dexterity, constitution, intelligence, wisdom, charisma, luck, speed, weapons, armors);
    }
    else {
        const pnj = new Creatures(pseudo, hp, level, enemy, race, strength, dexterity, constitution, intelligence, wisdom, charisma, luck, speed, weapons, armors);
        Creatures.creatures.push(pnj);
        return pnj;
    }
};
const generateWeapon = () => {
    const { itemName, weaponType } = getRandomNameandType();
    const description = weaponType.description;
    const grade = RandomGrade();
    const damage = RandomBasedDamage() + (weaponType.weaponDamage || 0);
    const doubleHanded = Math.random() < 0.5;
    return new Weapons(itemName, description, grade, weaponType, damage, doubleHanded);
};
// const generateArmor = (): Armor => {
//     // const { itemName, armorType } = getRandomNameandType();
//     // const description = armorType.description;
//     // const grade = RandomGrade();
//     // const armor = RandomBasedDamage()+(armorType.armor || 0);
//     // return new Armor(itemName, description, grade, armorType, armor);
//     return new Armor("Armor", "description",10 , "grade", {armorType: "armor", armor: 10});
// }
const generatePnj = () => {
    return generateCharacter();
};
const generatePlayer = () => {
    return generateCharacter(true);
};
// const generateWeapon = (): Weapons => {
//
// }
//
// const generateArmor = (): Armor => {}
export { generatePnj, generatePlayer, generateWeapon };
