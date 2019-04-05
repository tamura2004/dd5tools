export default class Spell {
  public static collectionName: string = 'spells';

  public static form(): Form<Spell> {
    return {
      name: null,
      klass: null,
      level: null,
      description: null,
    };
  }

  public static valid(init: Form<Spell>): init is Spell {
    return typeof init.name === 'string' &&
      typeof init.klass === 'string' &&
      typeof init.level === 'number';
  }

  public name!: string;
  public klass!: string;
  public level!: number;
  public description?: string;

  constructor(init: Partial<Spell>) {
    Object.assign(this, init);
  }
}
