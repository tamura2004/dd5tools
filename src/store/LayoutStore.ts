import LayoutState from '@/store/LayoutState';
import BaseState from '@/store/BaseState';
import { Module } from 'vuex';

const LayoutStore: Module<LayoutState, BaseState> = {
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
    icon(state: LayoutState, icon: string) {
      state.icon = icon;
    },
    path(state: LayoutState, path: string) {
      state.path = path;
    },
  },
};

export default LayoutStore;
