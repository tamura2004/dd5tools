import { Collection } from "~/plugins/collection";
import { DATA } from "~/assets/data/encounter/event";

const collection = new Collection(DATA);

export const { state, getters, mutations } = collection;