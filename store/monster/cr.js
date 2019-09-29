import { Collection } from "~/plugins/collection";
import { DATA } from "~/assets/data/monster/cr";

const collection = new Collection(DATA);

export const { state, getters, mutations } = collection;