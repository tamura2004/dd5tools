import Log from '@/models/Log';

describe('Log.ts', () => {
  it('is initialized partial', () => {
    const log = new Log({ message: 'msg' });
    expect(log.encounterId).toBe(null);
    expect(log.sessionId).toBe(null);
    expect(log.message).toBe('msg');
  });
});
