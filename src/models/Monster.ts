interface Difficulty {
  id: number;
  cr: string;
  exp: number;
}

const EXPS: Difficulty[] = [
  { id: 0, cr: '0', exp: 10 },
  { id: 1, cr: '1/8', exp: 25 },
  { id: 2, cr: '1/4', exp: 50 },
  { id: 3, cr: '1/2', exp: 100 },
  { id: 4, cr: '1', exp: 200 },
  { id: 5, cr: '2', exp: 450 },
  { id: 6, cr: '3', exp: 700 },
  { id: 7, cr: '4', exp: 1100 },
];

const MONSTER_LIST: {[n: number]: string[]} = {
  10: [
    'ハイエナ',
    'ラット',
  ],
  25: [
    'コボルド',
    'ジャイアント・クラブ',
    'スタージ',
    'ポイゾナス・スネーク',
  ],
  50: [
    'ゴブリン',
    'スケルトン',
    'ゾンビ',
    'フライングソード',
  ],
  100: [
    'オーク',
    'ボブゴブリン',
    'コッカトリス',
  ],
  200: [
    'バグベア',
    'ハーピー',
    'グール',
    'アニメイテッド・アーマー',
    'デス・ドッグ',
  ],
  450: [
    'オーガ',
    'アロサウルス',
    'オーカー・ジェリー',
  ],
  700: [
    'ヘルハウンド',
    'アウルベア',
    'イエティ',
    'マミー',
    'マンティコア',
    'ミノタウルス',
    'ワーウルフ',
    'ワイト',
  ],
  1100: [
    'ゴースト',
    'バンシー',
    'エレファント',
    'フレイムスカル',
  ],
};

const NUM_MODIFY = [
  { num: 1, modify: 1 },
  { num: 2, modify: 1.5 },
  { num: 6, modify: 2 },
  { num: 10, modify: 2.5 },
  { num: 14, modify: 3 },
  { num: 99, modify: 4 },
];

export default class Monster {
  public static random(totalExp: number): Monster {
    const num = Math.floor((Math.random() * Math.random()) * 15) + 1;
    const result = NUM_MODIFY.find((n) => Number(num) <= Number(n.num));
    let exp: number;
    if (result === undefined) {
      throw new Error('bad num modify table');
    } else {
      exp = totalExp / result.modify / Number(num);
    }
    const difficulty = EXPS.find((e) => exp <= e.exp);
    if (difficulty === undefined) {
      throw new Error(`bad difficulty table: ${exp}`);
    }
    const list = MONSTER_LIST[difficulty.exp];
    const name = list[Math.floor(Math.random() * list.length)];
    return new Monster(name, num, difficulty.exp * num);
  }

  public name: string;
  // public ac!: number;
  // public hp!: number;
  public exp: number;
  public num: number;

  constructor(name: string, num: number, exp: number) {
    this.name = name;
    this.num = num;
    this.exp = exp;
  }
}
