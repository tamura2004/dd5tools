import { BASE_EXP, Difficulty } from '@/data/DATA';

export default class Party {
  public levelNums: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  public totalExp(diff: Difficulty): number {
    let sum: number = 0;
    this.levelNums.forEach((num, level) => {
      const exp = BASE_EXP.get(level, diff) || 25;
      sum += exp * num;
    });
    return sum;
  }

  public toString(): string {
    let msg = '';
    this.levelNums.forEach((num, level) => {
      msg += `LV${level + 1}(${num});`;
    });
    return msg;
  }
}
