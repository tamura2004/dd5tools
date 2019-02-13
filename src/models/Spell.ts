// export default class Spell {
//   public name?: string = 'マジック・ミサイル';
//   public englishName?: string = 'Migic Missile';
//   public japaneseName?: string = '魔法の矢';
//   public klass?: string = 'ウィザード';
//   public level: number = 1;
//   public type?: string = '力術';
//   public castingTime?: string = '1アクション';
//   public range?: string = '120フィート';
//   public components?: string = '音声、動作';
//   public duration?: string = '瞬間';
//   public description?: string = '必ず命中する3本の矢を作り出す。それぞれ1d4+1[力場]ダメージ';

//   constructor(init: Partial<Spell>) {
//     Object.assign(this, init);
//   }
// }

export default class Spell {
  public name?: string;
  public englishName?: string;
  public japaneseName?: string;
  public klass?: string;
  public level?: number;
  public type?: string;
  public castingTime?: string;
  public range?: string;
  public components: string[] = [];
  public duration?: string;
  public description?: string;

  constructor(init: Partial<Spell>) {
    Object.assign(this, init);
  }
}
