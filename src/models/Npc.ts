import BaseCollection from './BaseCollection';

export default class Npc extends BaseCollection {
  public static collectionName: string = 'npcs';

  public name!: string;
  public description?: string;
}
