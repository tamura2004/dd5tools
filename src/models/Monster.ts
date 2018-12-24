export default class Monster {

  public name: string;
  public ac: number;
  public hp: number;
  public mv: number;
  public ability: number[];
  public exp: number;
  public num: number;

  constructor(name: string, data: number[], num: number) {
    const [ac, hp, mv, str, dex, con, int, wis, cha, exp] = data;
    this.name = name;
    this.num = num;
    this.ac = ac;
    this.hp = hp;
    this.mv = mv;
    this.ability = [str, dex, con, int, wis, cha];
    this.exp = exp;
  }
}
