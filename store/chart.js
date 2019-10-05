// チャート類を一括登録
import { Chart } from "~/plugins/chart";

const context = require.context("~/assets/data/chart", true, /\.js$/);
const DATA = {};

for (const key of context.keys()) {
  // ファイルパス　./hoge/fuga.js　を　hoge/fuga　に変換
  const name = key.replace(/^\.\/|\.js$/g, "");
  const values = context(key).DATA;
  DATA[name] = values;
}

const chart = new Chart(DATA);
export const { state, getters, mutations } = chart;
