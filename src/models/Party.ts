import { BASE_EXP, Difficulty } from '@/data/DATA';

export default class Party {
  public levelNums: Array<[number, number]>;

  constructor(levelNums: Array<[number, number]> = [[2, 4]]) {
    this.levelNums = levelNums;
  }

  public totalExp(diff: Difficulty): number {
    let sum: number = 0;
    for (const levelNum of this.levelNums) {
      const [level, num] = levelNum;
      if (level !== 0) {
        const exp = BASE_EXP.get(level - 1, diff) || 25;
        sum += exp * num;
      }
    }
    return sum;
  }

  public toString(): string {
    let msg = '';
    for (const [level, num] of this.levelNums) {
      if (level !== 0) {
        msg += `LV${level}(${num});`;
      }
    }
    return msg;
  }
}
