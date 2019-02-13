import { Player } from '@/models/Player';
import { Monster } from '@/models/Monster';

function d(n: number): number {
  return Math.floor(Math.random() * n);
}

export default class Floor {
  public dungeonId?: string;
  public level?: number;
  public name?: string;
  public dm?: string;
  public description?: string;
  public players: Player[] = [];
  public monsters: Monster[] = [];
  public map: boolean[] = [];

  constructor(init: Partial<Floor>) {
    Object.assign(this, init);
    this.initializeMap();
  }

  private initializeMap(): void {
    const WIDTH = 6;
    const HEIGHT = 8;
    const LENGTH = WIDTH * HEIGHT;
    const TIMES = 4;

    for (let i = 0; i < LENGTH; i++) {
      this.map.push(true);
    }

    const DIR = [-WIDTH, -1, 1, WIDTH];
    let count = 0;
    while (count < TIMES) {
      const p = d(LENGTH);
      const q = p + DIR[d(4)];
      if (
        0 <= q && q < LENGTH &&
        this.map[p] && this.map[q] &&
        Math.abs((p % WIDTH) - (q % WIDTH)) <= 1
      ) {
        this.map[p] = false;
        this.map[q] = false;
        count++;
      }
    }
  }
}
