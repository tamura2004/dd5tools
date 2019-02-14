import Table from '@/models/Table';
import List from '@/models/List';
import Matrix from '@/models/Matrix';
import Deck from '@/models/Deck';
import { Weapon } from '@/models/Weapon';
import { Armor } from '@/models/Armor';

export enum Difficulty {
  Easy = 0,
  Normal,
  Hard,
  Deadly,
}

export const NUM_MODIFY = new Table([
  [1, 1],
  [2, 1.5],
  [3, 2],
  [7, 2.5],
  [11, 3],
  [15, 4],
]);

export const CR = new List(
  10,
  25,
  50,
  100,
  200,
  450,
  700,
  1100,
  1800,
  2300,
  2900,
  3900,
  5000,
  5900,
  7200,
  18000,
);

export const EXP = new Table<string>([
  [10, '0'],
  [25, '1/8'],
  [50, '1/4'],
  [100, '1/2'],
  [200, '1'],
  [450, '2'],
  [700, '3'],
  [1100, '4'],
  [1800, '5'],
  [2300, '6'],
  [2900, '7'],
  [3900, '8'],
  [5000, '9'],
  [5900, '10'],
  [7200, '11'],
  [8400, '12'],
  [10000, '13'],
]);

export const BASE_EXP = new Matrix(
  [25, 50, 75, 100],
  [50, 100, 150, 200],
  [75, 150, 225, 400],
  [125, 250, 375, 500],
  [250, 500, 750, 1100],
  [300, 600, 900, 1400],
  [350, 750, 1100, 1700],
  [450, 900, 1400, 2100],
  [550, 1100, 1600, 2400],
  [600, 1200, 1900, 2800],
);

export const ADVANCEMENT = new Table<number> ([
  [0, 1],
  [300, 2],
  [900, 3],
  [2700, 4],
  [6500, 5],
  [14000, 6],
  [23000, 7],
  [34000, 8],
  [48000, 9],
  [64000, 10],
  [85000, 11],
  [100000, 12],
  [120000, 13],
  [140000, 14],
  [165000, 15],
  [195000, 16],
  [225000, 17],
  [265000, 18],
  [305000, 19],
  [335000, 20],
]);

export const RACE_ABILITY = new Map<string, number[]> ([
  ['ヒューマン', [1, 1, 1, 1, 1, 1]],
  ['マウンテンドワーフ', [2, 0, 2, 0, 0, 0]],
  ['ヒルドワーフ', [0, 0, 2, 0, 1, 0]],
  ['ハイエルフ', [0, 2, 0, 1, 0, 0]],
  ['ウッドエルフ', [0, 2, 0, 0, 1, 0]],
  ['頑丈ハーフリング', [0, 2, 1, 0, 0, 0]],
  ['速足ハーフリング', [0, 2, 0, 0, 0, 1]],
  ['ドラウ', [0, 2, 0, 0, 0, 1]],
  ['ティーフリング', [0, 0, 0, 1, 0, 2]],
  ['ドラゴンボーン', [2, 0, 0, 0, 0, 1]],
  ['森ノーム', [0, 1, 0, 2, 0, 0]],
  ['岩ノーム', [0, 0, 1, 2, 0, 0]],
  ['ハーフエルフ', [0, 0, 0, 0, 0, 2]],
  ['ハーフオーク', [2, 0, 1, 0, 0, 0]],
]);

export const RACES = Array.from(RACE_ABILITY.keys());

export const BACKGROUND_SKILLS = new Map<string, string[]> ([
  ['貴族', ['説得', '歴史']],
  ['賢者', ['魔法学', '歴史']],
  ['侍祭', ['看破', '宗教学']],
  ['犯罪者', ['隠密', 'ペテン']],
  ['兵士', ['威圧', '運動']],
  ['民衆英雄', ['生存', '動物使い']],
  ['イカサマ師', ['手先の早業', 'ペテン']],
  ['隠者', ['医術', '宗教']],
  ['ギルドの職人', ['看破', '説得']],
  ['芸人', ['軽業', '芸能']],
  ['船乗り', ['運動', '知覚']],
  ['浮浪児', ['隠密', '手先の早業']],
  ['辺境育ち', ['運動', '生存']],
]);

export const BACKGROUND = Array.from(BACKGROUND_SKILLS.keys());

export const ALIGNMENT = [
  '秩序にして善',
  '中立にして善',
  '混沌にして善',
  '秩序にして中立',
  '真なる中立',
  '混沌にして中立',
  '秩序にして悪',
  '中立にして悪',
  '混沌にして悪',
];

