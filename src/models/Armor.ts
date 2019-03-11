import BaseCollection from './BaseCollection';

export default class Armor extends BaseCollection {
  public static collectionName: string = 'armors';

  public name!: string;
  public type!: string;
  public price!: string;
  public ac!: number;
  public dexModMax!: number;
  public dexModMin!: number;
  public strReq!: number;
  public hide!: string;
  public weight!: string;

  public get description(): string {
    let msg: string = `${this.type}（${this.price}/${this.weight}）：AC${this.ac}`;
    if (this.dexModMax !== 0) {
      msg += `＋【敏】修正値`;
      if (this.dexModMax !== 99) {
        msg += `（最大${this.dexModMax}）`;
      }
    }
    if (this.hide === '不利') {
      msg += '、隠密：不利';
    }
    return msg;
  }
}
