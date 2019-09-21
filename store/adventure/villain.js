import { Collection } from "~/plugins/collection";
import { DATA } from "~/assets/data/adventure/villain";

const collection = new Collection("data", DATA);

export const { state, getters, mutations } = collection;