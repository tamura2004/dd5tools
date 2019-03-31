export default class Npc {
  public static collectionName: string = 'npcs';

  public static form(): Form<Npc> {
    return {
      name: null,
      description: null,
    };
  }

  public static valid(init: Form<Npc>): init is Npc {
    return typeof init.name !== null &&
      init.description !== null;
  }

  public name!: string;
  public description?: string;

  constructor(init: Partial<Npc>) {
    Object.assign(this, init);
  }
}
