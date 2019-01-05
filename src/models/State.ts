import Party from '@/models/Party';
import { Monster } from '@/models/Monster';

export default class State {
    public party: Party = new Party([[0, 0], [0, 0], [0, 0], [0, 0]]);
    public monsters: Monster[] = [];
}
