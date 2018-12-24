import { baseExp, Difficulty } from '@/data/DATA';

export default class Party {
  public levelNums: Array<[number, number]>;

  constructor(levelNums: Array<[number, number]> = [[2, 4]]) {
    this.levelNums = levelNums;
  }

  public totalExp(diff: Difficulty): number {
    let sum: number = 0;
    for (const levelNum of this.levelNums) {
      sum += baseExp(levelNum[0], diff) * levelNum[1];
    }
    return sum;
  }
}
