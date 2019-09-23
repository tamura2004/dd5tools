import Values from "~/plugins/values";

const values = new Values([
  "client",
  "climax",
  "friend",
  "intro",
  "purpose",
  "villain",
  "monster",
  "place",
]);

export const { state, getters, mutations, actions, accessors } = values;
