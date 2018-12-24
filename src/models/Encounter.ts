import Party from '@/models/Party';
import Monster from '@/models/Monster';
import { Difficulty, numModify, findExp, randomMonster } from '@/data/DATA';

export default class Encounter {

  public party: Party;
  public diff: Difficulty;

  constructor(party: Party, diff: Difficulty) {
    this.party = party;
    this.diff = diff;
  }
  public monster(): Monster {
    const num = this.monsterNum();
    const modify = numModify(num);
    const unitExp = this.party.totalExp(this.diff) / modify / num;
    const exp = findExp(unitExp);
    const [name, data]: [string, number[]] = randomMonster(exp);
    return new Monster(name, data, num);
  }
  private maxNumber(): number {
    return Math.floor(this.party.totalExp(this.diff) / 25);
  }
  private monsterNum(): number {
    return Math.floor(Math.random() * this.maxNumber() + 1);
  }
}
