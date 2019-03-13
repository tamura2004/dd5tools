export default class Log {
  public static collectionName = 'logs';

  public sessionId: string | null = null;
  public encounterId: string | null = null;
  public message: string | null = null;

  constructor(init: Partial<Log>) {
    Object.assign(this, init);
  }
}
