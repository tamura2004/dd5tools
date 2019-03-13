import { ROOMS } from '@/data/ROOMS';
import _ from 'lodash';

export default class Encounter {
  public static collectionName: string = 'encounters';

  public sessionId: string | null = null;
  public level: number = 0;
  public name: string | null = null;
  public room: string | null = null;
  public trap: string | null = null;
  public monster: string | null = null;
  public treasure: string | null = null;

  constructor(init: Partial<Encounter>) {
    this.room = _.sample(ROOMS.get('鉱山')) || null;
    Object.assign(this, init);
  }
}
