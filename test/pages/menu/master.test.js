import { shallowMount } from "@vue/test-utils";
import { stubs } from "~/test/stubs";
import { localVue, store } from "~/test/mock/index";
import Component from "~/pages/menu/master.vue";

describe("pages/menu/master.vue", () => {
  test("is Vue instance", () => {
    const wrapper = shallowMount(Component, {
      localVue,
      store,
      stubs,
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
