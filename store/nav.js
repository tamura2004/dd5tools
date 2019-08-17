export const state = () => ({
  title: "dd5tools",
  drawer: false,
});

export const getters = {
  title: state => state.title,
};

export const mutations = {
  title: (state, title) => (state.title = title),
};

export const actions = {
  title({ commit }, title) {
    commit("title", title);
  },
};
