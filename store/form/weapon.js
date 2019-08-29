import Form from "~/plugins/form";
const form = new Form("weapons", [
  "name",
  "skill",
  "cost",
  "damage",
  "type",
  "weight",
  "properties",
]);

export const state = form.state;
export const mutations = form.mutations;
export const getters = form.getters;
export const actions = form.actions;
