import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

import MonsterInfo from '@/models/MonsterInfo';
import Monster from '@/models/Monster';
import MONSTER_INFOS from '@/data/MONSTERS';
import MONSTER_TEMPLATES from '@/data/MONSTER_TEMPLATES';

describe('Monster', () => {
  const info = MONSTER_INFOS[1];

  it('can initialize without template', () => {
    const monster = new Monster(info);
    expect(monster.name).toBe('アウェイクンド・ツリー');
    expect(monster.maxHp).toBe(59);
    expect(monster.ac).toBe(13);
  });
  
  it('can initialize with template', () => {
    const template = MONSTER_TEMPLATES[0];
    const monster = new Monster(info, template);
    expect(monster.name).toBe('ゾンビ・アウェイクンド・ツリー');
    expect(monster.maxHp).toBe(70);
    expect(monster.ac).toBe(9);
    expect(monster.attributes).toContain('ダメージ脆弱性: [光輝][斬撃]');
  });
});
