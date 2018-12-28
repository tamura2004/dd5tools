export default class Table<T> extends Map<number, T> {
  public lookupOver(n: number): T | undefined {
    let result: T | undefined;
    for (const [key, value] of this) {
      if (n >= key) {
        result = value;
      } else {
        break;
      }
    }
    return result;
  }
  public lookupUnder(n: number): T | undefined {
    for (const [key, value] of this) {
      if (n <= key) {
        return value;
      }
    }
  }
  public lookup(n: number, over: boolean = false): T | undefined {
    if (over) {
      return this.lookupOver(n);
    } else {
      return this.lookupUnder(n);
    }
  }
}

