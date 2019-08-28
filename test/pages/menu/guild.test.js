import { shallowMount } from "@vue/test-utils";
import Component from "~/pages/menu/guild.vue";

describe("pages/menu/guild.vue", () => {
  test("is Vue instance", () => {
    const wrapper = shallowMount(Component, {
      stubs: {
        "v-layout": true,
      },
      mocks: {
        $title: () => {},
      },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
