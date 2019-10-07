import Values from "~/plugins/values";

const values = new Values([
  "client",
  "friend",
  "intro",
  "purpose",
  "villain",
  "monster",
  "climax",
]);

export const { state, getters, mutations, actions, accessors } = values;
