export default class BaseCollection {
  public static collectionName: string;

  public static from(inits: Array<Partial<BaseCollection>>): BaseCollection[] {
    return inits.map((init: Partial<BaseCollection>) => {
      return new BaseCollection(init);
    });
  }

  constructor(init: Partial<BaseCollection>) {
    Object.assign(this, init);
  }
}
