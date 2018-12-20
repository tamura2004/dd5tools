type Table<T> = Array<[number, T]>;

class Chart<T> {
  private dice: number;
  private table: Table<T>;

  constructor(table: Table<T>) {
    this.table = table;
    this.dice = table[table.length - 1][0];
  }

  public roll(): T {
    const n = Math.floor(Math.random() * this.dice + 1);
    for (const row of this.table) {
      if (n <= row[0]) {
        return row[1];
      }
    }
    throw new Error('bad table' + JSON.stringify(this.table));
  }
}

export { Table, Chart };
