import { shallowMount, createLocalVue } from "@vue/test-utils";
import Component from "~/pages/monsters/index.vue";
import Vuex from "vuex";

describe("pages/monsters/index.vue", () => {
  test("is Vue instance", () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store({
      modules: {
        monsters: {
          namespaced: true,
          getters: {
            monsters: state => [],
          },
        },
      },
    });
    const wrapper = shallowMount(Component, {
      store,
      localVue,
      stubs: {
        "v-card": true,
        "v-list": true,
        "v-divider": true,
      },
      mocks: {
        $title: () => {},
      },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
