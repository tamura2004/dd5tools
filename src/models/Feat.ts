export default class Feat {
  public static collectionName = 'feats';

  public static valid(init: any): init is Feat {
    return typeof init.playerId === 'string' &&
      typeof init.name === 'string' &&
      typeof init.num === 'number';
  }

  public playerId!: string;
  public name!: string;
  public num!: number;

  constructor(init: any) {
    if (Feat.valid(init)) {
      Object.assign(this, init);
    } else {
      alert(`bad feat init: ${JSON.stringify(init)}`);
    }
  }
}