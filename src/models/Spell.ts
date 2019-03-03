export default class Spell {
  public static collectionName: string = 'spells';

  public name?: string;
  public englishName?: string;
  public japaneseName?: string;
  public klass?: string;
  public level?: number;
  public type?: string;
  public castingTime?: string;
  public range?: string;
  public components: string[] = [];
  public duration?: string;
  public description?: string;

  constructor(init: Partial<Spell>) {
    Object.assign(this, init);
  }
}
