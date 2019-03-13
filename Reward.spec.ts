import Reward from '@/models/Reward';

describe('Reward.ts', () => {
  it('is initialized partial', () => {
    const log = new Reward({ message: 'msg' });
    expect(log.encounterId).toBe(null);
    expect(log.sessionId).toBe(null);
    expect(log.message).toBe('msg');
  });
});
