export  interface WeaponType {
    weaponType: string;
    description: string;
    weaponDamage?: number;
    specialAbility(): void;
}