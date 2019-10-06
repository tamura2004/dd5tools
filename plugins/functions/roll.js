export default ({ app }) => () => {
  const mode = app.$sample("encounter/mode");
  let total = app.$party[mode.name] / 2;
  let exp = app.$lookup("monster/cr", v => v.exp < total, "exp");
  exp = exp || 10;
  const boss = app.$sample("monsters", { exp });

  if (!boss) {
    alert("null boss");
    return;
  }

  total -= boss.exp;
  exp = app.$lookup("monster/cr", v => v.exp <= total / 3, "exp");
  exp = exp || 10;
  const zako = app.$sample("monsters", { exp });
  if (!zako) {
    alert("null zako");
    return;
  }
  const num = Math.floor(total / zako.exp);
  return { boss, zako, num, mode };
};
