import MonsterInfo from '@/models/MonsterInfo';
import { MountOptions } from '@vue/test-utils';

export default class Monster {
  public name?: string;
  public size?: string;
  public type?: string;
  public alignment?: string;
  public mv?: string;
  public maxHp?: number;
  public ac?: number;
  public exp?: number;
  public ability: number[] = [];
  public attributes: string[] = [];
  public actions: string[] = [];
  public specials: string[] = [];

  public hp?: number;
  public initiative?: number;
  public gold?: number;

  constructor(info: MonsterInfo, template?: MonsterInfo) {
    Object.assign(this, info);

    if (template === undefined) {
      return;
    }

    // change name
    this.name = template.name + '・' + this.name;

    // overwitten attributes by template
    this.size = template.size || this.size;
    this.type = template.type || this.type;
    this.alignment = template.alignment || this.alignment;
    this.mv = template.mv || this.mv;

    // adjust attributes by template
    const { maxHp, ac } = template;
    if (maxHp !== undefined && this.maxHp !== undefined) {
      this.maxHp = Math.floor(this.maxHp * maxHp);
    }
    if (ac !== undefined && this.ac !== undefined) {
      this.ac += ac;
    }

    // adujust abilities by template
    const { ability } = template;
    for (let i = 0; i < 6; i++) {
      this.ability[i] += ability[i];
    }

    // add attributes by template
    this.attributes = this.attributes.concat(template.attributes);
    this.actions = this.actions.concat(template.actions);
    this.specials = this.specials.concat(template.specials);
  }
}
