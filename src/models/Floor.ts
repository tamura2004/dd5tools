import MonsterInfo from '@/models/MonsterInfo';

function d(n: number): number {
  return Math.floor(Math.random() * n);
}

const enum M {
  EMPTY = 0,
  WALL = 1,
  MONSTER = 2,
}

export default class Floor {
  public dungeonId?: string;
  public level?: number;
  public name?: string;
  public dm?: string;
  public description?: string;
  public playerIds: string[] = [];
  // public monster?: Partial<Monster>;
  public map: M[] = [];

  constructor(init: Partial<Floor>) {
    Object.assign(this, init);
  }

  // public setMonster(monster: Monster): void {
  //   for (let i = 0; i < 48; i++) {
  //     if (this.map[i] === M.MONSTER) {
  //       this.map[i] = M.EMPTY;
  //     }
  //   }
  //   let count = 0;
  //   const num = monster.num;
  //   while (count < num) {
  //     const pos = d(this.map.length);
  //     if (this.map[pos] === M.EMPTY) {
  //       this.map[pos] = M.MONSTER;
  //       count++;
  //     }
  //   }
  //   this.monster = monster;
  // }

  public initializeMap(): void {
    const WIDTH = 6;
    const HEIGHT = 8;
    const LENGTH = WIDTH * HEIGHT;
    const TIMES = 4;

    this.map = [];
    for (let i = 0; i < LENGTH; i++) {
      this.map.push(M.EMPTY);
    }

    const DIR = [-WIDTH, -1, 1, WIDTH];
    let count = 0;
    while (count < TIMES) {
      const p = d(LENGTH);
      const q = p + DIR[d(4)];
      if (
        0 <= q && q < LENGTH &&
        this.map[p] === M.EMPTY && this.map[q] === M.EMPTY &&
        Math.abs((p % WIDTH) - (q % WIDTH)) <= 1
      ) {
        this.map[p] = M.WALL;
        this.map[q] = M.WALL;
        count++;
      }
    }
  }
}
