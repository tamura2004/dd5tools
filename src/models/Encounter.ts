import { Player } from '@/models/Player';
import { Difficulty, BASE_EXP, NUM_MODIFY, CR } from '@/data/DATA';

export default class Encounter {
  public map: Map<number, number> = new Map();
  public diff: Difficulty = Difficulty.Normal;
  public num: number = 1; // number of monster

  public loadPlayers(players: Player[]) {
    players.forEach((player) => {
      const level = player.level;
      if (level === undefined) {
        return;
      }
      const num = this.map.get(level);
      if (num === undefined) {
        this.map.set(level, 1);
      } else {
        this.map.set(level, num + 1);
      }
    });
  }

  public totalMonsterExp(): number {
    let sum: number = 0;
    this.map.forEach((num, level) => {
      const exp = BASE_EXP.get(level - 1, this.diff) || 25;
      sum += exp * num;
    });
    return sum;
  }

  public monsterExp(): number | undefined {
    const modify = NUM_MODIFY.lookupOver(this.num);
    if (modify === undefined) {
      return;
    }
    const totalExp = this.totalMonsterExp();
    return CR.lookupOver(totalExp / modify / this.num);
  }

  // public monster(): MonsterInfo {
  //   const num = this.monsterNum();
  //   const modify = NUM_MODIFY.lookupOver(num) || 1;
  //   const unitExp = this.party.totalExp(this.diff) / modify / num;
  //   const exp = CR.lookupOver(unitExp) || 10;
  //   const monsters = MONSTERS.filter((m) => m.exp === exp);
  //   const init = monsters[Math.floor(Math.random() * monsters.length)];
  //   return new Monster(init, num);
  // }

  // private monsterNum(): number {
  //   return Math.floor(Math.random() * this.maxNumber() + 1);
  // }

  // private maxNumber(): number {
  //   const total = this.party.totalExp(this.diff);
  //   let num = Math.floor(total / 100);
  //   num = num > 8 ? 8 : num;
  //   return num;
  // }
}
