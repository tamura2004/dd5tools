import Player from '@/models/Player';

describe('Player', () => {

  it('can initialize partial', () => {
    const player = new Player({level: 3});
    player.rollAbility();

    expect(player.level).toBe(3);
    expect(player.klass).toBe(null);
    expect(player.rank).toBe('E');
    expect(player.baseAbility.length).toBe(6);
  });

  it('can calcurate ability by race', () => {
    const player = new Player(
      {
        baseAbility: [10, 0, 0, 0, 0, 0],
        race: 'マウンテンドワーフ',
      },
    );
    expect(player.ability).toEqual([12, 0, 2, 0, 0, 0]);
  });
});
