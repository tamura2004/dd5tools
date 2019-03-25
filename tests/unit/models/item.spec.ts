import Item from '@/models/Item';
import Dungeon from '@/models/Dungeon';

describe('Item.ts', () => {
  it('create v-select item from Map', () => {
    const dungeons = new Map<string, Dungeon>([
      [ 'd001', new Dungeon({ name: 'D001', description: 'hoge' })],
      [ 'd002', new Dungeon({ name: 'D002', description: 'hoge' })],
    ]);
    const got = Item.from(dungeons);
    expect(JSON.stringify(got)).toBe(JSON.stringify([
      { id: 'd001', name: 'D001' },
      { id: 'd002', name: 'D002' },
    ]));
  });
});
