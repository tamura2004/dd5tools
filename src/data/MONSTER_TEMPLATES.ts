import MonsterInfo from '@/models/MonsterInfo';

const MONSTER_TEMPLATE_DATA: Array<Partial<MonsterInfo>> = [
    {
        name: 'ゾンビ',
        type: 'アンデッド',
        alignment: '中立にして悪',
        ac: -4,
        maxHp: 1.2,
        ability: [
            0,
            -4,
            +4,
            0,
            0,
            0,
        ],
        attributes: [
            'ダメージ脆弱性: [光輝][斬撃]',
        ],
    },
];

const MONSTER_TEMPLATES = MONSTER_TEMPLATE_DATA.map((init) => {
    return new MonsterInfo(init);
});

export default MONSTER_TEMPLATES;
