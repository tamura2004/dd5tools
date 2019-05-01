import Template from '@/models/Template';

const TEMPLATE_DATA: Array<Required<Template>> = [
    {
        name: 'ゾンビ',
        type: 'アンデッド',
        alignment: '中立にして悪',
        acMod: -4,
        hpMod: 1.2,
        abilityMod: [
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
    {
        name: 'スケルトン',
        type: 'アンデッド',
        alignment: '中立にして悪',
        acMod: +1,
        hpMod: 0.8,
        abilityMod: [
            0,
            +2,
            -2,
            0,
            0,
            0,
        ],
        attributes: [
            'ダメージ脆弱性: [光輝][殴打]',
        ],
    },
    {
        name: 'スライム',
        type: '異形',
        alignment: '秩序にして悪',
        acMod: -6,
        hpMod: 2.0,
        abilityMod: [
            0,
            -4,
            0,
            0,
            0,
            0,
        ],
        attributes: [
            'ダメージ脆弱性: [炎][冷気]',
            'ダメージ耐性: [酸][毒][精神][死霊]',
        ],
    },
    {
        name: 'メタル',
        type: '人造',
        alignment: '秩序にして悪',
        acMod: +1,
        hpMod: 0.8,
        abilityMod: [
            0,
            +2,
            -2,
            0,
            0,
            0,
        ],
        attributes: [
            'ダメージ脆弱性: [電撃][酸]',
            'ダメージ耐性: [毒][精神][死霊]',
        ],
    },
    {
        name: 'デーモン',
        type: 'フィーンド',
        alignment: '秩序にして悪',
        acMod: 0,
        hpMod: 1.0,
        abilityMod: [
            0,
            0,
            0,
            0,
            0,
            0,
        ],
        attributes: [
            '飛行：60フィート',
            'ダメージ脆弱性: [光輝]',
        ],
    },
    {
        name: 'ヴァンパイア',
        type: 'アンデッド',
        alignment: '混沌にして悪',
        acMod: 0,
        hpMod: 1,
        abilityMod: [
            0,
            0,
            0,
            0,
            0,
            +4,
        ],
        attributes: [
            '吸血: 与えたダメージと同じだけhpを回復する',
        ],
    },
    {
        name: 'ゴースト',
        type: 'アンデッド',
        alignment: '混沌にして悪',
        acMod: 0,
        hpMod: 1,
        abilityMod: [
            0,
            0,
            0,
            0,
            0,
            +4,
        ],
        attributes: [
            'ダメージ耐性: 非魔法の[殴打][刺突][斬撃]、[酸][毒]',
            'ダメージ脆弱性: [光輝][精神]',
        ],
    },
];

const TEMPLATES = TEMPLATE_DATA.map((init) => {
    return new Template(init);
});

export default TEMPLATES;
