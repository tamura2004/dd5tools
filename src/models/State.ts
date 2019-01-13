import Party from '@/models/Party';
import { Monster } from '@/models/Monster';
import { Player } from '@/models/Player';

export default class State {
    public party: Party = new Party([[0, 0], [0, 0], [0, 0], [0, 0]]);
    public monsters: Monster[] = [];
    public players: Player[] = [];
}
