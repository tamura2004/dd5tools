import Values from "~/plugins/values";

const values = new Values([
  "place",
  "event",
  "prise",
  "boss",
  "zako",
  "num",
]);

export const { state, getters, mutations, actions, accessors } = values;
