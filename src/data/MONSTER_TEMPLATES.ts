import MonsterInfo from '@/models/MonsterInfo';

const MONSTER_TEMPLATE_DATA: Array<Partial<MonsterInfo>> = [
    {
        name: 'ゾンビ',
        type: 'アンデッド',
        alignment: '中立にして悪',
        ac: -4,
        maxHp: 4,
        ability: [
            0,
            -4,
            +4,
            0,
            0,
            0,
        ],
        attributes: [
            'ダメージ脆弱性: [光輝]',
        ],
    },
];

export default MONSTER_TEMPLATE_DATA;
