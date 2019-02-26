import LayoutState from '@/models/LayoutState';

const LayoutStore = {
  namespaced: true,
  state: new LayoutState(),
  mutations: {
    color(state: LayoutState, color: string) {
      state.color = color;
    },
    visible(state: LayoutState, visible: boolean) {
      state.visible = visible;
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
