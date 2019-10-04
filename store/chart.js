// チャート類を一括登録
import { Collection } from "~/plugins/collection";

const context = require.context("~/assets/data/chart", true, /\.js$/);
const DATA = {};

for (const key of context.keys()) {
  const name = key.replace(/^\.\/|\.js$/g, "");
  const values = context(key).DATA;
  DATA[name] = values;
}

const collection = new Collection(DATA);
export const { state, getters, mutations } = collection;
