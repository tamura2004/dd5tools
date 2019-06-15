import ARMOR_DATA from '@/data/ARMOR_DATA';
import RACE_ABILITY from '@/data/RACE_ABILITY';
import Armor from './Armor';

function modify(ability: number): number {
  return Math.floor((ability - 10) / 2);
}

export default class Player {
  public static collectionName: string = 'players';

  public static form() {
    return {
      playerName: '',
      characterName: '',
      klass: '',
      background: '',
      race: '',
      alignment: '',
      maxHp: 10,
      hp: 10,
      guildId: '',
      baseAbility: [10, 10, 10, 10, 10, 10],
      saves: [],
      skills: [],
      spells: [],
      weapon: [],
      armor: '',
      memo: '',
      avatar: '',
      gold: 0,
      languages: [],
    };
  }

  public playerName!: string;
  public characterName!: string;
  public klass!: string;
  public background!: string;
  public race!: string;
  public alignment!: string;
  public maxHp!: number;
  public hp!: number;
  public guildId!: string;
  public baseAbility!: number[];
  public saves!: string[];
  public skills!: string[];
  public spells!: string[];
  public weapon!: string[];
  public armor!: string;
  public memo!: string;
  public avatar!: string;
  public gold!: number;
  public languages!: string[];

  constructor(init: Partial<Player>) {
    Object.assign(this, init);
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
}
