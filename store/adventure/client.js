import { Collection } from "~/plugins/collection";
import { DATA } from "~/assets/data/adventure/client";

const collection = new Collection(DATA);

export const { state, getters, mutations } = collection;