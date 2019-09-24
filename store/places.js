import { Collection } from "~/plugins/collection";
import { DATA } from "~/assets/data/places";

const collection = new Collection(DATA);

export const { state, getters, mutations } = collection;