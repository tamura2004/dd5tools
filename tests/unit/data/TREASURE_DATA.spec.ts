import { chooseItems } from '@/data/TREASURE_DATA';
import _ from 'lodash';

describe('TREASURE_DATA', () => {
  it('can choose items by max dice roll', () => {
    const dice = (min: number, max: number) => max;
    const items = chooseItems(dice);
    expect(items).toEqual(['トウム·オヴ·アンダスタンディング']);
  });
  it('can choose items by average dice roll', () => {
    const dice = (min: number, max: number) => Math.floor((max + min) / 2);
    const items = chooseItems(dice);
    expect(items).toEqual(['ポーション・オブ・ヒーリング', 'ポーション・オブ・ヒーリング', 'ポーション・オブ・ヒーリング']);
  });
});
