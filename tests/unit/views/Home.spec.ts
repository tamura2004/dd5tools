import Vue from 'vue';
import Vuetify from 'vuetify';
import Router from 'vue-router';
import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import router from '@/router';

describe('Home', () => {
  Vue.use(Vuetify);
  const wrapper = mount(Home, {
    router,
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('is render menu button', () => {
    expect(wrapper.text()).toMatch('セッション一覧');
  });
});
