import Reward from '@/models/Reward';

describe('Reward.ts', () => {
  it('is initialized partial', () => {
    const log = new Reward({ gold: 100 });
    expect(log.encounterId).toBe(null);
    expect(log.sessionId).toBe(null);
    expect(log.gold).toBe(100);
  });
});
