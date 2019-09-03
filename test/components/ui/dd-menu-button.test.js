import { shallowMount } from "@vue/test-utils";
import { stubs } from "~/test/stubs";
import Component from "~/components/ui/dd-menu-button.vue";

describe("components/ui/dd-menu-button.vue", () => {
  test("is Vue instance", () => {
    const wrapper = shallowMount(Component, { stubs });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
