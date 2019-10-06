import Values from "~/plugins/values";

const values = new Values([
  "boss",
  "zako",
  "num",
  "mode",
]);

export const { state, getters, mutations, actions, accessors } = values;
