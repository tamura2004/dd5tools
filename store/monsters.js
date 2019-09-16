import { Gateway } from "~/plugins/gateway";
const gateway = new Gateway("monsters");

export const { state, getters, mutations, actions, accessors } = gateway;
