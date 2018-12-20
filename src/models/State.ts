import Floor from '@/models/Floor';

export default class State {
    public floors: Floor[][];

    constructor() {
        this.floors = [];
        for (let i = 0; i < 5; i++) {
            this.floors[i] = [];
            for (let j = 0; j < 3; j++) {
                this.floors[i][j] = new Floor();
            }
        }
    }
}
