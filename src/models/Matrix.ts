export default class Matrix extends Array<number[]> {
  public get(y: number, x: number): number | undefined {
    if (this[y] !== undefined) {
      return this[y][x];
    }
  }
}
