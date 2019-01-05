import { EXP } from '@/data/DATA';

export interface IMonster {
  name: string;
  size: string;
  type: string;
  alignment: string;
  ac: number;
  hp: number;
  mv: string;
  ability: number[];
  exp: number;
  attributes: string[];
  actions: string[];
  specials: string[];
}

function modify(ability: number) {
  return Math.floor((ability - 10) / 2);
}

export class Monster implements IMonster {
  public name: string;
  public size: string;
  public type: string;
  public alignment: string;
  public ac: number;
  public hp: number;
  public mv: string;
  public ability: number[];
  public exp: number;
  public attributes: string[];
  public actions: string[];
  public specials: string[];
  public num: number;

  constructor(init: IMonster, num: number) {
    this.name = init.name;
    this.size = init.size;
    this.type = init.type;
    this.alignment = init.alignment;
    this.ac = init.ac;
    this.hp = init.hp;
    this.mv = init.mv;
    this.ability = init.ability;
    this.exp = init.exp;
    this.attributes = init.attributes;
    this.actions = init.actions;
    this.specials = init.specials;
    this.num = num;
  }

  public get totalExp(): number {
    return this.num * this.exp;
  }
  public get cr(): string | undefined {
    return EXP.lookupUnder(this.exp);
  }
  public abilityString(i: number): string {
    const ability = this.ability[i];
    if (ability >= 10) {
      return `${ability}(+${modify(ability)})`;
    } else {
      return `${ability}(${modify(ability)})`;
    }
  }
}
