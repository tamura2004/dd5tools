import { Collection } from "~/plugins/collection";
// import { IndexedDB } from "~/plugins/indexeddb";
import PLACE_DATA from "~/assets/data/places";

export const { state, getters, mutations } = new Collection("places", PLACE_DATA);
// export const { actions } = new IndexedDB("places");