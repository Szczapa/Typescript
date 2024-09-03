// src/interface/Race.ts
export interface Race {
    raceName: string;
    description: string;
    strengthBonus?: number;
    dexterityBonus?: number;
    constitutionBonus?: number;
    intelligenceBonus?: number;
    wisdomBonus?: number;
    charismaBonus?: number;
    speedBonus?: number;
    specialAbility(): void;
}
