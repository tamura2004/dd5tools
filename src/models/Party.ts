import { Player } from '@/models/Player';
import { BASE_EXP, Difficulty } from '@/data/DATA';

export default class Party {
  public map: Map<number, number> = new Map();
  public diff: Difficulty = Difficulty.Normal;

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
      const exp = BASE_EXP.get(level, this.diff) || 25;
      sum += exp * num;
    });
    return sum;
  }
}
