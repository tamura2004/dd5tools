import { Collection } from "~/plugins/collection";
import { IndexedDB } from "~/plugins/indexeddb";
import WEAPON_DATA from "~/assets/data/weapons";

export const { state, getters, mutations } = new Collection(WEAPON_DATA);
export const { actions } = new IndexedDB("weapons")
