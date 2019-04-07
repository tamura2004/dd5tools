import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import router from '@/router';

describe('Home', () => {
  Vue.use(Vuetify);
  const wrapper = shallowMount(Home, {
    router,
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('is render menu button', () => {
    expect(wrapper.text()).toMatch('トワイライトD&D5版キャンペーン');
  });
});
