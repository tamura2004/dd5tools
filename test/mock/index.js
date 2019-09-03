import { createLocalVue } from "@vue/test-utils";
import { monsters } from "~/test/mock/monsters";
import { nav } from "~/test/mock/nav";
import Vuex from "vuex";

export const localVue = createLocalVue();

localVue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    monsters,
    nav,
  },
});
