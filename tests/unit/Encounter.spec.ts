import Encounter from '@/models/Encounter';
import { Player } from '@/models/Player';
import { Difficulty } from '@/data/DATA';

describe('Encounter', () => {
  const player = new Player({level: 3});
  const players = [player, player, player, player];
  const encounter = new Encounter();
  encounter.loadPlayers(players);

  it('can initialize by loading players', () => {
    expect(JSON.stringify(encounter.map)).toBe(JSON.stringify(new Map([[2, 3]])));
  });

  it('can calculate total monster exp by difficulty', () => {
    expect(encounter.totalMonsterExp()).toBe(600);

    encounter.diff = Difficulty.Easy;
    expect(encounter.totalMonsterExp()).toBe(300);

    encounter.diff = Difficulty.Hard;
    expect(encounter.totalMonsterExp()).toBe(900);

    encounter.diff = Difficulty.Deadly;
    expect(encounter.totalMonsterExp()).toBe(1600);
  });

  it('can calculate monster exp by num of monster', () => {
    encounter.diff = Difficulty.Deadly;
    expect(encounter.totalMonsterExp()).toBe(1600);
    expect(encounter.monsterExp()).toBe(1100);

    encounter.num = 2;
    expect(encounter.monsterExp()).toBe(450);

    encounter.num = 3;
    expect(encounter.monsterExp()).toBe(200);

    encounter.num = 7;
    expect(encounter.monsterExp()).toBe(50);

    encounter.num = 11;
    expect(encounter.monsterExp()).toBe(25);

    encounter.num = 15;
    expect(encounter.monsterExp()).toBe(25);
  });
});
