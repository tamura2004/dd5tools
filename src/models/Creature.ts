export default class Creature {
  public static collectionName: string = 'creatures';

  public sessionId: string | null = null;
  public encounterId: string | null = null;
  public playerId: string | null = null;
  public monsterId: number | null = null;
  public templateId: number | null = null;
  public initiative!: number;
  public hp!: number;

  constructor(init: Partial<Creature>) {
    Object.assign(this, init);
  }
}
