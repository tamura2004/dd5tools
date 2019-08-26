import Mongo from "~/plugins/mongo";
const mongo = new Mongo("monsters");

export const state = mongo.state;
export const mutations = mongo.mutations;
export const getters = mongo.getters;
export const actions = mongo.actions;
