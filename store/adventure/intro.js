import { Collection } from "~/plugins/collection";
import { DATA } from "~/assets/data/adventure/intro";

const collection = new Collection("data", DATA);

export const { state, getters, mutations } = collection;