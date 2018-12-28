import Party from '@/models/Party';
import Monster from '@/models/Monster';
import Table from '@/models/Table';
import { Difficulty, findExp, randomMonster } from '@/data/DATA';

const NUM_MODIFY = new Table([[1, 1], [2, 1.5], [3, 2], [7, 2.5], [11, 3], [15, 4]]);

export default class Encounter {

  public party: Party;
  public diff: Difficulty;

  constructor(party: Party, diff: Difficulty) {
    this.party = party;
    this.diff = diff;
  }
  public monster(): Monster {
    const num = this.monsterNum();
    const modify = NUM_MODIFY.lookupOver(num) || 1;
    const unitExp = this.party.totalExp(this.diff) / modify / num;
    const exp = findExp(unitExp);
    const [name, data]: [string, number[]] = randomMonster(exp);
    return new Monster(name, data, num);
  }
  private monsterNum(): number {
    return Math.floor(Math.random() * this.maxNumber() + 1);
  }
  private maxNumber(): number {
    const total = this.party.totalExp(this.diff);
    let num = Math.floor(total / 100);
    num = num > 8 ? 8 : num;
    return num;
  }
}