export const KLASS = [
  'ファイター',
  'ウィザード',
  'クレリック',
  'ローグ',
  'レンジャー',
  'パラディン',
  'バーバリアン',
  'ソーサラー',
  'モンク',
  'ウォーロック',
  'ドルイド',
  'バード',
];

export const ABILITY_LABEL = [
  '筋力',
  '敏捷',
  '耐久',
  '知力',
  '判断',
  '魅力',
];

export const ABILITY_RANGE = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

export const WEAPON: Map<string, Weapon> = new Map([
  ['クオータースタッフ', new Weapon('クオータースタッフ', '単純近接武器', '2sp', '1d6', '殴打', '4ポンド', '', '両用')],
  ['クラブ', new Weapon('クラブ', '単純近接武器', '1sp', '1d4', '殴打', '2ポンド', '', '軽武器')],
  ['グレートクラブ', new Weapon('グレートクラブ', '単純近接武器', '2sp', '1d8', '殴打', '10ポンド', '', '両手用')],
  ['シックル', new Weapon('シックル', '単純近接武器', '1gp', '1d4', '斬撃', '2ポンド', '', '軽武器')],
  ['ジャヴェリン', new Weapon('ジャヴェリン', '単純近接武器', '5sp', '1d6', '刺突', '2ポンド', '30', '投擲')],
  ['スピア', new Weapon('スピア', '単純近接武器', '1gp', '1d6', '刺突', '3ポンド', '20', '投擲、両用（1d8）')],
  ['ダガー', new Weapon('ダガー', '単純近接武器', '2gp', '1d4', '刺突', '1ポンド', '20', '妙技、軽武器、投擲（射程20')],
  ['ハンドアックス', new Weapon('ハンドアックス', '単純近接武器', '5gp', '1d6', '斬撃', '2ポンド', '20', '軽武器、投擲（射程20')],
  ['メイス', new Weapon('メイス', '単純近接武器', '5gp', '1d6', '殴打', '4ポンド', '', '――')],
  ['ライト・ハンマー', new Weapon('ライト・ハンマー', '単純近接武器', '2gp', '1d4', '殴打', '2ポンド', '20', '軽武器、投擲（射程20')],
  ['ショートボウ', new Weapon('ショートボウ', '単純遠隔武器', '25gp', '1d6', '刺突', '2ポンド', '80', '両手用')],
  ['スリング', new Weapon('スリング', '単純遠隔武器', '1sp', '1d4', '殴打', '――', '30', '')],
  ['ダーツ', new Weapon('ダーツ', '単純遠隔武器', '5cp', '1d4', '刺突', '0.25ポンド', '20', '妙技、投擲')],
  ['ライト・クロスボウ', new Weapon('ライト・クロスボウ', '単純遠隔武器', '25gp', '1d8', '刺突', '5ポンド', '80', '')],
  ['ウィップ', new Weapon('ウィップ', '軍用近接武器', '2gp', '1d4', '斬撃', '3ポンド', '', '妙技、間合い')],
  ['ウォーハンマー', new Weapon('ウォーハンマー', '軍用近接武器', '15gp', '1d8', '殴打', '2ポンド', '', '両用（1d10）')],
  ['ウォー・ピック', new Weapon('ウォー・ピック', '軍用近接武器', '5gp', '1d8', '刺突', '2ポンド', '', '――')],
  ['グレイヴ', new Weapon('グレイヴ', '軍用近接武器', '20gp', '1d10', '斬撃', '6ポンド', '', '重武器、間合い、両手用')],
  ['グレートアックス', new Weapon('グレートアックス', '軍用近接武器', '30gp', '1d12', '斬撃', '7ポンド', '', '重武器、両手用')],
  ['グレートソード', new Weapon('グレートソード', '軍用近接武器', '50gp', '2d6', '斬撃', '6ポンド', '', '重武器、両手用')],
  ['シミター', new Weapon('シミター', '軍用近接武器', '25gp', '1d6', '斬撃', '3ポンド', '', '妙技、軽武器')],
  ['ショートソード', new Weapon('ショートソード', '軍用近接武器', '10gp', '1d6', '刺突', '2ポンド', '', '妙技、軽武器')],
  ['トライデント', new Weapon('トライデント', '軍用近接武器', '5gp', '1d6', '刺突', '4ポンド', '20', '投擲、両用（1d8）')],
  ['パイク', new Weapon('パイク', '軍用近接武器', '5gp', '1d10', '刺突', '18ポンド', '', '重武器、間合い、両手用')],
  ['バトルアックス', new Weapon('バトルアックス', '軍用近接武器', '10gp', '1d8', '斬撃', '4ポンド', '', '両用（1d10）')],
  ['ハルバード', new Weapon('ハルバード', '軍用近接武器', '20gp', '1d10', '斬撃', '6ポンド', '', '重武器、間合い、両手用')],
  ['フレイル', new Weapon('フレイル', '軍用近接武器', '10gp', '1d8', '殴打', '2ポンド', '', '')],
  ['モーニングスター', new Weapon('モーニングスター', '軍用近接武器', '15gp', '1d8', '刺突', '4ポンド', '', '')],
  ['モール', new Weapon('モール', '軍用近接武器', '10gp', '2d6', '殴打', '10ポンド', '', '重武器、両手用')],
  ['ランス', new Weapon('ランス', '軍用近接武器', '10gp', '1d12', '刺突', '6ポンド', '', '間合い、特殊')],
  ['レイピア', new Weapon('レイピア', '軍用近接武器', '25gp', '1d8', '刺突', '2ポンド', '', '妙技')],
  ['ロングソード', new Weapon('ロングソード', '軍用近接武器', '15gp', '1d8', '斬撃', '3ポンド', '', '両用（1d10）')],
  ['ネット', new Weapon('ネット', '軍用遠隔武器', '1gp', '――', '', '3ポンド', '5', '特殊、投擲（射程5')],
  ['ハンド・クロスボウ', new Weapon('ハンド・クロスボウ', '軍用遠隔武器', '75gp', '1d6', '刺突', '3ポンド', '30', '軽武器、装填')],
  ['ブロウガン', new Weapon('ブロウガン', '軍用遠隔武器', '10gp', '1', '刺突', '1ポンド', '25', '装填')],
  ['ヘヴィ・クロスボウ', new Weapon('ヘヴィ・クロスボウ', '軍用遠隔武器', '50gp', '1d10', '刺突', '18ポンド', '100', '重武器、装填、両手用')],
  ['ロングボウ', new Weapon('ロングボウ', '軍用遠隔武器', '50gp', '1d8', '刺突', '2ポンド', '150', '重武器、両手用')],
]);

