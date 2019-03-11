import Armor from '@/models/Armor';
import ARMOR_DATA from '@/data/ARMOR_DATA';

describe('Armor.ts', () => {
  it('create collection from init data', () => {
    const got: any = Armor.from(ARMOR_DATA);
    expect(got.length).toBe(13);
    expect(got[1].name).toBe('パデッド');
    expect(got[1].type).toBe('軽装鎧');
    expect(got[1].price).toBe('5gp');
    expect(got[1].ac).toBe(11);
  });
});
