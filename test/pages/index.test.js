import { shallowMount } from "@vue/test-utils";
import Component from "~/pages/index.vue";

describe("pages/index.vue", () => {
  test("is Vue instance", () => {
    const wrapper = shallowMount(Component, {
      stubs: {
        "v-layout": true,
        "dd-menu-button": true,
      },
      mocks: {
        $title: () => {},
      },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});