import { Collection } from "~/plugins/collection";
import PLACE_DATA from "~/assets/data/places";

const collection = new Collection("places", PLACE_DATA);

export const { state, getters, mutations } = collection;