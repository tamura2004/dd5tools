import Values from "~/plugins/values";
const values = new Values([
  "title",
  "search",
  "extension",
  "add",
  "path",
  "query",
  "items",
  "drawer",
])

export const state = values.state;
export const mutations = values.mutations;
export const getters = values.getters;
export const actions = values.actions;
