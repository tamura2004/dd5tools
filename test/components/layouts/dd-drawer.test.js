import { shallowMount } from "@vue/test-utils";
import { stubs } from "~/test/stubs";
import { localVue, store } from "~/test/mock/index";
import Component from "~/components/layouts/dd-drawer.vue";

describe("components/layouts/dd-drawer.vue", () => {
  test("is Vue instance", () => {
    const wrapper = shallowMount(Component, {
      store,
      localVue,
      stubs,
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
