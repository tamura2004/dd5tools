import Session from '@/models/Session';

describe('Session.ts', () => {
  it('is initialized partial', () => {
    const session = new Session({ name: 'NAME' });
    expect(session.dungeonId).toBe(null);
    expect(session.npcId).toBe(null);
  });
});
