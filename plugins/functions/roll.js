export default ({ app }) => () => {
  // 難易度の決定
  const mode = app.$sample("encounter/mode");

  // ボスモンスターの決定
  let total = app.$party[mode.name] / 2;
  let exp = app.$lookup("monster/cr", v => v.exp < total, "exp");
  exp = exp || 10;
  const boss = app.$sample("monsters", { exp });

  // 雑魚モンスターの決定
  total -= boss.exp;
  exp = app.$lookup("monster/cr", v => v.exp <= total / 3, "exp");
  exp = exp || 10;
  const zako = app.$sample("monsters", { exp });
  const num = Math.floor(total / zako.exp);

  // 総経験値
  exp = boss.exp + zako.exp * num;

  // 報酬の決定
  const prise = Object.assign({}, app.$sample("prise"));
  if (prise.name === "ポーション") {
    const potions = [];
    for (let i = 0; i < mode.bonus; i++) {
      potions.push(app.$sample("potions").name)
    }
    prise.name = "ポーション（" + potions.join("、") + "）"
  }

  if (prise.name === "ゴールド") {
    prise.name = `${ 100 * mode.bonus * app.$party.num * app.$party.level }gp`
  }

  // モンスターと戦う理由の決定
  const reason = app.$sample("encounter/reasons");

  return { boss, zako, num, mode, exp, prise, reason };
};
