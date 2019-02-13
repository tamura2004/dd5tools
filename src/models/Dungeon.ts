export default class Dungeon {
  public name?: string;
  public description?: string;

  constructor(init: Partial<Dungeon>) {
    Object.assign(this, init);
  }
}
