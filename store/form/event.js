import Values from "~/plugins/values";

const values = new Values([
  "place",
  "event",
  "monster",
]);

export const { state, getters, mutations, actions, accessors } = values;
