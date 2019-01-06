import Party from '@/models/Party';
import { MONSTERS } from '@/data/MONSTERS';
import { Monster } from '@/models/Monster';
import Table from '@/models/Table';
import List from '@/models/List';
import { Difficulty, NUM_MODIFY, CR, BASE_EXP } from '@/data/DATA';

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
    const exp = CR.lookupOver(unitExp) || 10;
    const monsters = MONSTERS.filter((m) => m.exp === exp);
    const init = monsters[Math.floor(Math.random() * monsters.length)];
    return new Monster(init, num);
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
