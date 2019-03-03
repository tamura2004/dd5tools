export default class Item {
  public static collectionName: string = 'items';

  public name?: string;
  public description?: string;

  constructor(init: Partial<Item>) {
    Object.assign(this, init);
  }
}
