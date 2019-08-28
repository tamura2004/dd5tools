import { shallowMount } from "@vue/test-utils";
import Component from "~/pages/menu/master.vue";

describe("pages/menu/master.vue", () => {
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
