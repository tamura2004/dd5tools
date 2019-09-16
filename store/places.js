import { Gateway } from "~/plugins/gateway";
import PLACE_DATA from "~/assets/data/places";

const gateway = new Gateway("places", PLACE_DATA);

export const { state, getters, mutations, actions } = gateway;
