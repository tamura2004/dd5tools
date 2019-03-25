import Creature from '@/models/Creature';

describe('Creature.ts', () => {
  it('is initialized partial', () => {
    const creature = new Creature({
      initiative: 10,
      hp: 20,
    });
    expect(creature.encounterId).toBe(null);
    expect(creature.sessionId).toBe(null);
  });
});
