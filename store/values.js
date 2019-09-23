import { Collection } from "~/plugins/collection";
import { IndexedDB } from "~/plugins/indexeddb";

const collection = new Collection();

export const { state, getters, mutations } = collection;
export const { actions } = new IndexedDB("values");
