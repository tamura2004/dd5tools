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
        const id = data.id || data._id || cuid();
        const _id = id;
        const timestamp = new Date();
        Object.assign(data, { id, _id, timestamp });
        commit("add", data);
        await this.collection.insert(data, handleErr);
        return id;
      },
      modify: async ({ commit, dispatch }, { id, data }) => {
        const _id = id;
        const timestamp = new Date();
        const value = await dispatch("findOne", id);
        console.log(value)
        if (!!value) {
          data = Object.assign({}, value, data, { id, _id, timestamp });
          commit("modify", { id, data });
          await this.collection.update({ _id }, data, handleErr);
        } else {
          data = Object.assign({}, data, { id, _id, timestamp });
          dispatch("add", data);
        }
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
    };
  }
}
