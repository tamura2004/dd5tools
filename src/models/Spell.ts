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
  public name?: string = undefined;
  public englishName?: string = undefined;
  public japaneseName?: string = undefined;
  public klass?: string = undefined;
  public level: number = 0;
  public type?: string = undefined;
  public castingTime?: string = undefined;
  public range?: string = undefined;
  public components?: string = undefined;
  public duration?: string = undefined;
  public description?: string = undefined;

  constructor(init: Partial<Spell>) {
    Object.assign(this, init);
  }
}
