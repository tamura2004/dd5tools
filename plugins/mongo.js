import Vue from "vue";
import pluralize from "pluralize";
import cuid from "cuid";
import {
  Stitch,
  RemoteMongoClient,
  AnonymousCredential,
} from "mongodb-stitch-browser-sdk";

const client = Stitch.initializeDefaultAppClient("dd5tools-cpjnu");
const db = client
  .getServiceClient(RemoteMongoClient.factory, "mongodb-atlas")
  .db("test");

export default class Mongo {
  constructor(name) {
    this.name = name;
    this.memberName = pluralize.singular(this.name);
  }
  get state() {
    return () => ({
      values: [],
    });
  }
  get getters() {
    return {
      collection: state => state.values,
      [this.name]: state => state.values,
      member: state => id => state.values.find(value => value.id === id),
      [this.memberName]: state => id =>
        state.values.find(value => value.id === id),
    };
  }
  get mutations() {
    return {
      add(state, data) {
        state.values.push(data);
      },
      modify(state, { _id, data }) {
        const index = state.values.findIndex(value => value._id === _id);
        Vue.set(state.values, index, { _id, ...data });
      },
      remove(state, { _id }) {
        const index = state.values.findIndex(value => value._id === _id);
        state.values.splice(index, 1);
      },
    };
  }
  get actions() {
    return {
      add: ({ commit }, data) => {
        const _id = cuid();
        commit("add", { _id, ...data });
        client.auth
          .loginWithCredential(new AnonymousCredential())
          .then(() => db.collection(this.name).insertOne({ _id, ...data }));
      },
      modify: ({ commit }, { _id, data }) => {
        commit("modify", { _id, data });
        client.auth
          .loginWithCredential(new AnonymousCredential())
          .then(() =>
            db.collection(this.name).updateOne({ _id }, { _id, data }),
          );
      },
      remove: ({ commit }, _id) => {
        commit("remove", { _id });
        client.auth
          .loginWithCredential(new AnonymousCredential())
          .then(() => db.collection(this.name).remove({ _id }));
      },
      load: ({ commit }) => {
        client.auth
          .loginWithCredential(new AnonymousCredential())
          .then(() =>
            db
              .collection(this.name)
              .find({}, { limit: 500 })
              .asArray(),
          )
          .then(docs => {
            for (const doc of docs) {
              commit("add", doc);
            }
          });
      },
    };
  }
}
