import md5 from "blueimp-md5";

const DATA = [
  { weight: 12, name: "物質界：海岸" },
  { weight: 12, name: "物質界：極地" },
  { weight: 12, name: "物質界：砂漠" },
  { weight: 12, name: "物質界：山岳" },
  { weight: 12, name: "物質界：湿地" },
  { weight: 12, name: "物質界：森林" },
  { weight: 12, name: "物質界：草原" },
  { weight: 12, name: "アンダーダーク" },
  { weight: 8, name: "アストラル界" },
  { weight: 4, name: "境界エーテル界" },
  { weight: 1, name: "深エーテル界" },
  { weight: 2, name: "フェイワイルド" },
  { weight: 2, name: "シャドウフェル" },
  { weight: 1, name: "戦慄界" },
  { weight: 8, name: "風の次元界" },
  { weight: 8, name: "火の次元界" },
  { weight: 8, name: "水の次元界" },
  { weight: 8, name: "土の次元界" },
  { weight: 1, name: "セレスティア" },
  { weight: 1, name: "バイトピア" },
  { weight: 1, name: "エシュリオン" },
  { weight: 2, name: "ビーストランズ" },
  { weight: 2, name: "アルボレア" },
  { weight: 2, name: "イスガルド" },
  { weight: 2, name: "リンボ" },
  { weight: 2, name: "パンデモニウム" },
  { weight: 2, name: "アビス" },
  { weight: 2, name: "カルケリ" },
  { weight: 2, name: "ハデス" },
  { weight: 2, name: "ゲヘナ" },
  { weight: 2, name: "バートル" },
  { weight: 2, name: "アケロン" },
  { weight: 2, name: "メカヌス" },
  { weight: 2, name: "アルカディア" },
  { weight: 2, name: "セゴビア" },
  { weight: 1, name: "ゼンディカー" },
  { weight: 1, name: "ミラディン" },
  { weight: 1, name: "ドミナリア" },
  { weight: 1, name: "イクサラン" },
  { weight: 1, name: "ファイレクシア" },
  { weight: 1, name: "ラヴニカ" },
];

const total = DATA.reduce((a, v) => (a += v.weight), 0);

let dice = 0;
const PLACE_DATA = DATA.map(v => ({ id: md5(v.name), ...v }))
  .sort((a, b) => (a.id > b.id ? 1 : -1))
  .map(v => {
    dice += v.weight;
    return { total, dice, ...v };
  });

export default PLACE_DATA;

// for (let i = 0; i < 100; i++) {
//   const dice = Math.floor(Math.random() * total);
//   const place = PLACE_DATA.find(v => dice < v.dice);
//   console.log(place.name);
// }
