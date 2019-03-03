import { Player } from '@/models/Player';
import MonsterInfo from '@/models/MonsterInfo';
import MONSTER_INFOS from '@/data/MONSTERS';
import { MODE, BASE_EXP, NUM_MODIFY, CR } from '@/data/DATA';

export default class Encounter {
  public players: Map<number, number> = new Map();
  // public mode: MODE = MODE.NORMAL;

  public loadPlayers(players: Player[]) {
    players.forEach((player) => {
      const level = player.level;
      if (level === undefined) {
        return;
      }
      const num = this.players.get(level);
      if (num === undefined) {
        this.players.set(level, 1);
      } else {
        this.players.set(level, num + 1);
      }
    });
  }

  public totalMonsterExp(mode: MODE = MODE.NORMAL): number {
    let sum: number = 0;
    this.players.forEach((num, level) => {
      const exp = BASE_EXP.get(level - 1, mode);
      if (exp !== undefined) {
        sum += exp * num;
      }
    });
    return sum;
  }

  public monsterExp(num: number, mode?: MODE): number | undefined {
    const modify = NUM_MODIFY.lookupOver(num);
    if (modify === undefined) {
      return;
    }
    const totalExp = this.totalMonsterExp(mode);
    return CR.lookupOver(totalExp / modify / num);
  }

  public candidateExpNums(mode?: MODE): Map<number, number> {
    const candidate = new Map<number, number>();
    for (let num = 15; num > 0; num--) {
      const exp = this.monsterExp(num, mode);
      if (exp !== undefined && !candidate.has(exp)) {
        candidate.set(exp, num);
      }
    }
    return candidate;
  }

  public chooseExpNum(mode?: MODE): [number, number | undefined] {
    const candidate = this.candidateExpNums(mode);
    const keys = Array.from(candidate.keys());
    const key = keys[Math.floor(Math.random() * keys.length)];
    return [key, candidate.get(key)];
  }

  public chooseMonsterInfo(exp: number): MonsterInfo | undefined {
    const monsters = MONSTER_INFOS.filter((monster) => monster.exp === exp);
    return monsters[Math.floor(Math.random() * monsters.length)];
  }
  // public monster(): MonsterInfo {
  //   const num = this.monsterNum();
  //   const modify = NUM_MODIFY.lookupOver(num) || 1;
  //   const unitExp = this.party.totalExp(this.mode) / modify / num;
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
