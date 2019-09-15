import Values from "~/plugins/values";
const values = new Values([
  "title",
  "search",
  "extension",
  "add",
  "drawer",
  "query",
  "path",
  "items",
  "pages",
  "page",
])

export const { state, getters, mutations, actions, accessors } = values;
