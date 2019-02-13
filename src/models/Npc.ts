export default class Npc {
  public name?: string;
  public description?: string;

  constructor(init: Partial<Npc>) {
    Object.assign(this, init);
  }
}
