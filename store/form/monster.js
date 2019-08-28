import Form from "~/plugins/form";
const form = new Form("monsters", [
  "name",
  "size",
  "type",
  "alignment",
  "ac",
  "hp",
  "mv",
  "ability",
  "exp",
  "attributes",
  "actions",
  "specials",
]);

export const state = form.state;
export const mutations = form.mutations;
export const getters = form.getters;
export const actions = form.actions;
