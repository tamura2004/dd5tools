import Values from "~/plugins/values";

const values = new Values([
  "level",
  "num",
  "normal",
  "hard",
]);

export const { state, getters, mutations, actions, accessors } = values;
