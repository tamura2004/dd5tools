import Weapon from '@/models/Weapon';
import ARMOR_DATA from '@/data/ARMOR_DATA';
import RACE_ABILITY from '@/data/RACE_ABILITY';
import Armor from './Armor';
import { expToLevel } from '@/data/EXP';

function modify(ability: number): number {
  return Math.floor((ability - 10) / 2);
}

export default class Player {
  public static collectionName: string = 'players';

  public static form() {
    return {
      name: '',
      characterName: '',
      klass: '',
      background: '',
      race: '',
      alignment: '',
      level: 5,
      maxHp: 10,
      hp: 10,
      exp: 7000,
      baseAbility: [10, 10, 10, 10, 10, 10],
      saves: [],
      skills: [],
      spells: [],
      weapon: [],
      armor: '',
      memo: '',
      avatar: '',
      gold: 0,
    };
  }

  public name: string | null = null;
  public characterName: string | null = null;
  public klass: string | null = null;
  public level: number | null = null;
  public background: string | null = null;
  public race: string | null = null;
  public alignment: string | null = null;
  public maxHp: number | null = null;
  public hp: number | null = null;
  public exp: number | null = null;
  public baseAbility: number[] = [];
  public saves?: string[] = [];
  public skills?: string[] = [];
  public spells?: string[] = [];
  public weapon: string[] = [];
  public armor: string | null = null;
  public memo: string | null = null;
  public avatar: string | null = null;
  public gold: number | null = null;

  constructor(init: Partial<Player>) {
    Object.assign(this, init);
    if (this.exp !== null) {
      this.level = expToLevel(this.exp);
    }
  }

  public get summary(): string {
    return `${this.characterName}/${this.klass}${this.level}/${this.race}/${this.background}/${this.alignment}`;
  }

  public get ability(): number[] | undefined {
    if (this.race !== null) {
      const abilityBonus = RACE_ABILITY.get(this.race);
      if (typeof abilityBonus !== 'undefined') {
        return abilityBonus.map((a, i) => a + this.baseAbility[i]);
      }
    }
  }

  public get abilityMod(): string[] | undefined {
    if (this.ability !== undefined) {
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
    let baseAc = 10;
    let mod = 0;
    if (typeof this.armor !== 'undefined') {
      const armorIinit = ARMOR_DATA.find((init: Partial<Armor>) => init.name === this.armor);
      if (armorIinit !== undefined) {
        const armor = new Armor(armorIinit);
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

  public get rank(): string | undefined {
    const rankMap = new Map<number, string>([
      [1, 'G'],
      [2, 'F'],
      [3, 'E'],
      [4, 'D'],
      [5, 'C'],
      [6, 'B'],
      [7, 'A'],
      [8, 'S'],
      [9, 'SS'],
      [10, 'SSS'],
    ]);

    if (this.level !== null) {
      return rankMap.get(this.level);
    }
  }
}
