import { mount } from "~/test/mount";
import Component from "~/pages/menu/guild.vue";

describe("pages/menu/guild.vue", () => {
  test("is Vue instance", () => {
    const wrapper = mount(Component);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
