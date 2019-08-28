import Form from "~/plugins/form";
const form = new Form("monsters", ["name", "attributes"]);

export const state = form.state
export const mutations = form.mutations
export const getters = form.getters
export const actions = form.actions
