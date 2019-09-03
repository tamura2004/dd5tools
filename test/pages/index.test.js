import { shallowMount } from "@vue/test-utils";
import { stubs } from "~/test/stubs";
import { localVue, store } from "~/test/mock/index";
import Component from "~/pages/index.vue";

describe("pages/index.vue", () => {
  test("is Vue instance", () => {
    const wrapper = shallowMount(Component, {
      store,
      localVue,
      stubs,
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
