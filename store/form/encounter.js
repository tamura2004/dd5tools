import Values from "~/plugins/values";

const values = new Values([
  "boss",
  "zako",
  "num",
  "mode",
  "exp",
  "clue",
  "prise",
  "reason",
]);

export const { state, getters, mutations, actions, accessors } = values;
