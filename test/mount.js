import { shallowMount } from "@vue/test-utils";
import { stubs } from "~/test/stubs";
import { localVue, store } from "~/test/mock/index";

export const mount = component =>
  shallowMount(component, {
    localVue,
    store,
    stubs,
  });
