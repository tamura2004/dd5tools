import { Collection } from "~/plugins/collection";
import { IndexedDB } from "~/plugins/indexeddb";

export const { state, getters, mutations } = new Collection("places");
export const { actions } = new IndexedDB("places");