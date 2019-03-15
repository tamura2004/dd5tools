import Ability from '@/models/Ability';
import { EXP } from '@/data/ENCOUNTER_DATA';
import Template from './Template';
import { MODE } from '@/data/ENCOUNTER_DATA';
import { MONSTER_AVATARS } from '@/data/MONSTER_AVATARS';

export default class Monster {
  public mode: MODE | null = null;
  public templateId: number | null = null;
  public id!: number;
  public name!: string;
  public size!: string;
  public type!: string;
  public alignment!: string;
  public ac!: number;
  public maxHp!: number;
  public mv!: string;
  public ability: number[] = [];
  public exp!: number;
  public attributes: string[] = [];
  public actions: string[] = [];
  public specials: string[] = [];
  public num: number | null = null;

  constructor(init: Partial<Monster>) {
    Object.assign(this, init);
  }

  public get cr(): string | undefined {
    return EXP.get(this.exp);
  }

  public abilityString(i: number): string {
    const ability = this.ability[i];
    return `${ability}${Ability.modifyString(ability)}`;
  }

  public add(template: Template): Monster {
    this.name = template.name + '・' + this.name;
    this.type = template.type;
    this.alignment = template.alignment;
    for (let i = 0; i < 6; i++) {
      this.ability[i] += template.abilityMod[i];
    }
    this.ac += template.acMod;
    this.maxHp = Math.floor(this.maxHp * template.hpMod);
    this.attributes = this.attributes.concat(template.attributes);
    return this;
  }

  public get avatar(): string {
    return MONSTER_AVATARS.get(this.type) || '';
  }
}
