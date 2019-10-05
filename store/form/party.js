import Values from "~/plugins/values";

const values = new Values([
  "level",
  "num",
  "EASY",
  "NORMAL",
  "HARD",
  "HELL",
]);

export const { state, getters, mutations, actions, accessors } = values;
