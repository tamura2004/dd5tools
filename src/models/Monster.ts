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
    const { size, type, alignment, mv } = template;
    Object.assign(this, { size, type, alignment, mv });

    // adjust attributes by template
    const { maxHp, ac } = template;
    if (maxHp !== undefined && this.maxHp !== undefined) {
      this.maxHp += maxHp;
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
    const {attributes, actions, specials } = template;
    if (attributes !== undefined && attributes.length > 0) {
      attributes.forEach((attribute) => {
        this.attributes.push(attribute);
      });
    }
    if (actions !== undefined && actions.length > 0) {
      actions.forEach((action) => {
        this.actions.push(action);
      });
    }
    if (specials !== undefined && specials.length > 0) {
      specials.forEach((special) => {
        this.specials.push(special);
      });
    }
  }
}