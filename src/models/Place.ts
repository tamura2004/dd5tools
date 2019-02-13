export default class Place {
  public name?: string;
  public description?: string;

  constructor(init: Partial<Place>) {
    Object.assign(this, init);
  }
}
