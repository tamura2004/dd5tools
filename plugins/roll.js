export default ({ app }, inject) => {
  inject("roll", () => {
    const event = app.$sample("encounter/event");
    const place = app.$sample("places");

    let total = app.$party.hard / 2;
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
    return { place, event, boss, zako, num };
  });
};
