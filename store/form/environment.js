import Values from "~/plugins/values";

const values = new Values([
  "place",
  "event",
  "prise",
]);

export const { state, getters, mutations, actions, accessors } = values;
