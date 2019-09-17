import { Gateway } from "~/plugins/gateway";

const gateway = new Gateway("places");

export const { state, getters, mutations, actions } = gateway;
