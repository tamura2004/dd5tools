import Ability from '@/models/Ability';
import { EXP } from '@/data/ENCOUNTER_DATA';
import Template from './Template';

export default class Monster {
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
    let avatar = '';
    switch (this.type) {
      case '植物':
        avatar = '004-tree-1.png';
        break;
      case 'エレメンタル':
        avatar = '046-genie.png';
        break;
      case '怪物':
        avatar = '034-chimera.png';
        break;
      case '野獣':
        avatar = '024-loch-ness-monster.png';
        break;
      case 'ドラゴン':
        avatar = '042-dragon.png';
        break;
      case '人造':
        avatar = '007-robot.png';
        break;
      case '巨人':
        avatar = '037-cyclops.png';
        break;
      case '粘体':
        avatar = '008-mushroom.png';
        break;
      case '人型生物':
        avatar = '030-goblin.png';
        break;
      case 'アンデッド':
        avatar = '041-zombie.png';
        break;
      case 'フェイ':
        avatar = '016-madre-monte.png';
        break;
      case '異形':
        avatar = '036-hydra.png';
        break;
      case 'セレスチャル':
        avatar = '038-pegasus.png';
        break;
      case 'フィーンド':
        avatar = '012-devil.png';
        break;
    }
    return avatar;
  }
}
