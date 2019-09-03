import { mount } from "~/test/mount";
import Component from "~/pages/monsters/index.vue";

describe("pages/monsters/index.vue", () => {
  test("is Vue instance", () => {
    const wrapper = mount(Component);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
