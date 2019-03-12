export default class Weapon {
  public static collectionName: string = 'weapons';

  public name!: string;
  public category!: string;
  public price!: string;
  public damage!: string;
  public type!: string;
  public weight!: string;
  public range!: string;
  public special!: string;

  constructor(init: Partial<Weapon>) {
    Object.assign(this, init);
  }

  public get description(): string {
    let msg: string = `${this.category}：${this.price}/${this.weight}：${this.damage}[${this.type}]`;
    msg += this.rangeString;
    if (this.special !== '') {
      msg += `：${this.special}`;
    }
    return msg;
  }

  public get rangeString(): string {
    if (this.range !== '') {
      return `射程：${this.range}フィート`;
    } else {
      return '';
    }
  }
}
