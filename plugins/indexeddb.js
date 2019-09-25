import zango from "zangodb";
import cuid from "cuid";

const handleErr = e => e && alert(e);

export class IndexedDB {
  constructor(name) {
    this.name = name;
    this.db = new zango.Db(name, { values: ["id"] });
    this.collection = this.db.collection("values");
  }
  get actions() {
    return {
      add: async ({ commit }, data) => {
        commit("add", data);
        await this.collection.insert(data, handleErr);
      },
      modify: async ({ commit }, { id, data }) => {
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
        if (state.values.length > 0) {
          return;
        }
        await this.collection.find({}).forEach(doc => {
          commit("add", doc);
        });
      },
      findOne: async ({}, _id) => {
        const value = await this.collection.findOne({ _id });
        return value;
      },
      write: async ({ dispatch }, payload) => {
        const id = payload.id || payload._id || cuid();
        const _id = id;
        const timestamp = new Date();
        const saved = await dispatch("findOne", id);
        const data = Object.assign({}, saved, payload, { id, _id, timestamp });

        if (typeof saved === "undefined") {
          dispatch("add", data);
        } else {
          dispatch("modify", { id, data });
        }
      },
    };
  }
}
