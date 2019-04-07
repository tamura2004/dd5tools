export default class Ability {

  public static modify(ability: number): number {
    return Math.floor((ability - 10) / 2);
  }

  public static modifyString(ability: number): string {
    const modify = this.modify(ability);
    if (modify > 0) {
      return `+${modify}`;
    } else {
      return `${modify}`;
    }
  }

  public static kanjiName(num: number): string {
    return ['筋力', '敏捷', '耐久', '知力', '判断', '魅力'][num];
  }

  public nums: number[] = [];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  public get description(): string {
    const ret = [];
    for (let i = 0; i < 6; i++) {
      ret.push(`${Ability.kanjiName(this.nums[i])}${this.nums[i]}(${Ability.modifyString(this.nums[i])}`)
    }
    return ret.join();
  }
}
