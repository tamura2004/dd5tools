import Encounter from '@/models/Encounter';
import { Player } from '@/models/Player';
import { MODE } from '@/data/DATA';
import MonsterInfo from '@/models/MonsterInfo';

describe('Encounter', () => {
  const player = new Player({level: 3});
  const players = [player, player, player, player];
  const encounter = new Encounter();
  encounter.loadPlayers(players);

  it('can initialize by loading players', () => {
    expect(JSON.stringify(encounter.players)).toBe(JSON.stringify(new Map([[2, 3]])));
  });

  it('can calculate total monster exp by difficulty', () => {
    expect(encounter.totalMonsterExp(MODE.EASY)).toBe(300);
    expect(encounter.totalMonsterExp(MODE.NORMAL)).toBe(600);
    expect(encounter.totalMonsterExp(MODE.HARD)).toBe(900);
    expect(encounter.totalMonsterExp(MODE.HELL)).toBe(1600);
  });

  it('can calculate monster exp by num of monster', () => {
    expect(encounter.monsterExp(1, MODE.HELL)).toBe(1100);
    expect(encounter.monsterExp(2, MODE.HELL)).toBe(450);
    expect(encounter.monsterExp(3, MODE.HELL)).toBe(200);
    expect(encounter.monsterExp(7, MODE.HELL)).toBe(50);
    expect(encounter.monsterExp(11, MODE.HELL)).toBe(25);
    expect(encounter.monsterExp(15, MODE.HELL)).toBe(25);
  });

  it('can make candidate of monster exp and number pair by Map', () => {
    const expected = new Map([
      [25, 15],
      [50, 10],
      [100, 6],
      [200, 4],
      [450, 2],
      [1100, 1],
    ]);
    expect(encounter.candidateExpNums(MODE.HELL)).toEqual(expected);
  });

  it('can choose monster exp and number pair', () => {
    const [exp, num] = encounter.chooseExpNum(MODE.HELL);
    expect([25, 50, 100, 200, 450, 1100].includes(exp)).toBe(true);
    expect([15, 10, 6, 4, 2, 1].includes(num || 0)).toBe(true);
  });

  it('can choose random monster by exp', () => {
    let received = encounter.chooseMonsterInfo(25);
    expect(received && received.exp).toBe(25);

    received = encounter.chooseMonsterInfo(1100);
    expect(received && received.exp).toBe(1100);
  });
});
