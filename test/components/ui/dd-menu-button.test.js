import { shallowMount } from "@vue/test-utils";
import Component from "~/components/ui/dd-menu-button.vue";

describe("components/ui/dd-menu-button.vue", () => {
  test("is Vue instance", () => {
    const wrapper = shallowMount(Component, {
      stubs: {
        "v-btn": true,
      },
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
