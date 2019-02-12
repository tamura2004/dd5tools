import {
  RACE_ABILITY,
  ARMOR,
} from '@/data/DATA';
import { Weapon } from '@/models/Weapon';

function modify(ability: number): number {
  return Math.floor((ability - 10) / 2);
}

export class Player {
  public name?: string = undefined;
  public characterName?: string = undefined;
  public klass?: string = undefined;
  public level?: number = 1;
  public background?: string = undefined;
  public race?: string = undefined;
  public alignment?: string = undefined;
  public hp?: number = 1;
  public exp?: number = 0;
  public baseAbility: number[] = [];
  public saves: string[] = [];
  public skills: string[] = [];
  public spells: string[] = [];
  public weapon: string[] = [];
  public armor?: string = undefined;
  public memo?: string;
  public avatar?: string = undefined;

  constructor(init: Partial<Player>) {
    Object.assign(this, init);
  }

  public get summary(): string {
    return `${this.characterName}/${this.klass}${this.level}/${this.race}/${this.background}/${this.alignment}`;
  }

  public get ability(): number[] | undefined {
    if (typeof this.race !== 'undefined') {
      const abilityBonus = RACE_ABILITY.get(this.race);
      if (typeof abilityBonus !== 'undefined') {
        return abilityBonus.map((a, i) => a + this.baseAbility[i]);
      }
    }
  }

  public get abilityMod(): string[] | undefined {
    if (typeof this.ability !== 'undefined') {
      return this.ability.map((a) => {
        if (a >= 10) {
          return `+${modify(a)}`;
        } else {
          return `${modify(a)}`;
        }
      });
    }
  }

  public get abilityWithMod(): string[] | undefined {
    if (typeof this.ability !== 'undefined') {
      const ability = this.ability;
      if (typeof this.abilityMod !== 'undefined') {
        const mods = this.abilityMod;
        return this.ability.map((a, i) => `${ability[i]}(${mods[i]})`);
      }
    }
  }

  public get ac(): number {
    let baseAc = 0;
    let mod = 0;
    if (typeof this.armor !== 'undefined') {
      const armor = ARMOR.get(this.armor);
      if (typeof armor !== 'undefined') {
        baseAc = armor.ac;
        if (typeof this.ability !== 'undefined') {
          mod = modify(this.ability[1]);
          if (mod > armor.dexModMax) {
            mod = armor.dexModMax;
          }
          if (mod < armor.dexModMin) {
            mod = armor.dexModMin;
          }
        }
      }
    }
    return baseAc + mod;
  }

  public toHit(weapon: Weapon): number {
    let value = this.baseMod;
    const ability = this.ability;

    if (typeof ability !== 'undefined') {
      const strMod = modify(ability[0]);
      const dexMod = modify(ability[1]);

      if (weapon.category.includes('近接')) {
        if (weapon.special.includes('妙技')) {
          if (strMod < dexMod) {
            value += dexMod;
          } else {
            value += strMod;
          }
        } else {
          value += strMod;
        }
      } else {
        value += dexMod;
      }
    }
    return value;
  }

  public get baseMod(): number {
    if (typeof this.level !== 'undefined') {
      return Math.floor((this.level + 7) / 4);
    } else {
      return 0;
    }
  }

  public rollAbility(): void {
    this.baseAbility = [];
    for (let i = 0; i < 6; i++) {
      this.baseAbility.push(13);
    }
    for (let k = 0; k < 20; k++) {
      const i = Math.floor(Math.random() * 6);
      const j = Math.floor(Math.random() * 6);
      const a = this.baseAbility[i]; // a++
      const b = this.baseAbility[j]; // b--
      if (i !== j && b <= a && a < 18 && 3 < b) {
        this.baseAbility[i]++;
        this.baseAbility[j]--;
      }
    }
  }
}
