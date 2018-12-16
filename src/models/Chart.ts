export default class Chart<T> {
  public dice: number;
  public records: Array<{no: number, init: Partial<T>}>;

  constructor(records: Array<{no: number, init: Partial<T>}>, dice?: number) {
    this.dice = dice || 20;
    if (records.length === 0 || records[records.length - 1].no !== this.dice) {
      throw new Error(`Bad new chart data, records = ${records}, dice = ${dice}`);
    }
    this.records = records;
  }

  public roll(ctor: {new(init: Partial<T>): T}): T {
    const n = Math.floor(Math.random() * this.dice + 1);
    const record = this.records.find((r) => n <= r.no);
    if (record === undefined) {
      throw new Error('Bad chart');
    } else {
      return new ctor(record.init);
    }
  }
}
