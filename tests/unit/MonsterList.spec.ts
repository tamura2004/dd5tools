import Vue from 'vue';
import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';
import MonsterList from '@/components/MonsterList.vue';
import { MODE } from '@/data/ENCOUNTER_DATA';

describe('MonsterList', () => {
  let wrapper: any = null;

  beforeEach(() => {
    Vue.use(Vuetify);
    wrapper = mount(MonsterList, {
      propsData: {
        id: 1,
        mode: MODE.HARD,
      },
    });
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('is render monster name', () => {
    expect(wrapper.text()).toMatch('アウェイクンド・ツリー');
  });

  it('is render mode label', () => {
    expect(wrapper.text()).toMatch('困難');
  });
});
