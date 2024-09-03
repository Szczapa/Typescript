export class Orc {
    constructor() {
        this.raceName = "Orc";
        this.description = "C'est vert et moche.";
        this.strengthBonus = 2;
        this.constitutionBonus = 1;
        this.speedBonus = -1;
    }
    specialAbility() {
        console.log("Orc special ability activated!");
    }
}
