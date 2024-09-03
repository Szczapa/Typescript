export class Elf {
    constructor() {
        this.raceName = "Elf";
        this.description = "Des Abrutis aux oreilles pointues";
        this.strengthBonus = -1;
        this.constitutionBonus = -1;
        this.speedBonus = 2;
    }
    specialAbility() {
        console.log("Elf special ability activated!");
    }
}
