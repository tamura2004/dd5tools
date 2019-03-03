import { Player } from '@/models/Player';
import MonsterInfo from '@/models/MonsterInfo';

export class Game {
    public id?: string = undefined;
    public gm?: string = undefined;
    public title?: string = undefined;
    public players: Player[] = [];
    public monsters: MonsterInfo[] = [];

    constructor(init: Partial<Game>) {
        Object.assign(this, init);
    }
}
