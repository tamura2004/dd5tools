import { shallowMount, createLocalVue } from "@vue/test-utils";
import Component from "~/components/layouts/dd-drawer.vue";
import Vuex from "vuex";

describe("components/layouts/dd-drawer.vue", () => {
  test("is Vue instance", () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store({
      modules: {
        nav: {
          namespaced: true,
          modules: {
            drawer: {
              namespaced: true,
              getters: {
                drawer: state => null,
              },
            },
          },
        },
      },
    });
    const wrapper = shallowMount(Component, {
      store,
      localVue,
      stubs: {
        "v-navigation-drawer": true,
        "v-list": true,
        "v-list-item": true,
        "v-list-item-action": true,
        "v-icon": true,
        "v-list-item-content": true,
        "v-list-item-title": true,
      },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
