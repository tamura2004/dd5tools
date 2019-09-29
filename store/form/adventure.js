import Values from "~/plugins/values";

const values = new Values([
  "client",
  "climax",
  "friend",
  "intro",
  "purpose",
  "villain",
  "monster",
]);

export const { state, getters, mutations, actions, accessors } = values;