export const WEAPON_NAME = [...WEAPON.keys()];

export const ARMOR: Map<string, Armor> = new Map([
  ['パデッド', new Armor('軽装鎧', '5gp', 11, 99, -99, 0, '不利', '8ポンド')],
  ['レザー', new Armor('軽装鎧', '10gp', 11, 99, -99, 0, 'なし', '10ポンド')],
  ['スタデッド・レザー', new Armor('軽装鎧', '45gp', 12, 99, -99, 0, 'なし', '13ポンド')],
  ['ハイド', new Armor('中装鎧', '10gp', 12, 2, -99, 0, 'なし', '12ポンド')],
  ['チェイン・シャツ', new Armor('中装鎧', '50gp', 13, 2, -99, 0, 'なし', '20ポンド')],
  ['スケイル・メイル', new Armor('中装鎧', '50gp', 14, 2, -99, 0, '不利', '45ポンド')],
  ['ブレストプレート', new Armor('中装鎧', '400gp', 14, 2, -99, 0, 'なし', '20ポンド')],
  ['ハーフ・プレート', new Armor('中装鎧', '750gp', 15, 2, -99, 0, '不利', '40ポンド')],
  ['リング・メイル', new Armor('重装鎧', '30gp', 14, 0, 0, 0, '不利', '40ポンド')],
  ['チェイン・メイル', new Armor('重装鎧', '75gp', 16, 0, 0, 13, '不利', '55ポンド')],
  ['スプリント', new Armor('重装鎧', '200gp', 17, 0, 0, 13, '不利', '60ポンド')],
  ['プレート', new Armor('重装鎧', '1500gp', 18, 0, 0, 15, '不利', '65ポンド')],
  ['シールド', new Armor('盾', '10gp', 2, 99, -99, 0, 'なし', '6ポンド')],
]);

export const ARMOR_NAME = [...ARMOR.keys()];

