import { ROOMS } from '@/data/ROOMS';
import _ from 'lodash';
import { chooseTrap } from '@/data/TRAP';

export default class Encounter {
  public static collectionName: string = 'encounters';

  public sessionId: string | null = null;
  public level: number = 0;
  public room: string | null = null;
  public trap: string | null = null;
  public monsterId: number | null = null;
  public templateId: number | null = null;

  constructor(init: Partial<Encounter>) {
    this.room = _.sample(ROOMS.get('鉱山')) || null;
    this.trap = chooseTrap();
    Object.assign(this, init);
  }
}
