export default class Creature {
  public static collectionName: string = 'creatures';

  public sessionId: string | null = null;
  public playerId: string | null = null;
  public monsterId: number | null = null;
  public name!: string;
  public initiative!: number;
  public ac!: number;
  public hp!: number;
  public maxHp!: number;
  public avatar?: string;
  public type!: string;

  constructor(init: Partial<Creature>) {
    Object.assign(this, init);
  }
}
