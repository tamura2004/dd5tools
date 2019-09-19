import zango from "zangodb";
import cuid from "cuid";

const handleErr = e => e && alert(e);

export class IndexedDB {
  constructor(name) {
    this.name = name;
    this.db = new zango.Db(name, { values: true });
    this.collection = this.db.collection("values");
  }
  get actions() {
    return {
      add: async ({ commit }, data) => {
        const id = data.id || data._id || cuid();
        const _id = id;
        const timestamp = new Date();
        Object.assign(data, { id, _id, timestamp });
        commit("add", data);
        await this.collection.insert(data, handleErr);
        return id;
      },
      modify: async ({ state, commit }, { id, data }) => {
        const value = state.values.find(v => v.id === id);
        data = Object.assign({}, value, data);
        data.timestamp = new Date();
        commit("modify", { id, data });
        await this.collection.update({ id }, data, handleErr);
      },
      remove: async ({ commit }, id) => {
        if (confirm("本当に削除してよろしいですか")) {
          commit("remove", { id });
          await this.collection.remove({ id }, handleErr);
        }
      },
      listen: async ({ state, commit }) => {
        if (state.isInitialized) {
          return;
        }
        await this.collection.find({}).forEach(doc => {
          commit("add", doc);
        });
      },
      init: async ({ state, dispatch }, docs) => {
        await dispatch("listen");
        if (state.isInitialized) {
          return;
        }
        docs.forEach(doc => {
          dispatch("add", doc);
        });
      },
    };
  }
}
