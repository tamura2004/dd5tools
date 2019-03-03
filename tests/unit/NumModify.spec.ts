import { NUM_MODIFY } from '@/data/DATA';

describe('NUM_MODIFY', () => {
  it('can get data by lookupOver', () => {
    expect(NUM_MODIFY.lookupOver(0)).toBe(undefined);
    expect(NUM_MODIFY.lookupOver(1)).toBe(1);
    expect(NUM_MODIFY.lookupOver(2)).toBe(1.5);
    expect(NUM_MODIFY.lookupOver(3)).toBe(2);
    expect(NUM_MODIFY.lookupOver(4)).toBe(2);
    expect(NUM_MODIFY.lookupOver(5)).toBe(2);
    expect(NUM_MODIFY.lookupOver(6)).toBe(2);
    expect(NUM_MODIFY.lookupOver(7)).toBe(2.5);
    expect(NUM_MODIFY.lookupOver(8)).toBe(2.5);
    expect(NUM_MODIFY.lookupOver(9)).toBe(2.5);
    expect(NUM_MODIFY.lookupOver(10)).toBe(2.5);
    expect(NUM_MODIFY.lookupOver(11)).toBe(3);
    expect(NUM_MODIFY.lookupOver(12)).toBe(3);
    expect(NUM_MODIFY.lookupOver(13)).toBe(3);
    expect(NUM_MODIFY.lookupOver(14)).toBe(3);
    expect(NUM_MODIFY.lookupOver(15)).toBe(4);
    expect(NUM_MODIFY.lookupOver(16)).toBe(4);
    expect(NUM_MODIFY.lookupOver(99)).toBe(4);
  });
});
