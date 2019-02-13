export default class Item {
  public name?: string;
  public description?: string;

  constructor(init: Partial<Item>) {
    Object.assign(this, init);
  }
}
