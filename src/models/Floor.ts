import uuidv4 from 'uuid/v4';
// import Chart from '@/models/Chart';

// const PASSAGE = new Chart<string>([
//   {no: 1, init: '薄暗い'},
//   {no: 1, init: '石造りの'},
//   {no: 1, init: ''},
// ])


export default class Floor {
  public key: string;
  public name: string;
  public description: string;
  public actions: string[] = ['調べる', '進む'];

  constructor(init: {name: string}) {
    this.name = init.name;
    this.description = 'no description';
    this.key = uuidv4();
  }
}
