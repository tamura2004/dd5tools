import { Middleware } from "@nuxt/types";
import Vue from "vue";

interface CR {
  index: number;
  cr: string;
  exp: number;
}

const table: CR[] = [
  { index: 0, cr: "0", exp: 10 },
  { index: 1, cr: "1/8", exp: 25 },
  { index: 2, cr: "1/4", exp: 50 },
  { index: 3, cr: "1/2", exp: 100 },
  { index: 4, cr: "1", exp: 200 },
  { index: 5, cr: "2", exp: 450 },
  { index: 6, cr: "3", exp: 700 },
  { index: 7, cr: "4", exp: 1100 },
  { index: 8, cr: "5", exp: 1800 },
  { index: 9, cr: "6", exp: 2300 },
  { index: 10, cr: "7", exp: 2900 },
  { index: 11, cr: "8", exp: 3900 },
  { index: 12, cr: "9", exp: 5000 },
  { index: 13, cr: "10", exp: 5900 },
  { index: 14, cr: "11", exp: 7200 },
  { index: 15, cr: "12", exp: 8400 },
  { index: 16, cr: "13", exp: 10000 },
  { index: 17, cr: "14", exp: 11500 },
  { index: 18, cr: "15", exp: 13000 },
  { index: 19, cr: "16", exp: 15000 },
  { index: 20, cr: "17", exp: 18000 },
  { index: 21, cr: "18", exp: 20000 },
  { index: 22, cr: "19", exp: 22000 },
  { index: 23, cr: "20", exp: 25000 },
];

const setCRFilter: Middleware = () => {
  const toCR = (monster: any) => {
    const row = table.find(row => row.exp === monster.exp);
    return row && row.cr;
  };
  Vue.filter("cr", toCR);
};

export default setCRFilter;
