import { mount } from "~/test/mount";
import Component from "~/pages/menu/master.vue";

describe("pages/menu/master.vue", () => {
  test("is Vue instance", () => {
    const wrapper = mount(Component);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
