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
];

const TEMPLATES = TEMPLATE_DATA.map((init) => {
    return new Template(init);
});

export default TEMPLATES;
