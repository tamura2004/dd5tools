import Encounter from '@/models/Encounter';
import { Player } from '@/models/Player';
import { Difficulty } from '@/data/DATA';

describe('Encounter', () => {
  it('can load Players', () => {
    const player = new Player({level: 2});
    const players = [player, player, player];
    const encounter = new Encounter();
    encounter.loadPlayers(players);
    expect(JSON.stringify(encounter.map)).toBe(JSON.stringify(new Map([[2, 3]])));
    expect(encounter.totalMonsterExp()).toBe(300);

    encounter.diff = Difficulty.Hard;
    expect(encounter.totalMonsterExp()).toBe(450);

    encounter.diff = Difficulty.Deadly;
    expect(encounter.totalMonsterExp()).toBe(600);
  });
});
