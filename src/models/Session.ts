import BaseCollection from '@/models/BaseCollection';

export default class Session extends BaseCollection {
  public static collectionName: string = 'sessions';

  public static form(): Session {
    return new Session({
      name: '',
      dungeonId: '',
      npcId: '',
      purpose: '',
      reward: 0,
      limit: '',
    });
  }

  public name!: string;
  public dungeonId!: string;
  public npcId!: string;
  public purpose!: string;
  public reward!: number;
  public limit!: string;
}
