export default class Place {
  public static collectionName: string = 'places';

  public name?: string;
  public description?: string;

  constructor(init: Partial<Place>) {
    Object.assign(this, init);
  }
}
