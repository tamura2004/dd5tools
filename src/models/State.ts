import Session from '@/models/Session';
import Player from '@/models/Player';
import Dungeon from './Dungeon';
import Npc from './Npc';

export default class State {
  public sessions: Map<string, Session> = new Map<string, Session>();
  public players: Map<string, Player> = new Map<string, Player>();
  public dungeons: Map<string, Dungeon> = new Map<string, Dungeon>();
  public npcs: Map<string, Npc> = new Map<string, Npc>();
}
