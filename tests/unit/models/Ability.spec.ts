import Ability from '@/models/Ability';

describe('Ability.ts', () => {
  it('can calcurate modify', () => {
    expect(Ability.modify(8)).toBe(-1);
    expect(Ability.modify(9)).toBe(-1);
    expect(Ability.modify(10)).toBe(0);
    expect(Ability.modify(11)).toBe(0);
    expect(Ability.modify(12)).toBe(1);
    expect(Ability.modify(13)).toBe(1);
    expect(Ability.modify(14)).toBe(2);
    expect(Ability.modify(15)).toBe(2);
    expect(Ability.modify(16)).toBe(3);
    expect(Ability.modify(17)).toBe(3);
  });

  it('can calcurate modifyString', () => {
    expect(Ability.modifyString(8)).toBe('-1');
    expect(Ability.modifyString(9)).toBe('-1');
    expect(Ability.modifyString(10)).toBe('0');
    expect(Ability.modifyString(11)).toBe('0');
    expect(Ability.modifyString(12)).toBe('+1');
    expect(Ability.modifyString(13)).toBe('+1');
    expect(Ability.modifyString(14)).toBe('+2');
    expect(Ability.modifyString(15)).toBe('+2');
    expect(Ability.modifyString(16)).toBe('+3');
    expect(Ability.modifyString(17)).toBe('+3');
  });
});
