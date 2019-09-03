import { mount } from "~/test/mount";
import Component from "~/pages/index.vue";

describe("pages/index.vue", () => {
  test("is Vue instance", () => {
    const wrapper = mount(Component);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
