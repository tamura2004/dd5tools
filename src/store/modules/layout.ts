import LayoutState from '@/models/LayoutState';
import State from '@/models/State';
import { Module } from 'vuex';

const LayoutStore: Module<LayoutState, State> = {
  namespaced: true,
  state: new LayoutState(),
  mutations: {
    color(state: LayoutState, color: string) {
      state.color = color;
    },
    toolbar(state: LayoutState, toolbar: boolean) {
      state.toolbar = toolbar;
    },
    title(state: LayoutState, title: string) {
      state.title = title;
    },
    drawer(state: LayoutState, drawer: boolean) {
      state.drawer = drawer;
    },
  },
};

export default LayoutStore;
