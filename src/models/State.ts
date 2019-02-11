import Party from '@/models/Party';
import { Monster } from '@/models/Monster';
import { Player } from '@/models/Player';
import { Game } from '@/models/Game';
import Spell from '@/models/Spell';

export default class State {
    public party: Party = new Party([[0, 0], [0, 0], [0, 0], [0, 0]]);
    public monsters: Monster[] = [];
    public players: { [key: string]: Player } = {};
    public spells: { [key: string]: Spell } = {};
    public games: Game[] = [];
    public current: { playerId: string } = {
        playerId: '',
    };
}
