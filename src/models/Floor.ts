import uuidv4 from 'uuid/v4';
import { Table, Chart } from '@/models/Chart';

const Names: Chart<string> = new Chart<string>([
  [7, '通路'],
  [9, '木の扉'],
  [10, '石の扉'],
  [11, '鉄の扉'],
  [12, '裂け目'],
  [13, '井戸'],
  [14, '壁画'],
  [15, 'レリーフ'],
  [16, '彫像'],
  [17, '落とし穴'],
  [18, '梯子'],
  [20, '階段'],
]);

export default class Floor {
  public key: string;
  public name: string;
  public actions: string[] = ['調べる', '進む'];

  constructor() {
    this.name = Names.roll();
    this.key = uuidv4();
  }
}
