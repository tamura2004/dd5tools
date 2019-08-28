export default class Flag {
  constructor(name) {
    this.name = name;
  }

  get state() {
    return () => ({
      [this.name]: false,
    });
  }

  get mutations() {
    return {
      [this.name]: (state, value) => (state[this.name] = value),
    };
  }

  get getters() {
    return {
      [this.name]: state => state[this.name],
    };
  }

  get actions() {
    return {
      toggle: ({ commit, getters }) => {
        commit(this.name, !getters[this.name]);
      },
      on: ({ commit }) => {
        commit(this.name, true);
      },
      off: ({ commit }) => {
        commit(this.name, false);
      },
      set: ({ commit }, value) => {
        commit(this.name, value);
      },
    };
  }
}
