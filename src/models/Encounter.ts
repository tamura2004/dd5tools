export default class Encounter {
  public static collectionName: string = 'encounters';

  public sessionId: string | null = null;
  public name: string | null = null;
  public room: string | null = null;
  public trap: string | null = null;
  public monster: string | null = null;
  public treasure: string | null = null;

  constructor(init: Partial<Encounter>) {
    Object.assign(this, init);
  }
}
