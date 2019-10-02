import Values from "~/plugins/values";

const values = new Values([
  "place",
  "event",
  "boss",
  "zako",
  "num",
]);

export const { state, getters, mutations, actions, accessors } = values;
