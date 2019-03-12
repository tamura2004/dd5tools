import Monster from './Monster';

export default class Template {
  public name!: string;
  public type!: string;
  public alignment!: string;
  public acMod!: number;
  public hpMod!: number;
  public abilityMod!: number[];
  public attributes!: string[];

  constructor(init: Required<Template>) {
    Object.assign(this, init);
  }
}
