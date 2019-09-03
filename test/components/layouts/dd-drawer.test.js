import { mount } from "~/test/mount";
import Component from "~/components/layouts/dd-drawer.vue";

describe("components/layouts/dd-drawer.vue", () => {
  test("is Vue instance", () => {
    const wrapper = mount(Component);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
