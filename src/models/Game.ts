import { Player } from '@/models/Player';
import { Monster } from '@/models/Monster';

export class Game {
    public id?: string = undefined;
    public gm?: string = undefined;
    public title?: string = undefined;
    public players: Player[] = [];
    public monsters: Monster[] = [];

    constructor(init: Partial<Game>) {
        Object.assign(this, init);
    }
}
