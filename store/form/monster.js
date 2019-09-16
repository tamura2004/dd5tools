import Values from "~/plugins/values";
const values = new Values([
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

export const { state, getters, mutations, actions, accessors } = values;
