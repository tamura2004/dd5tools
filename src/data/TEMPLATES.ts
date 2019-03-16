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
            'ダメージ脆弱性: [光輝][斬撃]',
        ],
    },
    {
        name: 'スケルトン',
        type: 'アンデッド',
        alignment: '中立にして悪',
        acMod: +2,
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
            'ダメージ抵抗: [刺突][斬撃][殴打]',
        ],
    },
    {
        name: 'メタル',
        type: '人造',
        alignment: '秩序にして悪',
        acMod: +6,
        hpMod: 0.2,
        abilityMod: [
            0,
            0,
            0,
            0,
            0,
            0,
        ],
        attributes: [
            'ダメージ脆弱性: [電撃]',
        ],
    },
    {
        name: 'デーモン',
        type: 'フィーンド',
        alignment: '秩序にして悪',
        acMod: +2,
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
            'ダメージ脆弱性: [光輝][善]',
        ],
    },
    {
        name: 'ドラゴン',
        type: 'ドラゴン',
        alignment: '混沌にして悪',
        acMod: 0,
        hpMod: 0.5,
        abilityMod: [
            0,
            0,
            0,
            0,
            0,
            0,
        ],
        attributes: [
            'ブレス: 30フィート円錐、3d6(敏捷DC16で半減)',
        ],
    },
];

const TEMPLATES = TEMPLATE_DATA.map((init) => {
    return new Template(init);
});

export default TEMPLATES;
