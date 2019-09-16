import Values from "~/plugins/values";
const values = new Values([
  "name",
  "category",
  "price",
  "damage",
  "type",
  "weight",
  "special",
]);

export const { state, getters, mutations, actions, accessors } = values;
