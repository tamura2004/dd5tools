export default class List extends Array<number> {
  public lookupOver(n: number): number | undefined {
    let result: number | undefined;
    for (const m of this) {
      if (m <= n) {
        result = m;
      } else {
        break;
      }
    }
    return result;
  }
  public lookupUnder(n: number): number | undefined {
    for (const m of this) {
      if (n <= m) {
        return m;
      }
    }
  }
}
