import Encounter from '@/models/Encounter';

describe('Encounter.ts', () => {
  it('is initialized partial', () => {
    const log = new Encounter({ level: 0 });
    expect(log.sessionId).toBe(null);
  });
});
