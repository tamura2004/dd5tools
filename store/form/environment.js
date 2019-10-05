import Values from "~/plugins/values";

const values = new Values([
  "place",
  "vehicle",
  "skill",
  "dc",
  "prise",
]);

export const { state, getters, mutations, actions, accessors } = values;
