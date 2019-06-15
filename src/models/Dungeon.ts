export default class Dungeon {
  public static collectionName: string = 'dungeons';

  public static form() {
    return {
      name: '',
      description: '',
    };
  }

  public name!: string;
  public description?: string;

  constructor(init: Partial<Dungeon>) {
    Object.assign(this, init);
  }
}
