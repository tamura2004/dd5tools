import Armor from '@/models/Armor';
import ARMOR_DATA from '@/data/ARMOR_DATA';

describe('Armor.ts', () => {
  it('create collection from init data', () => {
    const got = new Armor(ARMOR_DATA[1]);
    expect(got.name).toBe('パデッド');
    expect(got.type).toBe('軽装鎧');
    expect(got.price).toBe('5gp');
    expect(got.ac).toBe(11);
    expect(got.description).toBe('軽装鎧（5gp/8ポンド）：AC11＋【敏】修正値、隠密：不利');
  });
});
