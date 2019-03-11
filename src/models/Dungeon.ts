import BaseCollection from './BaseCollection';

export default class Dungeon extends BaseCollection {
  public static collectionName: string = 'dungeons';

  public name!: string;
  public description?: string;
}
