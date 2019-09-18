import Vue from "vue";
import pluralize from "pluralize";

export class Collection {
  constructor(name, DBConnector, initValues) {
    this.name = name;
    this.initValues = Array.isArray(initValues) ? initValues : [];
    this.conn = new DBConnector(this.name);
    this.collectionName = this.name;
    this.memberName = pluralize.singular(this.name);
  }
  get state() {
    return () => ({
      values: this.initValues,
      isInitialized: false,
    });
  }
  get getters() {
    return {
      collection: state => state.values,
      [this.collectionName]: state => state.values,
    };
  }
  get mutations() {
    return {
      add(state, data) {
        state.values.push(data);
      },
      modify(state, { id, data }) {
        const index = state.values.findIndex(value => value.id === id);
        Vue.set(state.values, index, { id, ...data });
      },
      remove(state, id) {
        const index = state.values.findIndex(value => value.id === id);
        state.values.splice(index, 1);
      },
      isInitialized(state) {
        state.isInitialized = true;
      },
    };
  }
  get actions() {
    return {
      add: async ({ commit }, data) => {
        const doc = await this.conn.add(data);
        commit("add", doc);
        return doc;
      },
      modify: async ({ getters, commit }, { id, values }) => {
        const data = { ...getters.member(id), ...values };
        await this.conn.modify(id, data);
        commit("modify", { id, data });
      },
      remove: async ({ commit }, id) => {
        if (confirm("本当に削除してよろしいですか")) {
          commit("remove", id);
          await this.conn.remove(id);
        }
      },
      listen: async (context) => {
        this.conn.listen(context);
      },
      init: async (context, docs) => {
        this.conn.init(context, docs);
      },
    };
  }
}
