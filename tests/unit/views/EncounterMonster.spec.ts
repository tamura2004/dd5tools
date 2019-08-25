import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { mount } from '@vue/test-utils';

import EncounterMonster from '@/views/EncounterMonster.vue';
import Encounter from '@/models/Encounter';

describe('EncounterMonster', () => {
  let wrapper: any = null;

  beforeEach(() => {
    Vue.use(Vuetify);
    Vue.use(Vuex);
    const store = new Vuex.Store({
      getters: {
        encounter(state) {
          return (v: any) => new Encounter({
            monsterId: 1,
            monsterNum: 3,
            templateId: 1,
          });
        },
      },
    });
    wrapper = mount(EncounterMonster, {
      store,
      propsData: {
        sessionId: 'abc',
      },
    });
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('is render monster name', () => {
    expect(wrapper.text()).toMatch('スケルトン・アウェイクンド・ツリー');
  });
});
