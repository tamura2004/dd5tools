import Party from '@/models/Party';
import { Monster } from '@/models/Monster';
import { Player } from '@/models/Player';
import { Game } from '@/models/Game';
import Spell from '@/models/Spell';
import Npc from '@/models/Npc';
import Item from '@/models/Item';
import Place from '@/models/Place';
import Dungeon from '@/models/Dungeon';
import Floor from '@/models/Floor';

export default class State {
    public party: Party = new Party([[0, 0], [0, 0], [0, 0], [0, 0]]);
    public monsters: Monster[] = [];
    public players: { [key: string]: Player } = {};
    public spells: { [key: string]: Spell } = {};
    public npcs: { [key: string]: Npc } = {};
    public items: { [key: string]: Item } = {};
    public places: { [key: string]: Place } = {};
    public dungeons: { [key: string]: Dungeon } = {};
    public floors: { [key: string]: Floor } = {};
    public games: Game[] = [];
    public current: { playerId: string } = {
        playerId: '',
    };
}