export const AVATAR: Deck<string> = new Deck<string>(
  '001-centaur.png',
  '002-kraken.png',
  '003-dinosaur.png',
  '004-tree-1.png',
  '005-hand.png',
  '006-echidna.png',
  '007-robot.png',
  '008-mushroom.png',
  '009-harpy.png',
  '010-phoenix.png',
  '011-dragon-1.png',
  '012-devil.png',
  '013-troll.png',
  '014-alien.png',
  '015-minotaur.png',
  '016-madre-monte.png',
  '017-satyr.png',
  '018-karakasakozou.png',
  '019-pirate.png',
  '020-werewolf.png',
  '021-scarecrow.png',
  '022-valkyrie.png',
  '023-curupira.png',
  '024-loch-ness-monster.png',
  '025-tree.png',
  '026-cerberus.png',
  '027-gryphon.png',
  '028-mermaid.png',
  '029-vampire.png',
  '030-goblin.png',
  '031-yeti.png',
  '032-leprechaun.png',
  '033-medusa.png',
  '034-chimera.png',
  '035-elf.png',
  '036-hydra.png',
  '037-cyclops.png',
  '038-pegasus.png',
  '039-narwhal.png',
  '040-woodcutter.png',
  '041-zombie.png',
  '042-dragon.png',
  '043-frankenstein.png',
  '044-witch.png',
  '045-fairy.png',
  '046-genie.png',
  '047-pinocchio.png',
  '048-ghost.png',
  '049-wizard.png',
  '050-unicorn.png',
  '1048-killer-1.png',
  '1027-policewoman.png',
  '1006-death.png',
  '1011-mummy.png',
  '1038-superhero-1.png',
  '1008-frankenstein.png',
  '1037-superhero.png',
  '1026-gangster.png',
  '1036-cat.png',
  '1013-roman.png',
  '1041-goblin.png',
  '1034-spider.png',
  '1017-viking.png',
  '1015-native-american.png',
  '1002-vampire.png',
  '1005-witch.png',
  '1040-pumpkin.png',
  '1021-little-red-riding-hood.png',
  '1047-killer.png',
  '1044-angel.png',
  '1020-clown.png',
  '1009-bride-of-frankenstein.png',
  '1001-devil.png',
  '1024-queen.png',
  '1016-cowboy.png',
  '1039-fairy.png',
  '1033-bee.png',
  '1042-ballerina.png',
  '1031-bunny.png',
  '1022-pirate.png',
  '1029-nun.png',
  '1012-cleopatra.png',
  '1010-invisible-man.png',
  '1049-killer-2.png',
  '1007-ghost.png',
  '1045-girl.png',
  '1043-dancer.png',
  '1032-animal.png',
  '1030-man-dressed-as-a-woman.png',
  '1025-jester.png',
  '1035-bat.png',
  '1028-nurse.png',
  '1019-magician.png',
  '1003-vampire-1.png',
  '1023-king.png',
  '1014-greek.png',
  '1046-alien.png',
  '1018-wizard.png',
  '1050-skeleton.png',
  '1004-werewolf.png',
);

export const SKILLS: string[][] = [
  ['運動'],
  ['隠密', '軽業', '手先の早業'],
  [],
  ['自然', '宗教', '捜査', '魔法学', '歴史'],
  ['医術', '看破', '生存', '知覚', '動物使い'],
  ['説得', '芸能', '威圧', 'ペテン'],
];

export const SKILL_LABELS: string[] = [
  '運動',
  '隠密',
  '軽業',
  '手先の早業',
  '自然',
  '宗教',
  '捜査',
  '魔法学',
  '歴史',
  '医術',
  '看破',
  '生存',
  '知覚',
  '動物使い',
  '説得',
  '芸能',
  '威圧',
  'ペテン',
];

export const FEATS: Deck<string> = new Deck<string> (
  '癒し手',
  '運動選手',
  '鋭敏なる頭脳',
  '大業物の使い手',
  '陰に潜むもの',
  '観察眼',
  '儀式発動者',
  '技術習熟',
  '騎乗戦闘者',
  '機動力',
  '強運',
  '凶暴な戦士',
  '組技の達人',
  'クロスボウの達人',
  '警戒',
  '軽装防具習熟',
  '激励する指揮官',
  '元素の達人',
  '語学の才',
  '酒場流喧嘩殺法',
  '射撃の名手',
  '重装防具習熟',
  '重装鎧の達人',
  '守護戦士',
  '呪文狙撃手',
  'セーヴ習熟',
  '戦技のたしなみ',
  '戦場の術者',
  '壮健',
  '盾の使い手',
  'ダンジョン探検家',
  '中装防具習熟',
  '中装鎧の達人',
  '追加hp',
  '突撃者',
  '長柄の使い手',
  '二刀の使い手',
  '武器の使い手',
  '魔導士退治',
  '魔法のたしなみ',
  '守りの決闘術',
  '役者',
);
