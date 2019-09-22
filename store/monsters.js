import { Collection } from "~/plugins/collection";
import { IndexedDB } from "~/plugins/indexeddb";
import MONSTER_DATA from "~/assets/data/monsters";

export const { state, getters, mutations } = new Collection(MONSTER_DATA);
export const { actions } = new IndexedDB("monsters");
